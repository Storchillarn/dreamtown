const headerElement = document.querySelector('header');
const navLinks = document.querySelector('nav').childNodes;

const color = 'linear-gradient(0deg, #020202f7 0%, rgba(0, 0, 0, 0.46) 50%, rgba(40, 0, 0, 0.4) 100%);';

navLinks.forEach(e => {
    e.addEventListener('mouseover', gradientChanger)
})

navLinks.forEach(e => {
    e.addEventListener('mouseout', gradientChanger)
})

function gradientChanger(e) {
    let currentElement = event.target;
    if (currentElement.id === 'music') {
        headerElement.classList.toggle('header-hover-music');
        headerElement.classList.toggle('header-default');
    }
}
