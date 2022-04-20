import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { restoItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
     <h2 class="content__heading">Favorite Page</h2>
             <div id="restos" class="restos">
             </div>
             </div>
             `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += restoItem(resto);
    });
  },
};

export default Favorite;
