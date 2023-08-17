console.log("form loaded")


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
//# sourceMappingURL=form.js.map