let root = document.documentElement;
const images = [
    'url(./img/img-1.jpg)',
    'url(./img/img-2.jpg)',
    'url(./img/img-3.jpg)',
    'url(./img/img-4.jpg)',
    'url(./img/img-5.jpg)',
    'url(./img/img-6.jpg)'
]
if (window.performance) {
    console.info("window.performance works fine on this browser");
}
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    const bg = images[Math.floor(Math.random() * images.length)];
    root.style.setProperty('--backgroundImage', bg);
    console.log('clicked');
}  