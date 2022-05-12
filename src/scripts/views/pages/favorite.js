/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';
import FavoriteRestoSearchView from './liked-restos/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';

const view = new FavoriteRestoSearchView();
const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestaurantIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestos: FavoriteRestaurantIdb });

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    const heroElement = document.querySelector('.hero__inner');
    heroElement.style.display = ' none';
  },
};

export default Favorite;
