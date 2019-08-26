export default function loadIframes() {
    const iframeSrc = 'https://open.spotify.com/embed/album/2zsWAvWqBPARwk3nfldfvX';
    document.querySelector('iframe[id="small"]').setAttribute('src', iframeSrc);
    document.querySelector('iframe[id="large"]').setAttribute('src', iframeSrc);
}