module.exports = {
  use: [
    '@neutrinojs/node', {
      targets: {
        node: '8.9'
      },
    }
  ],
  options: {
    root: '.',
    source : '.',
    mains: {
      server: './server.js'
    }
  }
};
