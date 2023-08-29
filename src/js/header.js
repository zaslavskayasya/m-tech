console.log('header loaded')

let openMenuBtn = document.querySelector('.menu-button');
let closeMenuBtn = document.querySelector('.close-button');
let headerIs = document.querySelector('.header');


openMenuBtn.addEventListener('click', ()=>{
    headerIs.classList.add('open-header');    
});

closeMenuBtn.addEventListener('click', ()=>{
    headerIs.classList.remove('open-header')
});


let dropsBtns = document.querySelectorAll('.dropup');

dropsBtns.forEach((item) => {
  item.addEventListener('mouseenter', () => {
      // Перебираємо всі пункти меню
      headerIs.classList.add('open'); 
      dropsBtns.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("open")) {
              otherItem.classList.remove("open");
            //   headerIs.classList.add('open'); 
          }
      });
      // Тогглімо "open" клас для поточного пункту меню
    //   if (item.classList.contains("open")) {
    //       item.classList.remove("open");
    //       headerIs.classList.remove('open'); 
    //   } else {
    //       item.classList.add("open");
    //       headerIs.classList.add('open'); 
    //   }
  });
  item.addEventListener('mouseleave', () => {
    headerIs.classList.remove('open');
  }  )
});


