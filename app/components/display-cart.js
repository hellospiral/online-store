import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    displayTotal() {
      this.get('shoppingCart').total();
    },

    toStore() {
      console.log('toStore ran');
      this.sendAction('toStore');

    }
  }
});








// totalCost: Ember.computed('shoppingCart.items.[]', function() {
//   var total = 0;
//   for (var i = 0; i < this.get('shoppingCart.items.length'); i++) {
//     console.log(this.get('shoppingCart.items'));
//     var numberAsString = this.get('shoppingCart.items[i].cost');
//     // var numberAsInt = parseInt(numberAsString.substr(1));
//     // total += numberAsInt;
//   }
//   return total;
