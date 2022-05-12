class FavoriteRestoShowPresenter {
  constructor({ view, favoriteRestos }) {
    this.view = view;
    this.favoriteRestos = favoriteRestos;

    this.showFavoriteRestos();
  }

  async showFavoriteRestos() {
    const restos = await this.favoriteRestos.getAllRestos();
    this.displayRestos(restos);
  }

  displayRestos(restos) {
    this.view.showFavoriteRestos(restos);
  }
}

export default FavoriteRestoShowPresenter;
