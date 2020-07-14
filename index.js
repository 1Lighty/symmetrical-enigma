const { Plugin } = require('@classes');


module.exports = class ModuleManager extends Plugin {
  async start() {
    console.log('Plugin started');
  }

  async stop() {
    console.log('Plugin stopped');
  }
};
