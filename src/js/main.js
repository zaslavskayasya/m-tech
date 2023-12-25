console.log(`Loaded main.js`);


$(document).ready(function(){

    $('.new-slider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // // centerPadding: '70px',
        variableWidth: true,
        speed: 500,
        useTransform: true,
        cssEase: 'ease-out',
        infinite: true,
        dots: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 1,
              variableWidth: false,
              centerMode: false,
              dots: false
            }
          },
        ]
    });
    $('.custom-prev-button').click(function(){
        $('.new-slider').slick('slickPrev');
      });
    
      $('.custom-next-button').click(function(){
        $('.new-slider').slick('slickNext');
      });



      $('.slider-left').slick({
        slidesToShow: 1,
        // centerPadding: '70px',
        variableWidth: true,
        dots: false,
        arrows: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 1,
              variableWidth: false,
              centerMode: false,
              dots: false

            }
          },
        ]
    });
    $('.left-gallery > .custom-prev-button').click(function(){
        $(' .slider-left').slick('slickPrev');
      });
    
      $('.custom-next-button').click(function(){
        $('.left-gallery > .slider-left').slick('slickNext');
      });



      let cards = document.querySelectorAll(".item .card");

      cards.forEach(card => {
        card.addEventListener('click', event => {
          window.location = card.querySelector('a').href;
        });
      });



});

let currentMousePos = { x: 50, y: 250 };
$('#circle').css('-webkit-mask-position-x', currentMousePos.x);
$('#circle').css('-webkit-mask-position-y', currentMousePos.y);
$('#cross').addClass('showed');

$('#scene').mousemove(function(e) {
    currentMousePos.x = e.pageX;
    currentMousePos.y = e.pageY;
  
  $('#circle').css('-webkit-mask-position', `${currentMousePos.x - 125}px ${currentMousePos.y - 125}px`);
  // Change position cross
  $('#cross').css({'top': currentMousePos.y - 40, 'left': currentMousePos.x - 40});
});

// Work with scene
$('#scene').mouseleave(e => {
  $('#circle').css('mask-size', '0');
  $('#cross').removeClass('showed');
});

$('#scene').mouseenter(e => {
  $('#circle').css('mask-size', '250px');
  $('#cross').addClass('showed');
});

// Work with choose buttons
$('.choose-buttons').mouseleave(e => {
  $('#circle').css('mask-size', '250px');
  $('#cross').addClass('showed');
});

$('.choose-buttons').mouseenter(e => {
  $('#circle').css('mask-size', '0');
  $('#cross').removeClass('showed');
});


document.querySelectorAll('.wrap-choose').forEach(item => item.addEventListener('click', function () {
  document.querySelector("#circle").setAttribute('src', item.getAttribute('data-bg'));
}));



// let menuBtn = document.querySelector('.menu-item-has-children');

// if(window.innerWidth < 900){
//   menuBtn.querySelector('a').addEventListener('click',(e) =>{
//       e.preventDefault();
//   } )
// }