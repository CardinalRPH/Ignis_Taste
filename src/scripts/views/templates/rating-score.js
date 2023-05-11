class RatingScore extends HTMLElement {
	connectedCallback() {
		this.value = this.getAttribute('value') || null;
		let roundedNumber = Math.round(this.value);
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
		this.innerHTML = elements;
	}
}

customElements.define('rating-score', RatingScore);