console.log("one page 1");

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
});

const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  // simulateTouch: true,
  slidesPerView: 1,
  navigation: {
    prevEl: '.prev-btn',
    nextEl: '.next-btn',
  },
  thumbs: {
    swiper: swiper,
  },
});



$(document).ready(function () {
  let slides = document.querySelectorAll('.sccess-slider .item');
  console.log(slides);

  let slidesToShow;

  if(slides.length<=3){
    console.log('less')
    slidesToShow = slides.length;
    $('.popular .btn-wrap').css("display", "none")
    
  } else {
    slidesToShow = 3;
  }

  let successSlider = $(".sccess-slider");
  successSlider.slick({
    dots: false,
    arrows: false,
    // centerMode: false,
    // focusOnSelect: true,
    // variableWidth: false,
    slidesToShow: slidesToShow,
    // infinite: false,
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
  let slidesAlso = document.querySelectorAll('.see-also .item');
  console.log(slidesAlso);

  let slidesToShowAlso;

  if(slidesAlso.length<=3){
    console.log('less')
    slidesToShowAlso = slidesAlso.length;
    $('#same .btn-wrap').css("display", "none")
    
  } else {
    slidesToShowAlso = 3;
  }

  let alsoSlider = $(".see-also");
  alsoSlider.slick({
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: false,
    slidesToShow: slidesToShowAlso,
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