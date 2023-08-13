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

function validateForm(event) {
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const phoneError = document.getElementById('phone-error');
  const messageError = document.getElementById('message-error');

  let isValid = true;

  if (!phoneInput.checkValidity()) {
    phoneError.style.display = 'block';
    phoneInput.classList.add('invalid');
    isValid = false;
  } else {
    phoneError.style.display = 'none';
    phoneInput.classList.remove('invalid');
  }

  if (!messageInput.checkValidity()) {
    messageError.style.display = 'block';
    messageInput.classList.add('invalid');
    isValid = false;
  } else {
    messageError.style.display = 'none';
    messageInput.classList.remove('invalid');
  }

  if (!isValid) {
    event.preventDefault();
  }

  return isValid;
}

const successPopup = document.getElementById('success-popup');
const closePopup = document.getElementById('close-popup');
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  if (!validateForm(event)) {
    return;
  }

  // Simulate sending data to the server
  setTimeout(() => {
    successPopup.classList.add('active');
  }, 1000);
});

closePopup.addEventListener('click', function () {
  successPopup.classList.remove('active');
});

window.addEventListener('click', function (event) {
  if (event.target === successPopup) {
    successPopup.classList.remove('active');
  }
});