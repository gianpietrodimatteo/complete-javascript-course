'use strict';

///////////////////////////////////////
// Modal window
//lets have all selections up top

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we have a bunch of sutff and blablabla <button class="btn btn--close-cookie"> got it!</button>';

const header = document.querySelector('.header');
// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

logo.getAttribute('src');

const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// console.log(logo.dataset.versionNumber);

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // could be pageXOffset or pageYOffset, but they're deprecated
  // console.log('Current scroll (x/y)', window.scrollX, window.scrollY);
  // console.log(
  //   'h/w viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

  section1.scrollIntoView({ behavior: 'smooth' });
});

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
//   h1.removeEventListener('mouseenter', alertH1);
// }

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function(e) { do something}  oldschool way, using the onevent thing; addeventlistener allows to use multiple events,
// also now we can remove eventlistener (but we need named functions)

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// click event is not generated at the target element, but at the root of the document and then goes down to the target element

//capturing phase, target phase and bubbling phase, we may end up cacthing twice or more times
// target phase and bubbling phase

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('LINK', e.target, e.currentTarget); // where the event happened, where the click happened, not where the event handler is attached
//   // currentTarget is the this keyword
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget === this);

//   // guess you can stop propagation as well...
//   e.stopPropagation();
// });

// // these shoot as well because of bubbling
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     console.log('NAV', e.target, e.currentTarget);
//     this.style.backgroundColor = randomColor();
//   },
//   true
// );

// addEventListner listens at the bubbling phase (when it comes back) capturing and bubbling are past things

//event delegation!

// // don't do this for too many items you know
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // get used to using preventDefault!
//     // window.scrollTo(e.target.href);
//     const id = this.getAttribute('href'); // we need this to actually get the href, this is the element
//     console.log({ id });
//     console.log(this.href);
//     console.log(e.target.href); // same as this.href, the whole absolute url
//     console.log(e.href); // undefined you know
//     // console.log(e.getAttribute('href')); // error!
//     // the href is already the id!
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// the html has anchors that automatically move and stuff

// event delegation: because events buble up we can put just one event in the parent container

// 1. Add event listner on top and then determine where it happened within the event listener

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  // Matching strategy
  if (e.target.classList.contains('.nav__link')) {
    // console.log('LINK');
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// const h1 = document.querySelector('h1');

// // going downwards

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'orangered'; // not firstChild,
// h1.lastElementChild.style.color = 'blue'; // not firstChild,

// // Going upwards:
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // closest paret element that has this class
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // sideways: siblings:
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// // nodes
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el) {
//   if (el !== h1) el.style.transform = 'sale(0.5)';
// });

// we're most of the time using the html elements, not the nodes
// nodes vs html collection

/*
Node is the generic term for any object in the DOM tree, while Element is a specific type of node that represents HTML tags.
*/

// tabs.forEach( t => t.addEventListener('click', () => {
//   console.log('TAB');
// }));

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active content area
  // only the part after the data; dataset
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// by hand making everything
// nav.addEventListener('mouseover', e => {
//   // console.log(e.target);
//   if(e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener('mouseout', e => {
//   if(e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });
// refactor:

const handleHover = function (e) {
  // console.log(this);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// binding method, using bind in event handler

// passing ' argument ' into handler function; any handler function can only have 1 real argument
// kinda weird not gonna lie, also the event is passing " invisibly"
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// pay attention it changes with the viewport
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

// Sticky navigation
// also like checking out event
// like horrible using the scroll event
// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Intersection of server API

// the docs for this are not very clear
// we only get this event within the threshold, that's why it's so much better than scroll

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// // start, percentage of the threshold, percentage of the threshold, end

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2], // moving into the view and out of the view
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);

// const header = document.querySelector('.header');

// we can use the threshold and the position to turn it on
// then we can use the isIntersecting property to adapt the behaviour later on

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '-90px', // height of the navigation
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//revealing elements as you scroll

// Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  // console.log(entries);
  // const [entry] = entries;
  // make sure we remove the hidden first for all, and then
  entries.forEach(entry => {
    // console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, // to set to viewport
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images; really impacts performance; have the small images and the big images separated
// notice using the data-src, using the data-* pattern
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry, entries);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  // javascript will find it and emit the load event

  // if we just put it here we're going to see the reduced one without the blur
  // entry.target.classList.remove('lazy-img');

  // we want to remove the blur once the image actually loads
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {});

imgTargets.forEach(img => imgObserver.observe(img));

// Sliders

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  createDots();

  const activateDot = function (slide) {
    // remove active from everywhere
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    // apply active to the current slide
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.2) translateX(-100%)';
  // slider.style.overflow = 'visible';

  // slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide) return;
    curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) return;
    curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const initSlider = function () {
    goToSlide(0);
    activateDot(0);
  };

  initSlider();

  btnRight.addEventListener('click', nextSlide);

  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    // if (e.key === 'ArrowRight') nextSlide();

    // this works  see short circuiting
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider();

// we could wait for this event to wait for everything to load before running the script
// but in our case the script is at the end of the HTML so no need to do this
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// this load when you close the browser; don't abuse this!
// only time to prompt if you really want to leave the page is if there is unsaved work!
// window.addEventListener('beforeunload', function(e) {
//   // chrome don't need this, other browsers may need this
//   e.preventDefault();
//   console.log(e);
//   // deprecated, used to work, not anymore
//   e.returnvalue = 'message';
// });
