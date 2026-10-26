import json
import os
import re
import urllib.error
import urllib.request
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

TOKEN = os.environ.get("LAPTOP_TOKEN", "careers-fair-laptop-relay-2026-key")
OLLAMA_URL = os.environ.get("OLLAMA_URL", "http://127.0.0.1:11434/api/chat")
PORT = int(os.environ.get("LAPTOP_RELAY_PORT", "8765"))
MAX_BODY = 30000
MAX_VIDEO_BODY = 50 * 1024 * 1024
RECORDINGS_DIR = os.path.join(os.getcwd(), "recordings")

os.makedirs(RECORDINGS_DIR, exist_ok=True)

class RelayHandler(BaseHTTPRequestHandler):
    server_version = "OpenMicRelay"

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

    def send_json(self, status, payload):
        raw = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self):
        if self.path == "/healthz":
            if self.headers.get("Authorization", "") != f"Bearer {TOKEN}":
                self.send_json(401, {"error": "Unauthorized."})
                return
            self.send_json(200, {"ok": True, "service": "open-mic-ollama-relay"})
            return
        if self.path == "/api/status":
            files = os.listdir(RECORDINGS_DIR)
            self.send_json(200, {"ok": True, "recordingsCount": len(files), "folder": RECORDINGS_DIR})
            return
        self.send_json(404, {"error": "Not found."})

    def do_POST(self):
        if self.path == "/api/save-video":
            try:
                size = int(self.headers.get("Content-Length", "0"))
            except ValueError:
                self.send_json(400, {"error": "Invalid content length."})
                return
            if size < 1 or size > MAX_VIDEO_BODY:
                self.send_json(413, {"error": "Video exceeds 50MB."})
                return
            raw_filename = self.headers.get("X-Filename", "")
            clean_name = re.sub(r"[^a-zA-Z0-9_\-\.]", "_", raw_filename).strip("_")
            if not clean_name.endswith(".webm"):
                stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                clean_name = f"newsroom_{stamp}.webm"
            target_path = os.path.join(RECORDINGS_DIR, clean_name)
            video_bytes = self.rfile.read(size)
            with open(target_path, "wb") as f:
                f.write(video_bytes)
            print(f"[VIDEO SAVED TO LAPTOP] {clean_name} ({len(video_bytes) / 1024 / 1024:.2f} MB)")
            self.send_json(200, {"ok": True, "saved": clean_name, "path": target_path})
            return

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
                self.send_header("Access-Control-Allow-Origin", "*")
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
    print(f"Authenticated Open Mic relay and Video Sink listening on 127.0.0.1:{PORT}")
    print(f"Saving incoming videos directly to: {RECORDINGS_DIR}")
    server.serve_forever()
