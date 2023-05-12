class PreloaderLoad extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <div class="preloader-2">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
            <span class="line line-4"></span>
            <span class="line line-5"></span>
            <span class="line line-6"></span>
            <span class="line line-7"></span>
            <span class="line line-8"></span>
            <span class="line line-9"></span>
            <div>Loading</div>
          </div>
        `;
	}
}

customElements.define('preloader-load', PreloaderLoad);