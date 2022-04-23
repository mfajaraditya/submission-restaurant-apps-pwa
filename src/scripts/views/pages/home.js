import RestaurantApiSource from '../../data/restaurant-source';
import { restoItem } from '../templates/template-creator';

const Home = {
  async render() {
    return `
  
     <div class="content">
      <div class="content-heading-container">
        <h2 class="content-heading">Home Page</h2>
      </div>
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
