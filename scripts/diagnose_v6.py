import asyncio
import http.server
import socketserver
import threading
import time
from playwright.async_api import async_playwright

PORT = 8991

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

        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("console", lambda msg: errors.append(f"CONSOLE {msg.type}: {msg.text}") if msg.type in ["error", "warning"] else None)

        print(f"Navigating to http://127.0.0.1:{PORT}/v6/games.html")
        await page.goto(f"http://127.0.0.1:{PORT}/v6/games.html")
        await page.wait_for_load_state("networkidle")

        cards = await page.query_selector_all(".game-card")
        print(f"Found {len(cards)} game cards on page.")

        buttons = await page.query_selector_all(".game-card .game-btn")
        print(f"Found {len(buttons)} main game buttons.")

        for i, btn in enumerate(buttons):
            btn_text = await btn.inner_text()
            print(f"Testing Button {i+1}: '{btn_text}'")
            try:
                await btn.click()
                await page.wait_for_timeout(300)
                active_modals = await page.query_selector_all(".game-modal.active")
                print(f"  Active modals after click: {len(active_modals)}")
                if len(active_modals) > 0:
                    modal = active_modals[0]
                    modal_id = await modal.get_attribute("id")
                    print(f"  Modal opened: #{modal_id}")
                    close_btn = await modal.query_selector(".close-modal")
                    if close_btn:
                        await close_btn.click()
                        await page.wait_for_timeout(100)
                    else:
                        print("  NO CLOSE BUTTON FOUND!")
            except Exception as ex:
                print(f"  ERROR clicking {btn_text}: {ex}")

        print("\nAll reported errors/warnings during test:")
        for err in errors:
            print("  ", err)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
