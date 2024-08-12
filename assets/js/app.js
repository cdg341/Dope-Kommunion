const header = document.querySelector('.header');

window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(() => {
    header.classList.add('top-active');
  }, 1000);
})

window.addEventListener('scroll', ()=> {
  if(window.scrollY > 30) {
    header.classList.add('active');
  } else if(window.scrollY == 0) {
    header.classList.remove('active')
  }
})

const mobileButton = document.querySelector('.mobile-button');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const bar = document.querySelectorAll('.bar');
const menuLink = document.querySelectorAll('.menu-item a');

mobileButton.addEventListener('click', () => {
  if(!mobileMenu.classList.contains('active')){
    mobileMenu.classList.add('active');
    body.classList.add('overlay-active');
    bar.forEach((bars) => {
      bars.classList.remove('back');
      bars.classList.add('change');
    });
  } else {
    mobileMenu.classList.remove('active');
    body.classList.remove('overlay-active');
    bar.forEach((bars) => {
      bars.classList.remove('change');
      bars.classList.add('back');
    });
  }
})

menuLink.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    body.classList.remove('overlay-active');
    bar.forEach((bars) => {
      bars.classList.remove('change');
      bars.classList.add('back');
    });
  })
});

const mobileOverlay = document.querySelector('.mobile-overlay');

mobileOverlay.addEventListener('click', ()=> {
  body.classList.remove('overlay-active');
  bar.forEach((bars) => {
    bars.classList.remove('change');
    bars.classList.add('back');
    });
  mobileMenu.classList.remove('active')
})

//Add ajax to form so page doesn't refresh on submit
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  const contactForm = document.querySelector('form')
  const thankYou = document.createElement('div').
  classList.add('thank-you');
  const thankYouHeading = document.createElement('h2');
  const thankYouText = document.createElement('p');
  const container = document.querySelector('.form .right')

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));

    thankYouHeading.innerHTML = 'Thank You';
    thankYouText.innerHTML = 'Thank you for contacting us, we\'ll be in touch very SVGComponentTransferFunctionElement.'
    contactForm.remove();
    thankYou.appendChild(thankYouHeading);
    thankYou.appendChild(thankYouText);
    container.appendChild(thankYou);

};

document.querySelector("form").addEventListener("submit", handleSubmit);
