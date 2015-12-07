import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 5
});

var pretender = Song.create({
  title: 'The pretender',
  band: 'Foo Fighters',
  rating: 3
});

var pretender2 = Song.create({
  title: 'The pretender2',
  band: 'Foo Fighters',
  rating: 3
});

var SongCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['rating:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties')
});

var songs = SongCollection.create();
songs.get('content').pushObjects([blackDog, pretender, pretender2]);

export default Ember.Route.extend({
  model: function() {
    return songs;
  }
});
