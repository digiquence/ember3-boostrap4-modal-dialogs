'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg', 'ttf', 'woff'],
      prepend: '/ember3-bootstrap4-modal-dialogs/'
    },
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    }
  });
  // Stylesheet part 1
  app.import('vendor/style-start.css');
 
  // Bootstrap
  app.import('node_modules/bootstrap/dist/css/bootstrap.css');

  // Stylesheet part 2
  app.import('vendor/style-end.css');

  // Simple line icons
  app.import('node_modules/simple-line-icons/css/simple-line-icons.css');
  
  return app.toTree();
};