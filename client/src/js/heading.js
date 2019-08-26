export default function headingScrollHandler() {
    const mainHeading = document.querySelector('h1[class="header__heading"]');

    let blur;
    if (window.scrollY > 10) {
        blur = (window.scrollY / 10);
    } else {
        blur = 0;
    }
    let blurFilter = `blur(${blur}px)`;
    mainHeading.style.filter = blurFilter;
}