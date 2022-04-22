import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { restoItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
    <h2 class="content-heading">Favorite Page</h2>
    <div id="restos" class="restos">
    </div>
    </div>
             `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    if(restos.length === 0) {
      restosContainer.innerHTML = `
        <div class="fav-resto">
        ====================================== <br/>
        Restoran favorit anda tidak ditemukan, silahkan tambahkan!<br/>
        ======================================
        </div>
      `;
    }
    const total = restos.length;
    restos.forEach((resto, index) => {
      restosContainer.innerHTML += restoItem(resto, index, total);
    });
  },
};

export default Favorite;
