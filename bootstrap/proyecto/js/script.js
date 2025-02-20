document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.login__bloques__menu__toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
      });
    }
  });