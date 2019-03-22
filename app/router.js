import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('forms');
  this.route('buttons');
  this.route('typography');
  this.route('modals');
});

export default Router;
