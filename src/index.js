"use strict";

// import './main.css';
// import './img/background.jpg';
window.onload = () => {
  const background = document.querySelector('HEADER');

  window.onscroll = () => {
    if (window.scrollY > 0) {
      background.classList.add('--fade-in');
    }
  };
};