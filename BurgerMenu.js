// Mobile menu

function burgerMenu() {
  const burger = dociment.querySelector('.burger);
  const menu = dociment.querySelector('.menu);
  const body = dociment.querySelector('body);
  
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      buregr.classList.add('active');
      body.classList.add('locked');
    } else {
      menu.classList.remove('active');
      buregr.classList.remove('active');
      body.classList.remove('locked');
    }
  })
  
  // Breckpoit navBar
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.add('active');
      buregr.classList.add('active');
      body.classList.add('locked');
    }  
  })
}

burgerMenu();
