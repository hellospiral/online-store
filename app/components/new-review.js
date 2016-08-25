import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    save1() {
      var params = {
        username: this.get('username'),
        comment: this.get('comment'),
        rating: parseInt(this.get('rating')),
        product: this.get('product'),
        timestamp: Date.now()
      };
      this.set('addNewReview', false);
      this.sendAction('save2', params);
    }
  }
});
