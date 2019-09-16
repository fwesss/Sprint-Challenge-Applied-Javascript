/* If You've gotten this far, you're on your own! Although we will give you some hints:
 1. You will need to write a function that creates the carousel component, you will find the HTML
 below.
 2. You will need to grab a reference to all of the images
 3. Create a current index
 4. Those buttons are gonna need some click handlers.
 5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up
 to you!
 6. Have fun!
 */

/* HTML:
 <div class="carousel">
 <div class="left-button"> < </div>
 <img src="./assets/carousel/mountains.jpeg" />
 <img src="./assets/carousel/computer.jpeg" />
 <img src="./assets/carousel/trees.jpeg" />
 <img src="./assets/carousel/turntable.jpeg" />
 <div class="right-button"> > </div>
 </div>
 */

(() => {
  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  const leftButton = document.createElement('div');
  leftButton.className = 'left-button';
  leftButton.textContent = '<';
  carousel.appendChild(leftButton);

  const rightButton = document.createElement('div');
  rightButton.className = 'right-button';
  rightButton.textContent = '>';
  carousel.appendChild(rightButton);

  const imageSources = [
    './assets/carousel/computer.jpeg',
    './assets/carousel/mountains.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg',
  ];

  const carouselImages = [];
  let i = 0;
  imageSources.forEach((imageSrc) => {
    const carouselImage = document.createElement('img');
    carouselImage.src = imageSrc;
    carouselImage.index = i;
    i += 1;
    carousel.appendChild(carouselImage);
    carouselImages.push(carouselImage);
  });

  let activeImage = 0;
  carouselImages[activeImage].className = 'active';

  leftButton.addEventListener('click', () => {
    carouselImages[activeImage].classList.remove('active');
    if (activeImage - 1 < 0) {
      activeImage = carouselImages.length - 1;
    } else {
      activeImage -= 1;
    }
    carouselImages[activeImage].classList.add('active');
  });

  rightButton.addEventListener('click', () => {
    carouselImages[activeImage].classList.remove('active');
    if (activeImage + 1 > carouselImages.length - 1) {
      activeImage = 0;
    } else {
      activeImage += 1;
    }
    carouselImages[activeImage].classList.add('active');
  });

  document.querySelector('.carousel-container').appendChild(carousel);
})();
