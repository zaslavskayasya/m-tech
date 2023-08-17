console.log('header loaded')

let openMenuBtn = document.querySelector('.menu-button');
let closeMenuBtn = document.querySelector('.close-button');

let headerIs = document.querySelector('.header');


console.log(openMenuBtn);



openMenuBtn.addEventListener('click', ()=>{
    headerIs.classList.add('open-header')
});

closeMenuBtn.addEventListener('click', ()=>{
    headerIs.classList.remove('open-header')
});

let dropsBtns = document.querySelectorAll('.dropup');

dropsBtns.forEach((item) => {
  item.addEventListener('click', () => {
      // Перебираємо всі пункти меню
      dropsBtns.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("open")) {
              otherItem.classList.remove("open");
          }
      });

      // Тогглімо "open" клас для поточного пункту меню
      if (item.classList.contains("open")) {
          item.classList.remove("open");
      } else {
          item.classList.add("open");
      }
  });
});

//# sourceMappingURL=header.js.map
