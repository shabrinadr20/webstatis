const menu = document.querySelector('.navbar #menu');
const nav = document.querySelector('.navbar .navbar-nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active')
});

const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('active')
  }
})
