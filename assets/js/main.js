window.onload = () => {
  header.init()
  owlCarousel.init()
}

const header = {
  init: function() {
    this.toggleMenu();
    this.scrollShowOnTop();
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
  scrollShowOnTop: function() {
    const btnOnTop = document.querySelector('.btn-on-top')

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) btnOnTop.classList.add('active')
      else btnOnTop.classList.remove('active')
    })
  },
}

const owlCarousel = {
  init: function () {
    this.setupCarouselSection3()
    this.setupCarouselSection4()
    this.setupCarouselSection5()
  },
  setupCarouselSection3: function () {
    const $owl = $("#carousel-section-3").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        425: {
          items: 1.5,
        },
      },
      loop: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: true,
      nav: false,
      margin: 12,
    });
  },
  setupCarouselSection4: function () {
    const $owl = $("#carousel-section-4").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        425: {
          items: 1.5,
        },
      },
      loop: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: true,
      nav: false,
      margin: 12,
    });
  },
  setupCarouselSection5: function () {
    const $owl = $("#carousel-section-5").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        425: {
          items: 1.5,
        },
      },
      loop: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: true,
      nav: false,
      margin: 12,
    });
  },
}