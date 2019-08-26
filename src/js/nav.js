export function navFunctions() {
    const menuLinks = document.querySelectorAll('a[class="main-nav__link"]');
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('NAV');

    if (window.innerWidth <= 768) {
        nav.classList.add('main-nav-small');
    }

    hamburger.addEventListener('change', menuChangeHandler);

    function menuChangeHandler() {
        if (hamburger.checked) expandMenu();
        if (!hamburger.checked) collapseMenu();
    }

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

    function handleMenuClick() {
        event.preventDefault();
        const regex = /#.*/g;
        let link = event.target.href;
        let location = link.match(regex)[0].replace('#', '');
        let elem = document.getElementById(location);
        elem.scrollIntoView({ behavior: 'smooth' });
    }
}

export function windowResizeHandler() {
    if (window.innerWidth < 768) {
        nav.classList.add('main-nav-small');
    } else {
        nav.classList.remove('main-nav-small');
    }
}

let swoop = false;

export function navScrollHandler() {
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