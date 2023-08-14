// let openMenuBtn = document.querySelector('.menu-button');
// let closeMenuBtn = document.querySelector('.close-button');

// let headerIs = document.querySelector('.header');

// openMenuBtn.addEventListener('click', ()=>{
//     headerIs.classList.add('open-header')
// });

// closeMenuBtn.addEventListener('click', ()=>{
//     headerIs.classList.remove('open-header')
// });

// let dropsBtns = document.querySelectorAll('.dropup');


// dropsBtns.forEach((item, e)=>{
//     item.addEventListener('click', (e)=>{
//         console.log(item);
        
//         if(item.classList.contains("open")){
//             item.classList.remove("open");
//         } else {
//             item.classList.add("open");

//         }

//     })
// });



// var openModalBtns = document.querySelectorAll(".openModal");
// var modal = document.querySelectorAll(".modal-myModal");
// var closeBtns = document.querySelectorAll(".close");
// var overlay = document.querySelector(".overlay");
// var thankYouModal = document.querySelector(".modal-thankYouModal");
// var closeThankYouModalBtn = thankYouModal.querySelector(".close");
// var forms = document.querySelectorAll(".form");

// openModalBtns.forEach(btn => {
//   // console.log(btn, index);
//   btn.addEventListener("click", openModal);
// });

// closeBtns.forEach(btn => {
//   btn.addEventListener("click", closeModal);
// });

// forms.forEach(function(form, index) {
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
   

//     closeModal();
//     openThankYouModal();
//   });
// });

// closeThankYouModalBtn.addEventListener("click", function() {
//   closeThankYouModal();
// });


// function openModal(e) {
//   let target = e.target;
//   modal[0].style.display = "block";
//   overlay.style.display = "block";
// }

// function closeModal(index) {
//   modal[0].style.display = "none";
//   overlay.style.display = "none";
// }

// function openThankYouModal() {
//   thankYouModal.style.display = "block";
//   overlay.style.display = "block";
// }

// function closeThankYouModal() {
//   thankYouModal.style.display = "none";
//   overlay.style.display = "none";
// }

// if (modal && modal[0]){
//   modal[0].addEventListener('click', function(e){
//     let target = e.target;

//     if (target.classList.contains('modal-myModal')){
//       closeModal();
//     }
//   });
// }

// document.querySelectorAll('[type="tel"]').forEach(item => {
//   IMask(
//       item,
//       {
//           mask: [
//               {
//                   mask: '+{380}(00)000-00-00',
                 
//               }
//           ]
//       }
//   );
// });

