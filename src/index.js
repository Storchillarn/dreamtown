import './img/background.jpg';
import './main.sass';

window.onload = () => {
    const background = document.querySelector('HEADER');
    window.onscroll = () => {
        if (window.scrollY > 0) {
            background.classList.add('--fade-in');
        }
    }
}