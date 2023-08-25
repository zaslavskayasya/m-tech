console.log(`Loaded main.js`);


$(document).ready(function(){
    $('.new-slider').slick({
        centerMode: true,
        slidesToShow: 1,
        // centerPadding: '70px',
        variableWidth: true,
        dots: true,
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


var currentMousePos = { x: -1, y: -1 };

$('#flesh').mousemove(function(e) {
    currentMousePos.x = e.pageX;
    currentMousePos.y = e.pageY;
  
  $('#bone').css('-webkit-mask-position-x', currentMousePos.x - 75);
  $('#bone').css('-webkit-mask-position-y', currentMousePos.y - 75)
});



$("#teplo").click(function() {
  // Змінюємо атрибут 'src' на нове посилання на зображення
  $("#bone").attr("src", "./img/illustration/base2.png");
});

$("#night").click(function() {
  // Змінюємо атрибут 'src' на нове посилання на зображення
  $("#bone").attr("src", "./img/illustration/base1.png");
});