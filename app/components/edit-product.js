import Ember from 'ember';

export default Ember.Component.extend({
  editProduct: false,
  actions: {
    editProductShow() {
      this.set('editProduct', true);
    },
    edit(product) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost')
      };
      this.sendAction('edit', product, params);
      this.set('title', "");
      this.set('image', "");
      this.set('description', "");
      this.set('cost', "");
      this.set('editProduct', false);
    }
  }
});
