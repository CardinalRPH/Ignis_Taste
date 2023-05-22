import { GET_MD_IMG } from '../../globals/config';

class CardPost extends HTMLElement {
	connectedCallback() {
		this.src = this.getAttribute('src') || null;
		this.alt = this.getAttribute('alt') || null;
		this.food = this.getAttribute('food') || null;
		this.rating = this.getAttribute('rating') || null;
		this.city = this.getAttribute('city') || null;
		this.desc = this.getAttribute('desc') || null;
		this.resId = this.getAttribute('resId') || null;

		this.innerHTML = `
        <div class="card">
                    <div class="card-img">
                        <small>City : ${this.city}</small>
                        <img class="lazyload" data-src="${GET_MD_IMG(this.src)}"
                            alt="${this.alt}">
                    </div>
                    <div class="card-body">
                        <div class="the-rtg">
                        <h3>${this.rating}</h3>
                            <rating-score value=${this.rating}></rating-score>
                        </div>
                        <a href="/#/detail/${this.resId}">
                            <h2>${this.food}</h2>
                        </a>
                        <div class="card-text">
                            <p>${this.desc}</p>
                        </div>
                    </div>
                </div>
        `;
	}
}

customElements.define('card-post', CardPost);
