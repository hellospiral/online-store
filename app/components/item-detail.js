import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      reviews: this.store.findAll('review')
    });
  },

  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.get('shoppingCart').total();
      this.sendAction('goToCart');
    },

    save3(params) {
      this.sendAction('save3', params);
    }
  }
});
