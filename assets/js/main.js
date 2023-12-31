$(function () {

  "use strict";

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
  $(function () {
    $('.btn-animated')
      .on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find('span').css({ top: relY, left: relX })
      })
      .on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find('span').css({ top: relY, left: relX })
      });
    $('[href*=\\#]').click(function () { return false });
  });

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
      // $(".dropdown").toggleClass("arrow-reverse");
      $(".dropdown dd ul").toggle();
    });

    $(".dropdown dd ul li a").click(function () {
      var text = $(this).html();
      $(".dropdown dt a span").html(text);
      $(".dropdown dd ul").hide();
      $("#result").html("Selected value is: " + getSelectedValue(".country-select1"));
    });

    function getSelectedValue(id) {
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


  // State Dropdown JS

  // $(".custom-select-dropdown").click(function () {
  //   $(".custom-select-dropdown").toggleClass("arrow-reverse-state");
  // });
  
  //===== About us slider

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

 //===== Services Slider

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
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });
 });

   //===== Industries Slider
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
        breakpoint: 1450,
        settings: {
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3.3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
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


//===== Testimonial Slider

$(document).ready(function () {
  $(".video-testimonial-slider").slick({
    slidesToShow: 3,
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });
});

  //===== knowledge center Slider

  $(document).ready(function () {
    var mySwiper = new Swiper(".newsSlider", {
      slidesPerView: "auto",
      slidesPerView: 4,
      spaceBetween: 15,
      grabCursor: true,
      loop: true,
      observer: true,
      observeParents: true,
     
      autoplay: {
        delay: 300000,
        disableOnInteraction: false,
      },
      on: {
        click(event) {
          console.log('event.target', this.clickedIndex);
          mySwiper.slideTo(this.clickedIndex);
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        575: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        // when window width is >= 480px
        767: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 4,
          spaceBetween: 15
        }
      },
    });
  });


});

 //===== Fixed animated btn
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
    $(".fixed-ver").addClass("float");
  } else {
    $(".fixed-ver").removeClass("float");
  }
});

//===== Phone number masking

function preventNonNumericalInput(e) {
  e = e || window.event;
  var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
}

//===== Prealoder
const loader = document.querySelector('.loader')
setTimeout(() => {
  loader.classList.add('hide')
}, 2000)


// Dropdown add class

// function myFunction() {
//   var element = document.getElementById("country-select");
//   element.classList.add("down-rotate");
// }