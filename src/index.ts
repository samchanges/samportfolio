import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Sam';
  greetUser(name);

  /*
  Splide Carousel for work projects
  */

  // We have multiple Splides on one page so we need to first get all the slides
  const slides = document.getElementsByClassName('splide');

  // Mount each slide 1 by 1 using a for loop
  for (let i = 0; i < slides.length; i++) {
    new Splide(slides[i], {
      type: 'loop',
      fixedWidth: '20vw',
      gap: '1.25rem',
      arrows: false,
      autoScroll: {
        speed: 0.1,
      },
    }).mount(window.splide.Extensions);
  }
});
