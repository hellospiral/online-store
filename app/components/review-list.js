import Ember from 'ember';

export default Ember.Component.extend({
  // sortingOptions: ['high-to-low', 'low-to-high'],
  // sortDesc: true,
  // sortAsc: false,
  //
  // actions: {
  //   chooseSortBy(sortingOption) {
  //     if (sortingOption === 'high-to-low') {
  //       this.set('sortDesc', true);
  //       this.set('sortAsc', false);
  //     } else if (sortingOption === 'low-to-high') {
  //       this.set('sortAsc', true);
  //       this.set('sortDesc', false);
  //     }
  //   }
  // },

  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('product.reviews', 'sortBy'),

  actions: {
    formatTimestamp(timestamp) {
      var date = new Date(timestamp).toString();
      return date.substr(4,11);
    }
  }

  // sortByAsc: ['rating'],
  // sortedAscending: Ember.computed.sort('product.reviews', 'sortByAsc')

});
