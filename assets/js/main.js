$(function () {

  "use strict";

  //===== Prealoder


  //===== Section Menu Active
  $(".sub-menu-bar").on('click', 'li', function () {
    $(".sub-menu-bar li.active").removeClass("active");
    // adding classname 'active' to current click li 
    $(this).addClass("active");
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on('click', function () {
    $(".navbar-toggler").removeClass('active');
  });


  //===== Slick

  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: '<div class="slide-arrow prev-arrow"><img src="assets/images/slide-arrow-left.svg"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><img src="assets/images/slide-arrow-right.svg"></div>'
  });

  //===== Sticky
  const header = document.querySelector(".navbar-area");
  const toggleClass = "is-sticky";

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  });

   //===== Animated btn

   (function() {
    const buttons = document.querySelectorAll(".btn-animated");
  
    buttons.forEach(button => {
      ["mouseenter", "mouseout"].forEach(evt => {
        button.addEventListener(evt, e => {
          let parentOffset = button.getBoundingClientRect(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
  
          const span = button.getElementsByTagName("span");
  
          span[0].style.top = relY + "px";
          span[0].style.left = relX + "px";
        });
      });
    });
  })();
  
  

});


