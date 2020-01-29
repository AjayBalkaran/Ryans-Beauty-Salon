$(document).ready(() => {
  $('.chocolat-parent').Chocolat();

  $('.slideshow .slick').slick({
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    dots: true,
    arrows: true,
});
});

/* Open */
function openNav() {
    document.querySelector(".nav-links").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.querySelector(".nav-links").style.height = "0%";
  }