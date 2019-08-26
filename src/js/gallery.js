
export function createMasonry() {
    const gallery = document.getElementById('gallery-container');
    
    const masonry = Array.from(gallery.children).reduce((acc, curr, i) => {
        acc.totalHeight += curr.offsetHeight;
        acc.totalCells += i;
        return acc;
    }, { totalHeight: 0, totalCells: 0 });

    if (window.innerWidth >= 768) {
        gallery.setAttribute('style', `height: ${Math.floor(masonry.totalHeight / 2 + masonry.totalHeight / (masonry.totalCells + 1))}px`);
    } else if (window.innerWidth < 768) {
        gallery.style.height = 'auto';
    }
}