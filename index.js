const slides = document.querySelectorAll('.troubles__trouble'),
    prevArrow = document.querySelector('.prev'),
    nextArrow = document.querySelector('.next'),
    dotsWraper = document.querySelector('.dots'),
    dots = document.querySelectorAll('.dot')

let currentSlide = 0,
    lastSlide

prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);
dotsWraper.addEventListener('click', () => {toSlide(event)});

function showSlide() {
    slides[lastSlide].classList.remove('troubles__trouble--active');
    dots[lastSlide].classList.remove('dot-active');
    slides[currentSlide].classList.add('troubles__trouble--active');
    dots[currentSlide].classList.add('dot-active');
}

function nextSlide() {
    lastSlide = currentSlide;
    (currentSlide == slides.length - 1) ? currentSlide = 0 : currentSlide++;
    showSlide();
}

function prevSlide() {
    lastSlide = currentSlide;
    (currentSlide == 0) ? currentSlide = slides.length - 1 : currentSlide--;
    showSlide();
}

function toSlide(event) {
    if (!event.target.dataset.item) return
    lastSlide = currentSlide;
    currentSlide = Number(event.target.dataset.item)
    // console.log(currentSlide)
    showSlide();
}
