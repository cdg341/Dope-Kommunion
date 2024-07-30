import AOS from 'aos';

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