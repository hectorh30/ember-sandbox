import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('star-rating', 'starRatingComponent', {
  integration: true
});

test('Renders the full and empty stars correctly', function(assert) {
  assert.expect(1);

  var song = Ember.Object.create({ rating: 4 });
  this.set('song', song);
  this.set('maxRating', 5);

  this.render(hbs`{{star-rating item=song rating=song.rating maxRating=maxRating}}`);

  assert.equal(this.$('.glyphicon-star').length, 4, 'The right amount of full stars is rendered');
});
