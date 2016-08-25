import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    toStore() {
      this.transitionTo('store');
    }
  }
});
