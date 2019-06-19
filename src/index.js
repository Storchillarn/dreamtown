import './img/soundcloud-icon.png';
import './img/spotify-icon.png';
import './img/background.jpg';
import './img/white-menu-icon.png';
import { debounce, throttle } from 'lodash';
import './main.sass';

window.onload = () => {

    const nav = document.querySelector('NAV');
    const menuLinks = document.querySelectorAll('a[class="main-nav__link"]');
    const mainHeading = document.querySelector('h1[class="header_heading"]');
    let swoop = false;
    
    if (window.innerWidth <= 768) {
        nav.classList.add('main-nav-small--collapsed');
    }
    
    loadIframes();
    
    window.addEventListener('scroll', throttle(navScrollHandler, 250));
    window.addEventListener('scroll', throttle(headingScrollHandler, 100));
    window.addEventListener('resize', debounce(windowResizeHandler, 500));
    menuLinks.forEach(link => link.addEventListener('click', handleMenuClick));
    
    function navScrollHandler() {
        if (window.scrollY >= 100) {
            nav.classList.add('main-nav-scroll');
            nav.classList.remove('--swoop');
            swoop = true;
        }
        else if (window.scrollY < 100) {
            nav.classList.remove('main-nav-scroll');
            if (swoop) {
                nav.classList.add('--swoop');
                swoop = false;
            }
        }
    }
    
    function headingScrollHandler() {
        let blur;
        if (window.scrollY > 10) {
            blur = (window.scrollY / 10);
        } else {
            blur = 0;
        }
        let blurFilter = `blur(${blur}px)`;
        mainHeading.style.filter = blurFilter;
    }

    function handleMenuClick() {
        event.preventDefault();
        const regex = /#.*/g;
        let link = event.target.href;
        let location = link.match(regex)[0].replace('#', '');
        let elem = document.getElementById(location);
        elem.scrollIntoView({behavior: 'smooth'});
    }

    function windowResizeHandler() {
        if (window.innerWidth <= 768) {
            nav.classList.add('main-nav-small--collapsed');
        } else {
            nav.classList.remove('main-nav-small--collapsed');
        }
    }

    function loadIframes() {
        const iframeSrc = 'https://open.spotify.com/embed/album/2zsWAvWqBPARwk3nfldfvX';
        document.querySelector('iframe[id="small"]').setAttribute('src', iframeSrc);
        document.querySelector('iframe[id="large"]').setAttribute('src', iframeSrc);
    }
}
