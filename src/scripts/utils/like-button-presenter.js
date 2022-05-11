/* eslint-disable no-underscore-dangle */
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { likeButtonTemplate, likedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestaurantIdb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = likeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = likedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
