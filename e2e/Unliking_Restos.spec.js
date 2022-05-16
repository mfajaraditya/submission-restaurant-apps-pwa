/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restos');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one resto', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restos');
  I.amOnPage('/');
  I.waitForElement('.resto-item');
  I.seeElement('.resto-item');

  const firstResto = locate('.restos').first();
  const firstRestoName = await I.grabTextFrom(firstResto.find('.header-name a'));

  I.click(firstResto);
  I.waitForElement('#likeButtonContainer');
  I.seeElement('#likeButtonContainer');
  I.click('#likeButtonContainer');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const favoritedRestoName = await I.grabTextFrom('.header-name');
  assert.strictEqual(firstRestoName, favoritedRestoName);

  const firstRestoLiking = locate('.header-name').first();
  I.click(firstRestoLiking);
  I.seeElement('#unlikeButton');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran untuk ditampilkan', '.restos');
});
