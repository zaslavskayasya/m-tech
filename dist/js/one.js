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
  // Настройка всех слайдеров в одном объекте
  let slick_settings = {
    dots: false,
    arrows: false,
    variableWidth: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          focusOnSelect: false,
          adaptiveHeight: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log(slides);

  let slidesToShows;

  if(slides.length<=3){
    console.log('less')
    slidesToShows = slides.length;
    $('#viewed .btn-wrap').css("display", "none")
    
  } else {
    slidesToShows = 3;
  }

  let successSlider = $(".sccess-slider");
  successSlider.slick(slick_settings);

  $("#viewed .prev-btn").click(function () {
    successSlider.slick("slickPrev");
  });

  $("#viewed .next-btn").click(function () {
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
  alsoSlider.slick(slick_settings);

  $("#same.popular .prev-btn").click(function () {
    alsoSlider.slick("slickPrev");
  });

  $("#same.popular .next-btn").click(function () {
    alsoSlider.slick("slickNext")
  });






  // accesour 
  let slidesAcces = document.querySelectorAll('.accesour .item');
  // console.log(slidesAlso);

  let slidesToShowAcces;

  if(slidesAcces.length<=3){
    console.log('less')
    slidesToShowAcces = slidesAcces.length;
    $('#accesoires .btn-wrap').css("display", "none")
    
  } else {
    slidesToShowAcces = 3;
  }

  let alsoSliderAcessour = $(".accesour");
  alsoSliderAcessour.slick(slick_settings);

  $(".accesoires .prev-btn").click(function () {
    alsoSliderAcessour.slick("slickPrev");
  });

  $(".accesoires .next-btn").click(function () {
    alsoSliderAcessour.slick("slickNext")
  });


  let tabButtons = document.querySelectorAll(".tab-btn");
  let contentList = document.querySelectorAll(".content-item");

  var $page = $('html, body');
  $('.tab-btn').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 900);
      return false;
  });
  // Tabs
  // $(".tabs-wrap ").on("click", function (e) {
  //   let anchor = $(this);
  //   console.log(anchor)
  //   $("html, body")
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $(anchor.attr("href")).offset().top - 10,
  //       },
  //       777
  //     );
  //   e.preventDefault();
  //   return false;
  // });

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


//# sourceMappingURL=one.js.map
