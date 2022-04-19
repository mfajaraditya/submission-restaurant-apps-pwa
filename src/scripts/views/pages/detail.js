import RestaurantApiSource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import { restoDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <div id="resto" class="resto"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantApiSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = restoDetail(resto);
  },
};

export default Detail;
