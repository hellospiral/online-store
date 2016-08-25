import Ember from 'ember';

export function reviewRatingStars(params) {
  var rating = parseInt(params[0].get('rating'));
  var starsHTML = "";
  for (var i = 0; i < rating; i++) {
    starsHTML += "<span class='glyphicon glyphicon-star' aria-hidden='true'></span>"
  }
  return Ember.String.htmlSafe(starsHTML);
}

export default Ember.Helper.helper(reviewRatingStars);
