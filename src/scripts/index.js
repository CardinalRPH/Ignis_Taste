import 'regenerator-runtime';
import '../styles/main.css';

import './main';
import './views/templates/card-post';
import './views/templates/rating-score';
import './views/templates/comment-post';
import './views/templates/preloader-load';
import './data/restaurantData';
import App from './views/app';

import '../public/images/logo1.png';
import '../public/icons/favicon.png';
import '../public/images/hero-image_2.jpg';
import '../public/images/hero-image_2-small.jpg';
import '../public/images/hero-image_2-large.jpg';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
