import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      product: this.store.findRecord('product', params.item_id),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    save4(params) {
      var newReview = this.store.createRecord('review', params);
      var product = params.product;
      product.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      this.transitionTo('item', params.product);
      console.log(product.get('reviews'));
    }
  }
});

//
// model(params) {
//   return this.store.findRecord('product', params.item_id);
// }
