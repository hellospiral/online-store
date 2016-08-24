import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },

  actions: {
    delete(product) {
      if (confirm("Are you sure you want to delete this product?")) {
        product.destroyRecord();
      }
    }
  }
});
