class BrowserRunner {
  async runPuppeteerTest() {
    const puppeteerTest = require('./puppeteerTest');
    return puppeteerTest();
  }

  async runPlaywrightTest() {
    const playwrightTest = require('./playwrightTest');
    return playwrightTest();
  }
}

module.exports = { BrowserRunner };