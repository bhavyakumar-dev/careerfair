import asyncio
import http.server
import os
import socketserver
import threading
import time
from playwright.async_api import async_playwright

PORT = 8992

def start_server():
    handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), handler)
    httpd.serve_forever()

async def main():
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    time.sleep(1)

    versions = [
        {"name": "v1 (Pavilion)", "path": "/index.html"},
        {"name": "v2 (Premier)", "path": "/v2.html"},
        {"name": "v3 (Open Mic)", "path": "/v3.html"},
        {"name": "v4 (Alexandria)", "path": "/v4.html"},
        {"name": "v5 (Mobility)", "path": "/v5.html"},
        {"name": "v6 Prologue", "path": "/v6/index.html"},
        {"name": "v6 Act I History", "path": "/v6/history.html"},
        {"name": "v6 Act II Careers", "path": "/v6/careers.html"},
        {"name": "v6 Act III Colleges", "path": "/v6/colleges.html"},
        {"name": "v6 Act IV Games", "path": "/v6/games.html"},
        {"name": "v6 Epilogue Feedback", "path": "/v6/feedback.html"},
        {"name": "v7 (Renaissance)", "path": "/v7.html"},
        {"name": "v8 (Arena)", "path": "/v8.html"},
        {"name": "v9 (Newsroom)", "path": "/v9.html"},
        {"name": "v10 (Cyberpunk)", "path": "/v10.html"},
        {"name": "v12 (Glassmorphism)", "path": "/v12.html"},
        {"name": "v14 (Split Vault)", "path": "/v14.html"},
        {"name": "v15 (Autonomous)", "path": "/v15.html"},
        {"name": "v16 (Fusion v6/v7)", "path": "/v16.html"}
    ]

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        results = []

        for v in versions:
            url = f"http://127.0.0.1:{PORT}{v['path']}"
            page = await browser.new_page()
            errors = []
            page_errors = []
            failed_requests = []

            page.on("pageerror", lambda e: page_errors.append(str(e)))
            page.on("console", lambda msg: errors.append(f"{msg.type}: {msg.text}") if msg.type in ["error"] else None)
            page.on("requestfailed", lambda req: failed_requests.append(f"{req.url} ({req.failure})"))

            try:
                resp = await page.goto(url, wait_until="networkidle", timeout=10000)
                status = resp.status if resp else 0
                title = await page.title()

                buttons = await page.query_selector_all("button")
                inputs = await page.query_selector_all("input")
                links = await page.query_selector_all("a")

                clickable_count = len(buttons)
                sample_clicks = 0
                for b in buttons[:3]:
                    try:
                        if await b.is_visible() and await b.is_enabled():
                            await b.click(timeout=1000)
                            sample_clicks += 1
                            await page.wait_for_timeout(100)
                    except Exception:
                        pass

                results.append({
                    "name": v["name"],
                    "path": v["path"],
                    "status": status,
                    "title": title,
                    "buttons": clickable_count,
                    "inputs": len(inputs),
                    "links": len(links),
                    "sample_clicks": sample_clicks,
                    "page_errors": page_errors,
                    "console_errors": errors,
                    "failed_requests": failed_requests,
                    "pass": status == 200 and len(page_errors) == 0 and len(failed_requests) == 0
                })
            except Exception as ex:
                results.append({
                    "name": v["name"],
                    "path": v["path"],
                    "status": "EXCEPTION",
                    "error": str(ex),
                    "pass": False
                })
            finally:
                await page.close()

        await browser.close()

    print("\n======================= DETAILED BUILD & RUNTIME REPORT =======================")
    passed_count = sum(1 for r in results if r.get("pass"))
    print(f"Total Versions Tested: {len(results)} | Passed: {passed_count} | Failed: {len(results) - passed_count}\n")

    for r in results:
        status_sym = "[OK]" if r.get("pass") else "[FAIL]"
        print(f"{status_sym} {r['name']} ({r['path']}) -> Status: {r.get('status')}")
        if r.get("pass"):
            print(f"     Title: {r.get('title')}")
            print(f"     Elements: {r.get('buttons')} buttons, {r.get('inputs')} inputs, {r.get('links')} links | Clicked: {r.get('sample_clicks')}")
            if r.get("console_errors"):
                print(f"     Console errors ({len(r['console_errors'])}): {r['console_errors'][:2]}")
        else:
            if "error" in r:
                print(f"     Fatal Error: {r['error']}")
            if r.get("page_errors"):
                print(f"     Page Errors: {r['page_errors']}")
            if r.get("failed_requests"):
                print(f"     Failed Requests: {r['failed_requests']}")
            if r.get("console_errors"):
                print(f"     Console Errors: {r['console_errors']}")
    print("===============================================================================\n")

if __name__ == "__main__":
    asyncio.run(main())
