import './img/background.jpg';
import './main.sass';

window.onload = () => {

    let scrolling = false;

    const nav = document.querySelector('NAV');

    window.addEventListener('scroll', () => scrolling = true);

    setInterval(() => {
        if (scrolling) {
            scrolling = !scrolling;
            scrollHandler(nav);
        }
    }, 250);

    function scrollHandler(elem) {
        if (window.scrollY >= 100) {
            elem.classList.add('main-nav-scroll');
        }
        else if (window.scrollY < 100) {
            elem.classList.remove('main-nav-scroll');
        }
    }
}
