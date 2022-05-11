import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestos: FavoriteRestaurantIdb,
    resto,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
