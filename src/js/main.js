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
        $('.left-gallery >  .slider-left').slick('slickNext');
      });


});




let currentMousePos = { x: 50, y: 250 };
$('#circle').css('-webkit-mask-position-x', currentMousePos.x );
$('#circle').css('-webkit-mask-position-y', currentMousePos.y)

$('#scene').mousemove(function(e) {
    currentMousePos.x = e.pageX;
    currentMousePos.y = e.pageY;
  
  $('#circle').css('-webkit-mask-position-x', currentMousePos.x - 85 );
  $('#circle').css('-webkit-mask-position-y', currentMousePos.y - 85 )
});


$("#teplo").click(function() {
  // Змінюємо атрибут 'src' на нове посилання на зображення
  $("#circle").attr("src", "./img/illustration/base2.png");
});

$("#night").click(function() {
  // Змінюємо атрибут 'src' на нове посилання на зображення
  $("#circle").attr("src", "./img/illustration/base1.png");
});



let menuBtn = document.querySelector('.menu-item-has-children');

if(window.innerWidth < 900){
  console.log("less then")

  // currentMousePos = { x: 60, y: 150 };
  // $('#circle').css('-webkit-mask-position-x', currentMousePos.x );
  // $('#circle').css('-webkit-mask-position-y', currentMousePos.y);
  menuBtn.querySelector('a').addEventListener('click',(e) =>{
    // console.log(this)
      e.preventDefault();
  } )
}