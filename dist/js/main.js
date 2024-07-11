

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
        variableWidth: false,
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

      let relocation = card => {
        window.location = card.querySelector('a').href;
      };
      cards.forEach(card => {
        card.querySelectorAll('.card-img, .header-card').forEach(el => {
            el.addEventListener('click', () => {
              relocation(card);
            });
        });
      });



});




// let currentMousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const circle = $('#circle');
//     const cross = $('#cross');

//     // Initial positioning
//     circle.css({ 'top': `${currentMousePos.y - 125}px`, 'left': `${currentMousePos.x - 125}px` });
//     cross.css({ 'top': `${currentMousePos.y - 120}px`, 'left': `${currentMousePos.x - 120}px` });

//     // Mouse move event
//     $('#scene').mousemove(function(e) {
//         currentMousePos.x = e.pageX;
//         currentMousePos.y = e.pageY;

//         circle.css('transform', `translate(${currentMousePos.x - (window.innerWidth / 2) - 125}px, ${currentMousePos.y - (window.innerHeight / 2) - 125}px)`);
//         cross.css('transform', `translate(${currentMousePos.x - (window.innerWidth / 2) - 40}px, ${currentMousePos.y - (window.innerHeight / 2) - 40}px)`);
//     });

//     // Mouse enter and leave events
//     $('#scene').mouseleave(e => {
//         circle.css('transform', 'translate(0, 0)');
//         cross.removeClass('showed');
//     });

//     $('#scene').mouseenter(e => {
//         cross.addClass('showed');
//     });

//     // Choose buttons events
//     $('.choose-buttons').mouseleave(e => {
//         cross.addClass('showed');
//     });

//     $('.choose-buttons').mouseenter(e => {
//         cross.removeClass('showed');
//     });

//     document.querySelectorAll('.wrap-choose').forEach(item => item.addEventListener('click', function () {
//         document.querySelector("#circle").style.backgroundImage = `url(${item.getAttribute('data-bg')})`;
//     }));

$(document).ready(function() {
  let currentMousePos = { x: (window.innerWidth / 2) - 120, y: (window.innerHeight / 2) - 120 };
  let isAnimating = false;
  let animationInterval;

  $('#circle').css('-webkit-mask-position-x', currentMousePos.x);
  $('#circle').css('-webkit-mask-position-y', currentMousePos.y);

  $('#cross').css('top', (window.innerHeight / 2) - 30);
  $('#cross').css('left', (window.innerWidth / 2) - 35);

  console.log($('#cross').width());

  $('#cross').addClass('showed');

  function startAnimation() {
      if (!isAnimating) {
          isAnimating = true;
          let moveDown = true;
          animationInterval = setInterval(() => {
              if (moveDown) {
                  currentMousePos.y += 10;
              } else {
                  currentMousePos.y -= 10;
              }
              moveDown = !moveDown;

              $('#circle').css({
                  '-webkit-mask-position': `${currentMousePos.x }px ${currentMousePos.y }px`,
                  'transition': 'all 0.5s ease'
              });
              $('#cross').css({
                  'top': currentMousePos.y  + 85 ,
                  'transition': 'top 0.5s ease'
              });
          }, 700);
      }
  }

  function stopAnimation() {
      isAnimating = false;
      clearInterval(animationInterval);
      $('#circle').css({
        'transition': 'none'
    });
    $('#cross').css({
        'transition': 'none'
    });
  }

  $('#scene').mousemove(function(e) {
      stopAnimation();
      currentMousePos.x = e.pageX;
      currentMousePos.y = e.pageY;

      $('#circle').css('-webkit-mask-position', `${currentMousePos.x - 125}px ${currentMousePos.y - 125}px`);
      $('#cross').css({ 'top': currentMousePos.y - 40, 'left': currentMousePos.x - 40 });

      // setTimeout(startAnimation, 2000); // Start animation after 2 seconds of no mouse movement
  });

  // Touch events for mobile
  $('#scene').on('touchstart touchmove', function(e) {
      stopAnimation();
      const touch = e.touches[0];
      currentMousePos.x = touch.pageX;
      currentMousePos.y = touch.pageY;

      $('#circle').css('-webkit-mask-position', `${currentMousePos.x - 125}px ${currentMousePos.y - 125}px`);
      $('#cross').css({ 'top': currentMousePos.y - 40, 'left': currentMousePos.x - 40 });

      // setTimeout(startAnimation, 2000); // Start animation after 2 seconds of no touch movement
  });

  $('#scene').mouseleave(e => {
      $('#circle').css('mask-size', '0');
      $('#cross').removeClass('showed');
  });

  $('#scene').mouseenter(e => {
      $('#circle').css('mask-size', '250px');
      $('#cross').addClass('showed');
  });

  $('.choose-buttons').mouseleave(e => {
      $('#circle').css('mask-size', '250px');
      $('#cross').addClass('showed');
  });

  $('.choose-buttons').mouseenter(e => {
      $('#circle').css('mask-size', '0');
      $('#cross').removeClass('showed');
  });

  document.querySelectorAll('.wrap-choose').forEach(item => item.addEventListener('click', function() {
      document.querySelector("#circle").style.backgroundImage = `url(${item.getAttribute('data-bg')})`;
  }));

  startAnimation(); // Start animation initially
});
// let menuBtn = document.querySelector('.menu-item-has-children');

// if(window.innerWidth < 900){
//   menuBtn.querySelector('a').addEventListener('click',(e) =>{
//       e.preventDefault();
//   } )
// }
//# sourceMappingURL=main.js.map