class CardPost extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute('src') || null;
        this.alt = this.getAttribute('alt') || null;
        this.food = this.getAttribute('food') || null;
        this.ratting = this.getAttribute('ratting') || null;
        this.city = this.getAttribute('city') || null;
        this.desc = this.getAttribute('desc') || null;


        this.innerHTML = `
        <div class="card">
                    <div class="card-img">
                        <small>City : ${this.city}</small>
                        <img src="${this.src}"
                            alt="${this.alt}">
                    </div>
                    <div class="card-body">
                        <h3>Ratting : ${this.ratting}</h3>
                        <a href="#">
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