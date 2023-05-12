class commentPost extends HTMLElement {
	connectedCallback() {
		this.date = this.getAttribute('date') || null;
		this.comment = this.getAttribute('comment') || null;
		this.nameU = this.getAttribute('nameU') || null;

		this.innerHTML = `
        <div class="container reviewer">
            <div class="top-view-contain">
            <h3>${this.nameU}</h3>
            <p>${this.date}</p>
            </div>
            <p class="comment">"${this.comment}"</p>
            </div>
        `;
	}
}

customElements.define('comment-post', commentPost);
