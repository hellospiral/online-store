import Ember from 'ember';

export default Ember.Component.extend({
  addProduct: false,
  actions: {
    addProductShow() {
      this.set('addProduct', true);
    },
    add() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost')
      };
      this.set('addProduct', false);
      this.sendAction('add', params);
      this.set('title', "");
      this.set('image', "");
      this.set('description', "");
      this.set('cost', "");
    }
  }

});
