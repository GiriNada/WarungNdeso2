const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
hamburger.onclick = () => { navMenu.classList.toggle('active'); hamburger.classList.toggle('active'); }
document.querySelectorAll('.nav-menu a').forEach(a => a.onclick = () => { navMenu.classList.remove('active'); hamburger.classList.remove('active'); });
// const obs = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('show')), { threshold: .2 });
// document.querySelectorAll('section,.card,.gallery-item').forEach(el => obs.observe(el));
const obs = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px"
    }
);

document
    .querySelectorAll('section, .card, .gallery-item, .reveal')
    .forEach(el => obs.observe(el));


const hero = document.querySelector('.hero');
const images = [
    'assets/galeri/G-5.jpg',
    'assets/galeri/G-2.jpg',
    'assets/galeri/G-3.jpg',
];
let index = 0;
setInterval(() => { index = (index + 1) % images.length; hero.style.backgroundImage = `url('${images[index]}')`; }, 5000);
const waButton = document.querySelector('.wa');
window.addEventListener('scroll', () => { const berandaHeight = document.getElementById('beranda').offsetHeight; if (window.scrollY > berandaHeight) { waButton.classList.add('show'); } else { waButton.classList.remove('show'); } });
const infoCards = document.querySelectorAll('.info-card');
const observerInfo = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('show'); } }) }, { threshold: 0.2 });
infoCards.forEach(card => observerInfo.observe(card));
// Testimonial Carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;
const nextBtn = document.getElementById('nextTesti');
const prevBtn = document.getElementById('prevTesti');
function updateCarousel() { track.style.transform = `translateX(-${currentIndex * 100}%)`; }
nextBtn.onclick = () => { currentIndex = (currentIndex + 1) % slides.length; updateCarousel(); };
prevBtn.onclick = () => { currentIndex = (currentIndex - 1 + slides.length) % slides.length; updateCarousel(); };
setInterval(() => { currentIndex = (currentIndex + 1) % slides.length; updateCarousel(); }, 5000);

window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach(s => s.classList.add('show'));
});

window.addEventListener('load', () => {
    document.querySelectorAll('.info-map').forEach(map => {
        map.classList.add('show');
    });
});

