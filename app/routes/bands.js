import Ember from 'ember';
import Band from '../models/band';

export default Ember.Route.extend({
  model: function() {
    var bands = this.store.findAll('band');

    return bands;
  },

  actions: {
    didTransition: function() {
      document.title = 'Bands - Rock & Roll';
    },

    createBand: function() {
      var route = this,
        controller = this.get('controller');

      var band = this.store.createRecord('band', controller.getProperties('name'));

      band.save().then(function() {
        controller.set('name', '');
        route.transitionTo('bands.band.songs', band);
      });
    }
  }
});
