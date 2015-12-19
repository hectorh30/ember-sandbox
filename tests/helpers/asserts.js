import Ember from 'ember';

function assertTrimmedText(app, assert, selector, text, errorMessage) {
  var element = findWithAssert(selector);
  var elementText = element.text().trim();

  assert.equal(elementText, text, errorMessage);
}

function assertLength(app, assert, selector, length, errorMessage) {
  assert.equal(find(selector).length, length, errorMessage);
}

Ember.Test.registerHelper('assertTrimmedText', assertTrimmedText);
Ember.Test.registerHelper('assertLength', assertLength);
