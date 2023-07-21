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
      $("#result").html("Selected value is: " + getSelectedValue("country-select"));
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
    autoplay: true,
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

// Services Slider JS End


// Industries Slider JS Start

$(document).ready(function () {
  $("#ind-slider-right").slick({
    slidesToShow: 2.7,
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
          slidesToShow: 2.5
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.6
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

// Testimonial Slider JS End
  
});





