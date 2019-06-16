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

    let swoop = false;
    
    function scrollHandler(elem) {
        if (window.scrollY >= 100) {
            elem.classList.add('main-nav-scroll');
            swoop = true;
        }
        else if (window.scrollY < 100) {
            elem.classList.remove('main-nav-scroll');
            if (swoop) {
                elem.classList.add('--swoop');
                swoop = false;
            }
        }
    }
}
