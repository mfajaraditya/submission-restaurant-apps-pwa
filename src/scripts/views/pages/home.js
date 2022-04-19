import RestaurantApiSource from '../../data/restaurantapi-source';
import { restoItem } from '../templates/template-creator';

const Home = {
  async render() {
    return `
     <div class="content">
     <h2 class="content__heading">Home Page</h2>
     <div id="restos" class="restos">
     </div>
     </div>
                `;
  },

  async afterRender() {
    const restos = await RestaurantApiSource.home();
    const restoContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restoContainer.innerHTML += restoItem(resto);
    });
  },
};

export default Home;
