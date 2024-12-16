const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Opening Brave Search with Puppeteer...');
  // Navigate to Brave Search
  await page.goto('https://search.brave.com');

  // Type the search query into the search bar and hit enter
  await page.type('input[name="q"]', 'How to use Playwright with GitHub');
  await page.keyboard.press('Enter');
  console.log('Search complete...');

  // Wait for search results to load
  await page.waitForTimeout(3000); // Wait 3 seconds for results to load

  // Click the first search result
  await page.click('a[href^="https://"]');
  console.log('Navigated to first search result...');

  // Take a screenshot of the resulting page
  await page.screenshot({ path: 'puppeteer-result.png' });
  console.log('Screenshot saved as puppeteer-result.png');

  await browser.close();
})();