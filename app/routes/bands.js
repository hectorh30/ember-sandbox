import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 5
});

var pretender = Song.create({
  title: 'The pretender',
  band: 'Foo Fighters',
  rating: 1
});

var daughter = Song.create({
  title: 'Daughter',
  band: 'Pearl Jam',
  rating: 5
});

var pretender2 = Song.create({
  title: 'The pretender2',
  band: 'Foo Fighters',
  rating: 3
});

var BandsCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['name:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties')
});

var ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
var pearlJam = Band.create({
  name: 'Pearl Jam',
  songs: [daughter],
  description: 'Pearl Jam is an American rock band, formed in Seattle, Washington in 1990'
});
var fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender, pretender2] });

var bands = BandsCollection.create();
bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters]);

export default Ember.Route.extend({
  model: function() {
    return bands;
  },

  actions: {
    didTransition: function() {
      document.title = 'Bands - Rock & Roll';
    },

    createBand: function() {
      var name = this.get('controller').get('name');
      var band = Band.create({name: name});

      bands.get('content').pushObject(band);
      this.get('controller').set('name', '');

      this.transitionTo('bands.band.songs', band);
    }
  }
});
