class FavoriteRestoSearchPresenter {
  constructor({ favoriteRestos, view }) {
    this.view = view;
    this.listenToSearchRequestByUser();
    this.favoriteRestos = favoriteRestos;
  }

  listenToSearchRequestByUser() {
    this.view.runWhenUserIsSearching((latestQuery) => {
      this.searchRestos(latestQuery);
    });
  }

  async searchRestos(latestQuery) {
    this.latestQuery = latestQuery.trim();
    let foundRestos;
    if (this.latestQuery.length > 0) {
      foundRestos = await this.favoriteRestos.searchRestos(this.latestQuery);
    } else {
      foundRestos = await this.favoriteRestos.getAllRestos();
    }
    this.showFoundRestos(foundRestos);
  }

  showFoundRestos(restos) {
    this.view.showFavoriteRestos(restos);
  }

  get latestQuery() {
    return this.latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
