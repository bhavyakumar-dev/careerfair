import json
import os
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

TOKEN = os.environ.get("LAPTOP_TOKEN", "")
OLLAMA_URL = os.environ.get("OLLAMA_URL", "http://127.0.0.1:11434/api/chat")
PORT = int(os.environ.get("LAPTOP_RELAY_PORT", "8765"))
MAX_BODY = 30000

if len(TOKEN) < 24:
    raise SystemExit("Set LAPTOP_TOKEN to a random value of at least 24 characters before starting the relay.")

class RelayHandler(BaseHTTPRequestHandler):
    server_version = "OpenMicRelay"

    def send_json(self, status, payload):
        raw = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self):
        if self.path != "/healthz":
            self.send_json(404, {"error": "Not found."})
            return
        if self.headers.get("Authorization", "") != f"Bearer {TOKEN}":
            self.send_json(401, {"error": "Unauthorized."})
            return
        self.send_json(200, {"ok": True, "service": "open-mic-ollama-relay"})

    def do_POST(self):
        if self.path != "/api/chat":
            self.send_json(404, {"error": "Not found."})
            return
        if self.headers.get("Authorization", "") != f"Bearer {TOKEN}":
            self.send_json(401, {"error": "Unauthorized."})
            return
        try:
            size = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self.send_json(400, {"error": "Invalid content length."})
            return
        if size < 1 or size > MAX_BODY:
            self.send_json(413, {"error": "Request must be between 1 and 30000 bytes."})
            return
        raw = self.rfile.read(size)
        try:
            payload = json.loads(raw)
            if not isinstance(payload, dict) or not isinstance(payload.get("messages"), list):
                raise ValueError
            payload["stream"] = False
            upstream = urllib.request.Request(OLLAMA_URL, data=json.dumps(payload).encode("utf-8"), headers={"Content-Type": "application/json"}, method="POST")
            with urllib.request.urlopen(upstream, timeout=22) as response:
                result = response.read(2_000_000)
                self.send_response(response.status)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Cache-Control", "no-store")
                self.send_header("Content-Length", str(len(result)))
                self.end_headers()
                self.wfile.write(result)
        except urllib.error.HTTPError as error:
            self.send_json(502, {"error": f"Ollama returned HTTP {error.code}."})
        except (urllib.error.URLError, TimeoutError):
            self.send_json(502, {"error": "Ollama is unavailable or timed out."})
        except (ValueError, json.JSONDecodeError):
            self.send_json(400, {"error": "Expected a valid chat request."})
        except Exception:
            self.send_json(502, {"error": "The local model request failed."})

    def log_message(self, format_string, *args):
        print(f"{self.address_string()} {args[1] if len(args) > 1 else ''} {args[0] if args else ''}")

if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), RelayHandler)
    print(f"Authenticated Open Mic relay listening on 127.0.0.1:{PORT}")
    server.serve_forever()
