import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { dataRestorant } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="main">
        <h2 class="content__heading">Your Liked</h2>
        <div id="roam" class="posts">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('.posts');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += dataRestorant(restaurant);
    });
  },
};

export default Like;
