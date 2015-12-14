import DS from 'ember-data';

export default DS.Model.extend({
  // Defaults to 'string'
  name: DS.attr(),
  description: DS.attr(),
  songs: DS.hasMany('song')
});
