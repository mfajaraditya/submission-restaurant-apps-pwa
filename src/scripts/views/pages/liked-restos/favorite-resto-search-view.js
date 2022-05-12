/* eslint-disable class-methods-use-this */

import { restoItem } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
          <div class="content">
       <input id="query" type="text">
       <h2 class="content__heading">Your Liked Restaurant</h2>
           <div id="restos" class="restos">
                      
           </div>
       </div>
       `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestos(restos) {
    this.showFavoriteMovies(restos);
  }

  showFavoriteRestos(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(restoItem(resto)), '');
    } else {
      html = this.getEmptyRestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found restos__not__found">Tidak ada restoran untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
