import './img/soundcloud-icon.png';
import './img/spotify-icon.png';
import './img/background.jpg';
import './main.sass';

window.onload = () => {

    let scrolling = false;
    let swoop = false;

    const nav = document.querySelector('NAV');
    const mainHeading = document.querySelector('h1[class="header_heading"]');
    
    window.addEventListener('scroll', () => scrolling = true);
    
    setInterval(() => {
        if (scrolling) {
            scrolling = !scrolling;
            navScrollHandler(nav);
            headingScrollHandler(mainHeading);
        }
    }, 100);
    

    function navScrollHandler(elem) {
        if (window.scrollY >= 100) {
            elem.classList.add('main-nav-scroll');
            elem.classList.remove('--swoop');
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
    
    function headingScrollHandler(elem) {
        if (window.scrollY > 5) {
            let blur = (window.scrollY / 10);
            let blurFilter = `blur(${blur}px)`;
            elem.style.filter = blurFilter;
        }
        else if (window.scrollY <= 5) {
            blur = 0;
            let blurFilter = `blur(${blur}px)`;
            elem.style.filter = blurFilter;
        }
    }
}
