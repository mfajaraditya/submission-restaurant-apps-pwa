import RestaurantApiSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { restoDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <div id="resto" class="resto"></div>
          <div id="likeButtonContainer"</div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantApiSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');

    restoContainer.innerHTML = restoDetail(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
