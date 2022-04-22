import CONFIG from '../../globals/config';

const restoDetail = (resto) => `
<div class="detail">
  <div class="detail-poster">
    <img class="resto-poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
  </div>
  <div class="resto-info">
    <h2 class="resto-name">Nama Restoran: ${resto.name}</h2>
      <p class="resto-address">Alamat: ${resto.address}</p>
      <p class="resto-city">Kota: ${resto.city}</p>
      <p class="resto-desc">Deskripsi: ${resto.description}</p>
      <h4 class="resto-header-foods">Food Menu: </h4>
      <p class="resto-menus-foods">${resto.menus.foods.map(
    (food) => food.name,
  )}</p>
    <h4 class="resto-header-drinks">Drink Menu: </h4>
      <p class="resto-menus-drinks">${resto.menus.drinks.map(
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
          <div class="resto-item-header">
               <img class="resto-item-header-poster" alt="${restos.name}" 
               src="${CONFIG.BASE_IMAGE_URL + restos.pictureId}">
               <div class="resto-item-header-rating">
                    <p>&#9733;<span class="resto-item-header-rating-score">${
  restos.rating
}</span></p>
               </div>
          </div>
          <div class="resto-item-content">
               <h3 class="header-name"><a href="${`/#/detail/${restos.id}`}">${restos.name}</a></h3>
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
