import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  comment: DS.attr(),
  rating: DS.attr(),
  product: DS.belongsTo('product', {async: true}),
  timestamp: DS.attr()
});
