import UrlParser from '../../routes/url-parser';
import { get_detail_data } from '../../data/restaurantData';
import Database from '../../data/restaurantDB';

const Detail = {
	async render() {
		return `
        <div class="container-fluid">
        <div class="jumbotron mini-35" id="jumbotron">
        <div class="jumbotron-body mini-35">
        </div>
    </div>
    <div class="warpper-out">
    <div class="warpper">
  <input class="radio" id="one" name="group" type="radio" checked>
  <input class="radio" id="two" name="group" type="radio">
  <input class="radio" id="three" name="group" type="radio">

  <div class="tabs">
    <label class="tab" id="one-tab" for="one">Overview</label>
    <label class="tab" id="two-tab" for="two">Menu</label>
    <label class="tab" id="three-tab" for="three">Reviews</label>
  </div>

  <div class="panels">
    <div class="panel" id="one-panel">
      <div class="resName">
        <h1 id="resName">Restaurant Name</h1>
      </div>
      <div class="resOverview">
        <div class="top-ov">
            <i class="fa-solid fa-utensils"></i>
            <h3 id="category-ov">Uhuuu</h3>
        </div>
        <p id="desc-ov">
            lorem londo mondo
        </p>
      </div>
      <div class="resLocation">
      <h2>Location</h2>
      <p id="resLocation">blaa</p>
      </div>

    </div>
    <div class="panel" id="two-panel">
    <div class="left-menu">
    <h2>Drinks</h2>
    <ul id="left-menu">
    </ul>
    </div>
    <div class="right-menu">
    <h2>Foods</h2>
    <ul id="right-menu">
  </ul>
    </div>
    </div>
    <div class="panel" id="three-panel">
      <div class="resRat">
      <h2>Rating :</h2>
      <h3 id="rtValue"></h3>
      <rating-star id="rtStar"></rating-star>
      </div>
      <div class="resReviews" id="resReviews">
        
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
    <div class="favorite" id="favoriteId" title="Add to Favorite">
    </div>
        `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();

		const getDetailData = () => {
			get_detail_data(url.id).then((data) => {
				if (data.restaurant != null) {
					dataBuilder(data);
				} else {
					// is_null();
				}
			}).catch((error) => {
				console.log(error);
				// let cuserror = new ErrorHandler("Api can't Load Character Query");
				// throw cuserror;
			});
		};

		const dataBuilder = async (data) => {
			document.getElementById('jumbotron').style.backgroundImage = `url('https://restaurant-api.dicoding.dev/images/large/${data.restaurant.pictureId}')`;
			document.getElementById('resName').innerHTML = data.restaurant.name;
			document.getElementById('desc-ov').innerHTML = data.restaurant.description;
      
      

			let categories = '';
			for (let i in data.restaurant.categories) {
				if (i != data.restaurant.categories.length - 1) {
					categories += `${data.restaurant.categories[i].name} | `;
				} else {
					categories += data.restaurant.categories[i].name;
				}
			}
			document.getElementById('category-ov').innerHTML = categories;
			document.getElementById('resLocation').innerHTML = `${data.restaurant.address}, ${data.restaurant.city}`;

			for (let i in data.restaurant.menus.drinks) {
				document.getElementById('left-menu').innerHTML += `<li>${data.restaurant.menus.drinks[i].name}</li>`;
			}
			for (let i in data.restaurant.menus.foods) {
				document.getElementById('right-menu').innerHTML += `<li>${data.restaurant.menus.foods[i].name}</li>`;
			}

			document.getElementById('rtValue').innerHTML = data.restaurant.rating;
			ratingstar(data.restaurant.rating);
      
			for (let i in data.restaurant.customerReviews) {
				document.getElementById('resReviews').innerHTML += `<comment-post date="${data.restaurant.customerReviews[i].date}" comment="${data.restaurant.customerReviews[i].review}" nameU="${data.restaurant.customerReviews[i].name}"></comment-post>`;
			}

			let isFav = await Database.getRestaurant(data.restaurant.id);
      
			if (isFav) {
				document.getElementById('favoriteId').innerHTML = '<i class="fa-solid fa-heart"></i>';
				document.getElementById('favoriteId').title = 'Remove from favorite';
			} else {
				document.getElementById('favoriteId').innerHTML = '<i class="fa-regular fa-heart"></i>';
				document.getElementById('favoriteId').title = 'Add to Favorite';
			}
      
			document.getElementById('favoriteId').addEventListener('click', () => {
				dbSystem(data);
			});
		};

		const ratingstar = (value) => {
			let roundedNumber = Math.round(value);
			let elements = '';

			if (roundedNumber <= 5) {
				for (let i = 0; i < 5; i++) {
					for (let j = i; j < roundedNumber; j++) {
						elements += '<span class="fa-solid fa-star started"></span>';
						i++;
					}
					if (i != 5) {
						elements += '<span class="fa-solid fa-star"></span>';
					}
				}
			}
			document.getElementById('rtStar').innerHTML = elements;
		};

		const dbSystem = async (data) => {
			let dataFromdb = await Database.getRestaurant(data.restaurant.id);
      
			if (dataFromdb) {
				document.getElementById('favoriteId').innerHTML = '<i class="fa-regular fa-heart"></i>';
				document.getElementById('favoriteId').title = 'Add to Favorite';
				Database.deleteRestaurant(data.restaurant.id);
			} else {
				let Restaurantdata = {
					id: data.restaurant.id,
					name: data.restaurant.name,
					desc: data.restaurant.description,
					picId: data.restaurant.pictureId,
					city: data.restaurant.city,
					rating: data.restaurant.rating
				};
				Database.addRestaurant(Restaurantdata);
				document.getElementById('favoriteId').innerHTML = '<i class="fa-solid fa-heart"></i>';
				document.getElementById('favoriteId').title = 'Remove from favorite';
			}
		};


		getDetailData();

	}
};

export default Detail;