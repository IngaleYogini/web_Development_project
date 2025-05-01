const images = document.querySelectorAll('.slider-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playButton = document.getElementById('play');

let currentIndex = 0;
let slideshowInterval;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function toggleSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    playButton.textContent = 'Slideshow';
  } else {
    slideshowInterval = setInterval(nextImage, 2000);
    playButton.textContent = 'Pause';
  }
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
playButton.addEventListener('click', toggleSlideshow);