class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><a href="visi-misi.html">Visi Misi</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="struktur-organisasi.html">Struktur Organisasi</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="produk-pemasaran.html">Produk Pemasaran</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="csr.html">CSR</a></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2022. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-twitter fs-3"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('custom-footer', Footer);