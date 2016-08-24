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
        rating: this.get('rating'),
        product: this.get('product')
      };
      this.set('addNewReview', false);
      console.log(params);
      this.sendAction('save2', params);
    }
  }
});
