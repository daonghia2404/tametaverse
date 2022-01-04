window.onload = () => {
  header.init()
}

const header = {
  init: function() {
    this.toggleMenu();
  },
  toggleMenu: function() {
    const btnMenu = document.querySelector('.header-mobile-btn');
    const menu = document.querySelector('.header-list');
    const menuLink = menu.querySelectorAll('.header-list-item-link')

    btnMenu.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    menuLink.forEach((item) => item.addEventListener('click', () => {
      menu.classList.remove('active');
    }))

    // Click Outside
    const listener = (event) => {
      if (!menu || menu.contains(event.target)) {
        return;
      }
      menu.classList.remove('active');
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
  },
}