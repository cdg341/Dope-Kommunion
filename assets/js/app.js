// Header animation on page load
const header = document.querySelector('.header');

window.addEventListener('load', () => {
  setTimeout(() => {
    header.classList.add('top-active');
  }, 500);
});

// Header behavior on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('active');
  } else if (window.scrollY === 0) {
    header.classList.remove('active');
  }
});

// Mobile menu toggle functionality
const mobileButton = document.querySelector('.mobile-button');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const bars = document.querySelectorAll('.bar');
const menuLinks = document.querySelectorAll('.menu-item a');

mobileButton.addEventListener('click', () => {
  if (!mobileMenu.classList.contains('active')) {
    mobileMenu.classList.add('active');
    body.classList.add('overlay-active');
    bars.forEach((bar) => {
      bar.classList.remove('back');
      bar.classList.add('change');
    });
  } else {
    mobileMenu.classList.remove('active');
    body.classList.remove('overlay-active');
    bars.forEach((bar) => {
      bar.classList.remove('change');
      bar.classList.add('back');
    });
  }
});

// Close mobile menu on link click
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    body.classList.remove('overlay-active');
    bars.forEach((bar) => {
      bar.classList.remove('change');
      bar.classList.add('back');
    });
  });
});

// Close mobile menu on overlay click
const mobileOverlay = document.querySelector('.mobile-overlay');

mobileOverlay.addEventListener('click', () => {
  body.classList.remove('overlay-active');
  bars.forEach((bar) => {
    bar.classList.remove('change');
    bar.classList.add('back');
  });
  mobileMenu.classList.remove('active');
});

// Form submission with AJAX (prevents page refresh)
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  const contactForm = document.querySelector('form');
  const container = document.querySelector('.form .right');

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log('Form successfully submitted'))
    .catch((error) => alert(error));

  // Thank you message after form submission
  const thankYou = document.createElement('div');
  const thankYouHeading = document.createElement('h2');
  const thankYouText = document.createElement('p');

  thankYouHeading.innerHTML = 'Thank You!';
  thankYouText.innerHTML =
    "Thank you for contacting us, we'll be in touch very soon.";
  contactForm.remove();
  container.appendChild(thankYou);
  thankYou.classList.add('thank-you');
  thankYou.appendChild(thankYouHeading);
  thankYou.appendChild(thankYouText);
};

document.querySelector('form').addEventListener('submit', handleSubmit);

// Initialize Magnific Popup for image display
$(document).ready(function () {
  $('#zelle').magnificPopup({
    type: 'image',
  });
});

// Datepicker initialization and current year display
const elem = document.querySelector('#date');
const datepicker = new Datepicker(elem, {
  // ...options
});

// Auto update year for copyright info in footer
let year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();
