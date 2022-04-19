import CONFIG from '../../globals/config';

const restoDetail = (resto) => `
     <h2 class="resto__name">${resto.name}</h2>
     <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId} alt="${resto.name}" />
     <div class="resto__info">
     <h3>Detail</h3>
     <p class="resto__address">${resto.address}</p>
     <p class="resto__city">${resto.city}</p>
     <p class="resto__desc">${resto.description}</p>
     <p class="resto__menus_foods">${resto.foods}</p>
     <p class="resto__menus_drinks">${resto.drinks}</p>
</div>
`;

const restoItem = (restos) => `
     <div class="resto-item">
          <div class="resto-item__header">
               <img class="resto-item__header__poster" alt="${restos.name}" 
               src="${CONFIG.BASE_IMAGE_URL + restos.pictureId}">
               <div class="resto-item__header__rating">
                    <p>&#9733;<span class="resto-item__header__rating__score">${restos.rating}</span></p>
               </div>
          </div>
          <div class="resto-item__content">
               <h3><a href="${`/#/detail/${restos.id}`}">${restos.name}</a></h3>
          </div>
     </div>
`;

export { restoItem, restoDetail };
