import 'regenerator-runtime';
import '../styles/main.css';

import './main.js';
import './views/templates/card-post.js';
import './views/templates/rating-score.js';
import './views/templates/comment-post.js';
import './data/restaurantData.js';
import App from './views/app.js';

import '../public/images/logo1.png';
import '../public/icons/favicon.png';
import '../public/images/hero-image_2.jpg';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


import swRegister from './utils/sw-register';



const app = new App({
	content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});