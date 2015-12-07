import Ember from 'ember';

var Band = Ember.Object.extend({
  name: '',
  language: '',

  slug: Ember.computed('name', function() {
    console.log('Recomputing slug');

    return this.get('name').dasherize();
  }),

  site: Ember.computed('slug', 'language', function() {
    console.log('Recomputing site');

    return 'http://bands.com/' + this.get('slug') + '.' + this.get('language');
  })
});

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
var pearlJam = Band.create({ name: 'Pearl Jam', songs: [daughter] });
var fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender, pretender2] });

var bands = BandsCollection.create();
bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters]);

export default Ember.Route.extend({
  model: function() {
    return bands;
  }
});
