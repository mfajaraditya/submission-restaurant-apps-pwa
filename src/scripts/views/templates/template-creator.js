import CONFIG from '../../globals/config';

const restoDetail = (resto) => `
<div class="detail">
<div>
<img class="resto__poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
</div>
<div class="resto__info">
<h2 class="resto__name">${resto.name}</h2>

     <h3>Detail</h3>
     <p class="resto__address">${resto.address}</p>
     <p class="resto__city">${resto.city}</p>
     <p class="resto__desc">${resto.description}</p>
     <h4>Food Menu: </h4>
     <p class="resto__menus_foods">${resto.menus.foods.map(
    (food) => food.name,
  )}</p>
  <h4>Drink Menu: </h4>
     <p class="resto__menus_drinks">${resto.menus.drinks.map(
    (drink) => drink.name,
  )}</p>

</div>
</div>
`;

const restoItem = (restos) => `
     <div class="resto-item">
          <div class="resto-item__header">
               <img class="resto-item__header__poster" alt="${restos.name}" 
               src="${CONFIG.BASE_IMAGE_URL + restos.pictureId}">
               <div class="resto-item__header__rating">
                    <p>&#9733;<span class="resto-item__header__rating__score">${
  restos.rating
}</span></p>
               </div>
          </div>
          <div class="resto-item__content">
               <h3><a href="${`/#/detail/${restos.id}`}">${restos.name}</a></h3>
          </div>
     </div>
`;

const likeButtonTemplate = () => `
<button aria-label="like this movie" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const likedButtonTemplate = () => `
<button aria-label="unlike this movie" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  restoItem, restoDetail, likeButtonTemplate, likedButtonTemplate,
};
