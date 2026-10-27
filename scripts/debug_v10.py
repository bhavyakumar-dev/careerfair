import asyncio
import http.server
import socketserver
import threading
import time
from playwright.async_api import async_playwright

PORT = 8994

def start_server():
    handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), handler)
    httpd.serve_forever()

async def main():
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    time.sleep(1)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        page.on("pageerror", lambda e: print(f"PAGEERROR STACK:\n{getattr(e, 'stack', e)}"))
        await page.goto(f"http://127.0.0.1:{PORT}/v10.html")
        await page.wait_for_timeout(1000)
        await page.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
