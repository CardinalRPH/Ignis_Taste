import Database from '../../data/restaurantDB';

const Favorite = {
	async render() {
		return `
    <div class="container my-5 mt-8e text-center pb-3" id="post-contain">
        <h1 class="post-title">Favorite</h1>
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

		Database.getAllRestaurant().then((data) => {
			favBuilder(data);
		}).catch((error) => console.log(error));

		const favBuilder = (data) => {
			if (data.length <= 0) {
				document.querySelector('#grid-container-1').innerHTML = 'No Restaurant Favorited';
			} else {
				document.querySelector('#grid-container-1').innerHTML = '';
				data.forEach((item) => {
					const cardPost = `<card-post
											src="${item.picId}"
											alt="${item.name}"
											food="${item.name}"
											rating="${item.rating}"
											city="${item.city}"
											desc="${item.desc}"
											resId="${item.id}" id="favContent"></card-post>`;
					document.querySelector('#grid-container-1').innerHTML += cardPost;
				});
			}
		};
	},
};

export default Favorite;
