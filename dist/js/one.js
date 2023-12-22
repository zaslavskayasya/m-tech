console.log("one page ");

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
});

const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  simulateTouch: true,
  loop: true,
  navigation: {
    prevEl: '.prev-btn',
    nextEl: '.next-btn',
  },
  thumbs: {
    swiper: swiper,
  },
});



$(document).ready(function () {
  let successSlider = $(".sccess-slider");
  successSlider.slick({
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: false,
    slidesToShow: 3,
    infinite: false,
    navigation: {
      prevEl: '.prev-btn',
      nextEl: '.next-btn',
    },
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".prev-btn").click(function () {
    successSlider.slick("slickPrev");
  });

  $(".next-btn").click(function () {
    successSlider.slick("slickNext");
  });



  // also 
  let alsoSlider = $(".see-also");
  alsoSlider.slick({
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: false,
    slidesToShow: 3,
    infinite: false,
    navigation: {
      prevEl: '.prev-btn',
      nextEl: '.next-btn',
    },
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".prev-btn").click(function () {
    alsoSlider.slick("slickPrev");
  });

  $(".next-btn").click(function () {
    alsoSlider.slick("slickNext")



  let tabButtons = document.querySelectorAll(".tab-btn");
  let contentList = document.querySelectorAll(".content-item");

  // Tabs
  $(".tabs-wrap > a[href*='#']").on("click", function (e) {
    let anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 10,
        },
        777
      );
    e.preventDefault();
    return false;
  });

  // Swiper
});


$('.zoom-images').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      return item.el.attr('title') + '<small>by Mercury Technology</small>';
    }
  }
});


});
//# sourceMappingURL=one.js.map