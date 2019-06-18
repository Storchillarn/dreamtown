import './img/soundcloud-icon.png';
import './img/spotify-icon.png';
import './img/background.jpg';
import './img/white-menu-icon.png';
import './main.sass';

window.onload = () => {

    let scrolling = false;
    let swoop = false;
    
    const nav = document.querySelector('NAV');
    const mainHeading = document.querySelector('h1[class="header_heading"]');
    const menuLinks = document.querySelectorAll('a[class="main-nav__link"]');
    
    window.addEventListener('scroll', () => scrolling = true);
    menuLinks.forEach(link => link.addEventListener('click', handleMenuClick));
    
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

    function handleMenuClick() {
        event.preventDefault();
        const regex = /#.*/g;
        let link = event.target.href;
        let location = link.match(regex)[0].replace('#', '');
        let elem = document.getElementById(location);
        elem.scrollIntoView({behavior: 'smooth'});
    }

    // function windowResizeHandler() {
    //     if (event.)
    //     nav.classList
    // }
}
