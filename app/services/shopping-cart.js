import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  totalDisplay: 0,

  add(item) {
    this.get('items').pushObject(item);
  },

  total() {
    var allItems = this.get('items');
    var total = 0;
    for (var i = 0; i < allItems.length; i++) {
      total += parseInt(allItems[i].get('cost').substr(1));
    }
    this.set('totalDisplay', total);
  }
});
