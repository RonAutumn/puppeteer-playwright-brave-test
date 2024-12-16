const { MCPServer } = require('@vscode/mcp-server');
const { BrowserRunner } = require('./browser-runner');

class MCPAgent {
  constructor() {
    this.server = new MCPServer({
      name: 'puppeteer-playwright-brave-test',
      version: '1.0.0'
    });
    this.browserRunner = new BrowserRunner();
  }

  async start() {
    await this.server.start();
    this.server.onRequest('runTest', async (params) => {
      const { type } = params;
      if (type === 'puppeteer') {
        return this.browserRunner.runPuppeteerTest();
      } else if (type === 'playwright') {
        return this.browserRunner.runPlaywrightTest();
      }
      throw new Error(`Unknown test type: ${type}`);
    });
  }

  async stop() {
    await this.server.stop();
  }
}

module.exports = MCPAgent;