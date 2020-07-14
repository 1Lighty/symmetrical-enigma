module.exports = class ModuleManager {
  async start() {
    console.log('Plugin started');
  }

  async stop() {
    console.log('Plugin stopped');
  }
};
