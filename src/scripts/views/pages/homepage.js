import { get_all_data } from '../../data/restaurantData';

const HomePage = {
	async render() {
		return `
        <div class="container-fluid">
        <div class="jumbotron" id="jumbotron">
            <div class="jumbotron-body">
                <div class="inner-bg-body">
                    <h1>Fresh and Delicious</h1>
                    <div class="sub-title-bg">
                        <p>traditional &nbsp;
                        <mark>Nusantara</mark>
                        &nbsp; food to delight whole family</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container my-5 text-center" id="post-contain">
        <h1 class="post-title">Explore Something</h1>
        <div class="grid-container" id="grid-container-1">
        </div>
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

		document.getElementById('jumbotron').style.backgroundImage = 'url(\'../public/images/hero-image_2.jpg\')';
		const getAllData = () => {
			get_all_data().then((data) => {
				if (data.restaurants.length != 0) {
					homeBuilder(data);
				}
			}).catch((error) => {
				console.log(error);
			});
		};

		const homeBuilder = (data) => {
			data.restaurants.forEach((item) => {
				const cardPost = `<card-post
										src="${item.pictureId}"
										alt="${item.name}"
										food="${item.name}"
										rating="${item.rating}"
										city="${item.city}"
										desc="${item.description}"
										resId="${item.id}"></card-post>`;
				document.querySelector('#grid-container-1').innerHTML += cardPost;
			});
		};

		getAllData();
	},
};

export default HomePage;
