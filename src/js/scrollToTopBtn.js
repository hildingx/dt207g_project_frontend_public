//Hämta knappen
const scrollToTopButton = document.getElementById("scrollToTopButton");

//Visa eller dölj knappen beroende på scroll-position
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

//När användaren klickar på knappen, scrolla till toppen av dokumentet
scrollToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};