import CONFIG from '../../globals/config';

const restoDetail = (resto) => `
<div class="detail">
  <div class="detail__poster">
    <img class="resto__poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
  </div>
  <div class="resto__info">
    <h2 class="resto__name">Nama Restoran: ${resto.name}</h2>
      <p class="resto__address">Alamat: ${resto.address}</p>
      <p class="resto__city">Kota: ${resto.city}</p>
      <p class="resto__desc">Deskripsi: ${resto.description}</p>
      <h4 class="resto__header_foods">Food Menu: </h4>
      <p class="resto__menus_foods">${resto.menus.foods.map(
    (food) => food.name,
  )}</p>
    <h4 class="resto__header_drinks">Drink Menu: </h4>
      <p class="resto__menus_drinks">${resto.menus.drinks.map(
    (drink) => drink.name,
  )}</p>
  </div>
  <h3 class="header-reviews">Review Section</h3>
  <div class="resto-reviews">
        ${resto.customerReviews.map((review) => `
          <div class="grid-review">
            <div class="review-review">
              <p tabindex="0" class="review-name">${review.name}</p>
              <p tabindex="0" class="review-date">${review.date}</p>
              <p tabindex="0" class="review-review">${review.review}</p>
            </div>
          </div>
        `).join('')}
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
