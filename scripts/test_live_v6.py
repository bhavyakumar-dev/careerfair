import asyncio
from playwright.async_api import async_playwright

async def main():
    urls = [
        "https://careerswithenglish.bhavyakumar.workers.dev/v6",
        "https://careerswithenglish.bhavyakumar.workers.dev/v6/",
        "https://careerswithenglish.bhavyakumar.workers.dev/v6/games",
        "https://careerswithenglish.bhavyakumar.workers.dev/v6/games.html"
    ]
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for u in urls:
            page = await browser.new_page()
            errors = []
            page.on("pageerror", lambda e: errors.append(str(e)))
            page.on("console", lambda msg: errors.append(f"CONSOLE {msg.type}: {msg.text}") if msg.type in ["error"] else None)

            print(f"\n--- Checking URL: {u} ---")
            resp = await page.goto(u, wait_until="networkidle")
            status = resp.status if resp else "NO_RESPONSE"
            final_url = page.url
            print(f"Status: {status} | Final URL: {final_url}")
            title = await page.title()
            print(f"Title: {title}")

            if "games" in u or "games.html" in final_url:
                buttons = await page.query_selector_all(".game-card .game-btn")
                print(f"Game buttons count: {len(buttons)}")
                if len(buttons) > 0:
                    first_btn = buttons[0]
                    btn_text = await first_btn.inner_text()
                    await first_btn.click()
                    await page.wait_for_timeout(400)
                    active_modals = await page.query_selector_all(".game-modal.active")
                    print(f"Clicked '{btn_text}', active modals: {len(active_modals)}")

            if "v6" in u and ("games" not in u):
                games_link = await page.query_selector("a[href*='games']")
                if games_link:
                    href = await games_link.get_attribute("href")
                    print(f"Games link found with href: '{href}'")
                    await games_link.click()
                    await page.wait_for_timeout(800)
                    print(f"After clicking games link, URL is: {page.url}")
                    print(f"Page title after click: {await page.title()}")

            for err in errors:
                print(f"ERROR: {err}")

            await page.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
