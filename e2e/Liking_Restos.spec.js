/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
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
});