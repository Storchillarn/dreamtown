import 'bootstrap';
import { throttle } from 'lodash';
import './img/soundcloud-icon.png';
import './img/spotify-icon.png';
import './img/background.jpg';
import './img/white-menu-icon.png';
import './img/black-menu-close-icon.png';
import './img/arrow-down.png';
import './main.sass';
import formSubmitHandler from './js/form-submission';
import showSuccessMessage from './js/showSuccessMessage';

window.onloadCallback = function() {
    grecaptcha.render('grecaptcha-container', {
      'sitekey': process.env.GRECAPTCHA_SITEKEY
    });
};
  
window.onload = () => {

    const nav = document.querySelector('NAV');
    const menuLinks = document.querySelectorAll('a[class="main-nav__link"]');
    const mainHeading = document.querySelector('h1[class="header__heading"]');
    const hamburger = document.getElementById('hamburger');
    const showsForm = document.getElementById('shows-form');

    let swoop = false;
    
    if (window.innerWidth <= 768) {
        nav.classList.add('main-nav-small');
    }
    
    loadIframes();

    window.addEventListener('scroll', throttle(navScrollHandler, 250));
    window.addEventListener('scroll', throttle(headingScrollHandler, 100));
    window.addEventListener('resize', throttle(windowResizeHandler, 500));

    showsForm.addEventListener('submit', e => formSubmitHandler(e, showSuccessMessage));

    hamburger.addEventListener('change', () => {
        if (hamburger.checked) expandMenu();
        if (!hamburger.checked) collapseMenu();
    });
    
    function expandMenu() {
        nav.classList.toggle('main-nav');
        let time = -100;
        const menuExpand = setInterval(() => {
            time += 2;
            nav.style.transform = `translateY(${time}%)`;
            if (time >= 0) {
                clearInterval(menuExpand);
            }
        }, 10);
    }

    function collapseMenu() {
        let time = 0;
        const menuCollapse = setInterval(() => {
            time -= 2;
            nav.style.transform = `translateY(${time}%)`;
            if (time <= -100) {
                clearInterval(menuCollapse);
                nav.classList.toggle('main-nav');
            }
        }, 10);
    }

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
        if (window.innerWidth < 768) {
            nav.classList.add('main-nav-small');
        } else {
            nav.classList.remove('main-nav-small');
        }
    }

    function loadIframes() {
        const iframeSrc = 'https://open.spotify.com/embed/album/2zsWAvWqBPARwk3nfldfvX';
        document.querySelector('iframe[id="small"]').setAttribute('src', iframeSrc);
        document.querySelector('iframe[id="large"]').setAttribute('src', iframeSrc);
    }
}
