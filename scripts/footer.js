document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML = `
            <div class="logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                <img src="images/logo.webp" loading="lazy" alt="logo" width="70" height="60">
                <div class="name">
                    <h2>Credemo</h2>
                </div>
            </div>
            <div class="social">
                <a href="https://youtube.com/">Youtube<img src="images/social/youtube.webp" alt="Youtube Logo" loading="lazy"> </a>
                <a href="https://www.instagram.com/p/DC7lk4NvNmN/">Instagram<img src="images/social/instagram.webp" alt="Youtube Logo" loading="lazy"> </a>
                <a href="https://x.com/">X<img src="images/social/x.webp" alt="Youtube Logo" loading="lazy"> </a>
                <a href="https://facebook.com/CredemoConsultoriaPsicologica?locale=es_La">Facebook<img src="images/social/facebook.webp" alt="Youtube Logo" loading="lazy"> </a>
            </div>
        `;
    }
});