const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', function () {
  nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('#nav a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('active');
  });
});