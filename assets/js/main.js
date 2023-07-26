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
   $(function() {  
    $('.btn-animated')
      .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      });
    $('[href=#]').click(function(){return false});
  });



  //  (function() {
  //   const buttons = document.querySelectorAll(".btn-animated");
  
  //   buttons.forEach(button => {
  //     ["mouseenter", "mouseout"].forEach(evt => {
  //       button.addEventListener(evt, e => {
  //         let parentOffset = button.getBoundingClientRect(),
  //             relX = e.pageX - parentOffset.left,
  //             relY = e.pageY - parentOffset.top;
  
  //         const span = button.getElementsByTagName("span");
  
  //         span[0].style.top = relY + "px";
  //         span[0].style.left = relX + "px";
  //       });
  //     });
  //   });
  // })();

  
  //===== Country dropdown 

  function setCountry(code) {
    if (code || code == '') {
      var text = jQuery('a[cunt_code="' + code + '"]').html();
      $(".dropdown dt a span").html(text);
    }
  }
  $(document).ready(function () {
    $(".dropdown img.flag").addClass("flagvisibility");

    $(".dropdown dt a").click(function () {
      $(".dropdown dd ul").toggle();
    });

    $(".dropdown dd ul li a").click(function () {
      //console.log($(this).html())
      var text = $(this).html();
      $(".dropdown dt a span").html(text);
      $(".dropdown dd ul").hide();
      $("#result").html("Selected value is: " + getSelectedValue(".country-select1"));
    });

    function getSelectedValue(id) {
      //console.log(id,$("#" + id).find("dt a span.value").html())
      return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function (e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("dropdown"))
        $(".dropdown dd ul").hide();
    });


    $("#flagSwitcher").click(function () {
      $(".dropdown img.flag").toggleClass("flagvisibility");
    });
  });

  // Aboutus section slider JS

  $(function () {
    $('.hub-slider-slides').hubSlider({
        selector: $('a'),
        button: {
            next: $('.hub-slider-arrow_next'),
            prev: $('.hub-slider-arrow_prev')
        },
        transition: '1s',
        startOffset: 25,
        auto: true,
        time: 3 // secondly
    });
});
// Aboutus section slider JS END

// Services Slider JS Start

$(document).ready(function () {
  $(".my-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    prevArrow: '<div class="slick-prev slick-arrow"><img src="assets/images/left-arrow.svg"></div>',
    nextArrow: '<div class="slick-next slick-arrow"><img src="assets/images/right-arow.svg"></div>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// $('.wrapslide').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   arrows: true,
//   prevArrow: '<div class="slick-prev slick-arrow"><img src="assets/images/left-arrow.svg"></div>',
//   nextArrow: '<div class="slick-next slick-arrow"><img src="assets/images/right-arow.svg"></div>',
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

// Services Slider JS End


// Industries Slider JS Start

$(document).ready(function () {
  $("#ind-slider-right").slick({
    slidesToShow: 2.6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.4
        }
      }
    ]
  });
});

$('#icon-left').click(function () {
  $('#ind-slider-right').slick('slickPrev');
});
$('#icon-right').click(function () {
    $('#ind-slider-right').slick('slickNext');
});

// Industries Slider JS End



// Testimonial Slider JS Start

$(document).ready(function () {
  $(".video-testimonial-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    prevArrow: '<div class="slick-prev slick-arrow"><img src="assets/images/left-arrow.svg"></div>',
    nextArrow: '<div class="slick-next slick-arrow"><img src="assets/images/right-arow.svg"></div>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// Testimonial Slider JS End


// knowledge center Slider JS Start

$(document).ready(function () {
  var mySwiper = new Swiper(".newsSlider", {
    slidesPerView: "auto",
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      click(event) {
          console.log('event.target',this.clickedIndex);
          mySwiper.slideTo(this.clickedIndex);	
      },
    },
  });
});

// knowledge center Slider JS End


//===== Prealoder==========//
$(window).on('load', function (event) {
  $('.preloader').delay(500).fadeOut(500);
});
//===== Prealoder==========//



});

// Lottie button animation 

// document.addEventListener("DOMContentLoaded", function () {
//   const btnFloat = document.querySelectorAll(".btn-hero"),
//     body = document.querySelector("body");
//   let isMenuAlreadyOpen = false;
//   if (isMenuAlreadyOpen) {
//     body.classList.remove("menu-open");
//     isMenuAlreadyOpen = false;
//   }

//   $(window).bind("mousewheel", function (event) {
//     var doc = document.documentElement;
//     let height = screen.height;
//     var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
//     if (event.originalEvent.wheelDelta >= 0) {
//       if (top <= height) {
//         btnFloat.forEach((btn) => btn.removeAttribute("style"));
//         setTimeout(() => {
//           btnFloat.forEach((btn) => btn.classList.remove("float"));
//         }, 200);
//       }
//     } else {
//       if (top) {
//         setTimeout(() => {
//           btnFloat.forEach((btn) => btn.classList.add("float"));
//         }, 10);
//       }
//     }
//   });
// });

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
      $(".fixed-ver").addClass("float");
  } else {
      $(".fixed-ver").removeClass("float");
  }
});

// Phone number Masking

function preventNonNumericalInput(e) {
  e = e || window.event;
  var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
}





