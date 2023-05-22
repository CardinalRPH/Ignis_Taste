import UrlParser from '../../routes/url-parser';
import { get_detail_data, post_review } from '../../data/restaurantData';
import Like_Button from '../../utils/Init_like_dislike_btn';
import { GET_LG_IMG } from '../../globals/config';

const Detail = {
	async render() {
		return `
        <div class="container-fluid">
        <div class="jumbotron mini-35" id="jumbotron">
        <div class="jumbotron-body mini-35">
        </div>
    </div>
    <div class="warpper-out" id="post-contain">
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
	  <div class="pagnationC my-5" id="pagination">
	  <button id="prevBtn" disabled>&lt;</button>
        <button id="nextBtn">&gt;</button> 
	  </div>
	  <div class="postReview my-5">
	  <form id="post-form">
	  <h2>Post Review</h2>
	  <input type="text" id="ReviewName" placeholder="Your Name" required>
	  <textarea id="myReview" placeholder="Your Review" required></textarea>
	  <preloader-load id="loading-load"></preloader-load>
	  <small id="error-detail">Failed to Post Review or You are Offline</small>
	  <button type="submit" id="submitBtn">POST</button>
	  </form>
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
		const skipLink = document.querySelector('.skip-link');
		const mainContent = document.querySelector('#post-contain');
		skipLink.addEventListener('click', (event) => {
			event.preventDefault();
			mainContent.scrollIntoView({ behavior: 'smooth' });
			skipLink.blur();
		});

		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const Ndate = new Date().toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

		const getDetailData = () => {
			get_detail_data(url.id).then((data) => {
				if (data.restaurant != null) {
					dataBuilder(data);
				}
			}).catch((error) => {
				console.log(error);
			});
		};

		const dataBuilder = async (data) => {
			document.getElementById('jumbotron').style.backgroundImage = `url('${GET_LG_IMG(data.restaurant.pictureId)}')`;
			document.getElementById('resName').innerHTML = data.restaurant.name;
			document.getElementById('desc-ov').innerHTML = data.restaurant.description;

			let categories = '';
			data.restaurant.categories.forEach((category, i) => {
				if (i != data.restaurant.categories.length - 1) {
					categories += `${category.name} | `;
				} else {
					categories += category.name;
				}
			});
			document.getElementById('category-ov').innerHTML = categories;
			document.getElementById('resLocation').innerHTML = `${data.restaurant.address}, ${data.restaurant.city}`;

			data.restaurant.menus.drinks.forEach((drink) => {
				document.getElementById('left-menu').innerHTML += `<li>${drink.name}</li>`;
			});

			data.restaurant.menus.foods.forEach((food) => {
				document.getElementById('right-menu').innerHTML += `<li>${food.name}</li>`;
			});

			document.getElementById('rtValue').innerHTML = data.restaurant.rating;
			ratingstar(data.restaurant.rating);

			data.restaurant.customerReviews.forEach((review) => {
				const commentPost = `<comment-post date="${review.date}" comment="${review.review}" nameU="${review.name}"></comment-post>`;
				document.getElementById('resReviews').innerHTML += commentPost;
			});
			forLike(data);
			paging();

			document.getElementById('post-form').addEventListener('submit', () => {
				document.getElementById('loading-load').style.display = 'block';
				document.getElementById('submitBtn').disabled = true;
				postReview(object_builder(url.id, document.getElementById('ReviewName').value, document.getElementById('myReview').value));
			});
		};

		const forLike = (data) => {
			Like_Button.init({
				LContainer: document.getElementById('favoriteId'),
				data: {
					id: data.restaurant.id,
					name: data.restaurant.name,
					desc: data.restaurant.description,
					picId: data.restaurant.pictureId,
					city: data.restaurant.city,
					rating: data.restaurant.rating,
				},
			});
		};

		const paging = () => {
			const wrap = document.getElementById('resReviews');
			const items = wrap.getElementsByTagName('comment-post');

			const pageCount = Math.ceil(items.length / 7);
			let currentPage = 1;

			const showPage = (page) => {
				if (page < 1 || page > pageCount) {
					return;
				}
				currentPage = page;
				for (let i = 0; i < items.length; i++) {
					if (i >= (currentPage - 1) * 7 && i < currentPage * 7) {
						items[i].style.display = 'block';
					} else {
						items[i].style.display = 'none';
					}
				}
				updatePagination();
			};

			const updatePagination = () => {
				const pagination = document.getElementById('pagination');
				pagination.innerHTML = '';

				const prevButton = document.createElement('button');
				prevButton.innerText = '<';
				prevButton.disabled = currentPage === 1;
				prevButton.addEventListener('click', () => {
					showPage(currentPage - 1);
				});
				pagination.appendChild(prevButton);

				const nextButton = document.createElement('button');
				nextButton.innerText = '>';
				nextButton.addEventListener('click', () => {
					const cc = currentPage + 1;
					showPage(cc);
				});
				pagination.appendChild(nextButton);
				nextButton.disabled = currentPage === pageCount;
			};
			showPage(currentPage);
		};

		const ratingstar = (value) => {
			const roundedNumber = Math.round(value);
			let elements = '';

			if (roundedNumber <= 5) {
				for (let i = 0; i < 5; i++) {
					for (let j = i; j < roundedNumber; j++) {
						elements += '<span class="fa-solid fa-star started"></span>';
						i++;
					}
					if (i != 5) { // eslint-disable-line no-unused-vars
					}
					elements += '<span class="fa-solid fa-star"></span>';
				}
			}
			document.getElementById('rtStar').innerHTML = elements;
		};

		const object_builder = (id, name, review) => ({ id, name, review });

		const postReview = (obj) => {
			post_review(obj).then(() => {
				document.getElementById('loading-load').style.display = 'none';
				document.getElementById('submitBtn').disabled = false;
				document.getElementById('error-detail').style.display = 'none';
				document.getElementById('resReviews').innerHTML += `<comment-post date="${Ndate}" comment="${obj.review}" nameU="${obj.name}"></comment-post>`;
				resetfield();
			}).catch((error) => {
				document.getElementById('loading-load').style.display = 'none';
				document.getElementById('submitBtn').disabled = false;
				document.getElementById('error-detail').style.display = 'block';
				console.log(error);
			});
		};

		const resetfield = () => {
			document.getElementById('ReviewName').value = '';
			document.getElementById('myReview').value = '';
		};

		getDetailData();
	},
};

export default Detail;
