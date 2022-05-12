Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.seeElement(.'resto__name a');

  const firstResto = locate('.resto__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favirite');
  I.seeElement('.resto-item');

  const favoritedRestoName = await I.grabTextFrom('.resto_name');
  AuthenticatorAssertionResponse.strictEqual(firstRestoName, favoritedRestoName);
});
