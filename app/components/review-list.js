import Ember from 'ember';

export default Ember.Component.extend({
  // sortingOptions: ['high-to-low', 'low-to-high'],
  // sortDesc: true,
  // sortAsc: false,
  //
  // actions: {
  //   chooseSortBy(sortingOption) {
  //     // if (sortingOption === 'high-to-low') {
  //     //   this.set('sortDesc', true);
  //     //   this.set('sortAsc', false);
  //     // } else if (sortingOption === 'low-to-high') {
  //     //   this.set('sortAsc', true);
  //     //   this.set('sortDesc', false);
  //     // }
  //   }
  // },

  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('product.reviews', 'sortBy'),
  sortByAsc: ['rating'],
  sortedAscending: Ember.computed.sort('product.reviews', 'sortByAsc'),

  averageRating: Ember.computed('product.reviews', function() {
    var reviews = this.get('product.reviews');
    var ratingsArray = reviews.getEach('rating');
    var total = 0;
    for (var i = 0; i < ratingsArray.length; i++) {
      total += ratingsArray[i];
    }
    return (total / ratingsArray.length).toFixed([1]);
  })


});
