const header = document.querySelector('.header');

window.addEventListener('scroll', ()=> {
  console.log(window.scrollY);
  if(window.scrollY > 30) {
    header.classList.add('active');
    console.log('test');
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