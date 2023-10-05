console.log('one page ');

let catalogSlider = $('.main-slider')

catalogSlider.slick({
  dots: false,
  arrows: false,
  // slidesToScroll: 1,
  slidesToShow: 1,
  asNavFor: '.preview-slider',
  focusOnSelect: true,
  infinite: false,
});


let sliderNavCatalog = $('.preview-slider');

sliderNavCatalog.slick({
  asNavFor: '.main-slider',
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: false,
  slidesToShow: 3,
  infinite: false,
});


let successSlider = $('.sccess-slider');

successSlider.slick({
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: false,
  slidesToShow: 3,
  infinite: false,
  responsive: [{
    breakpoint: 920,
    settings: {
        slidesToShow: 1,
      }
  }]
});

$(".prev-btn").click(function () {
    successSlider.slick("slickPrev");
});

$(".next-btn").click(function () {
    successSlider.slick("slickNext");
});



// if (window.matchMedia("(max-width: 780px)").matches) {
//   $(".zoom-images img").each((idx, el) => {
//     $(el).ezPlus({
//       zoomWindowPosition: 6
//     });
//   });
// } else {
//   /* the viewport is more than 500 pixels wide */
// }

$(".zoom-images img").each((idx, el) => {
    $(el).ezPlus({
      constrainType: 'height', constrainSize: 274, zoomType: 'lens',
      containLensZoom: true, gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: 'active'
    });
});

// $('#zoom_01').ezPlus({
//     lenszoom: true,
//     scrollZoom: true,
//     zoomType: 'lens',
//     // lensShape: 'round',
//     lensSize:200
//     // zoomType: 'inner',
//     // cursor: 'crosshair'
// });

let tabButtons = document.querySelectorAll('.tab-btn');
let contentList = document.querySelectorAll('.content-item');


console.log(tabButtons);

$(document).ready(function(){
    $(".tabs-wrap > a[href*='#']").on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top -10
      }, 777);
      e.preventDefault();
      return false;
    });
  });


// tabButtons.addEventListener('click', (el)=>{
//         console.log('click');
// })

// tabButtons.forEach((el)=>{

//     el.addEventListener('click', ()=>{

//         tabButtons.forEach((e)=>{
//             e.classList.remove('active');
//         })

//         el.classList.add('active');

//         let activateTab = el.dataset.tab;
//         let activateEl = document.getElementById(activateTab);

//         contentList.forEach((ar)=>{
//             ar.classList.remove('active');
//         })

//         activateEl.classList.add('active');

//         console.log(activateEl);        

//     });

// })

