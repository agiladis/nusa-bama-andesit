class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light bg-light static-top">
            <a class="navbar-brand" href="/">
                <img src="../assets/img/logo.png" width="150" height="" alt="">
            </a>
        </nav>
        `
    }
}

customElements.define('nav-bar', NavBar);