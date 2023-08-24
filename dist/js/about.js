console.log('about ');

$('.rewiew-slider').slick({
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
$('.custom-prev-button').click(function(){
    $('.rewiew-slider').slick('slickPrev');
  });

  $('.custom-next-button').click(function(){
    $('.rewiew-slider ').slick('slickNext');
  });
//# sourceMappingURL=about.js.map