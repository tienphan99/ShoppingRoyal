$(function () {
  $('.slide-banner').slick({
    infinite: true,
    slidesToShow: 1,
  });
  $('.testimonial').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
  });
  $('.product-slide').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    dots: true
  });
  $('.news-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.logo-royal').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.multiple-items').slick({
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3
  });
})
// --------------------- Add active class to the current button (highlight it)--------------
// var btnContainer = document.getElementById("tabbed-content");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
filterSelection("selling")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("col-xl-20");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// --------------------------Add active class to the current button (highlight it)------------------
$(document).ready(function () {
  $('div button').click(function () {
    $('button').removeClass("active");
    $(this).addClass("active");
  });
});
// -------------------------------Navbar-Sticky-------------------------------
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// --------------------------Header-Fullscrean-Search-------------------
(function ($) {
  $(function () {
    $('.toggle-overlay').click(function () {
      $('.overlays').toggleClass('open');
    });
  });
})(jQuery);
function on() {
  document.getElementById("myOverlay").style.display = "block";
}

function off() {
  document.getElementById("myOverlay").style.display = "none";
}
// ----------------------------Tooltip-header-bottom------------------
$(document).ready(function () {
  $('.tooltips').tooltip({ title: "Chưa có sản phẩm trong giỏ hàng.", placement: "bottom" });
});
// -------------------------------Tooltip-footer-top-------------------------------
$(document).ready(function () {
  $('.tooltip-fb').tooltip({ title: "Follow on Facebook", placement: "top" });
  $('.tooltip-ins').tooltip({ title: "Follow on Instagram", placement: "top" });
  $('.tooltip-tw').tooltip({ title: "Follow on Twitter", placement: "top" });
  $('.tooltip-you').tooltip({ title: "Follow on Youtube", placement: "top" });
});
// --------------------------Range-noUISlider------------------------------
$(function () {
  var sliders = document.getElementById('slider');

  noUiSlider.create(sliders, {
    start: [0, 2950],
    connect: true,
    range: {
        'min': [100],
        '50%': [500, 500],
        '80%': [400,2950],
        'max': [2950]
    }
  });
  //   var a = document.getElementsByClassName('slider-range-value')[0]
  //   sliders.noUiSlider.on('update', function (values, handle) {
  //     a.innerHTML = values[handle]
  // });
  var nonLinearStepSliderValueElement = document.getElementById('slider-range-value');
  sliders.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement.innerHTML = values.join(' ₫ - ');
  })
});
// ---------------------Navbar-active------------------------------
