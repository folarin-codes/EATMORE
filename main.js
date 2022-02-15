let menuImg = document.querySelector('.menu');
let nav = document.querySelector('nav');
let navList = document.getElementById('nav-list')
menuImg.addEventListener('click', function () {
      
      menuImg.style.position = 'none';

      if (menuImg.getAttribute('src') === "/images/menu-open.svg")
      {
            setTimeout(menuImg.setAttribute('src', "/images/cancel.svg"), 400000);
            
            menuImg.style.position = 'fixed';
    }
    else {
            setTimeout(menuImg.setAttribute('src', "/images/menu-open.svg", 100000))
            
            menuImg.style.position = 'none';
      }
      
      nav.classList.toggle('nav-nav')
      navList.classList.toggle('nav-list')

})

// if (menuImg.getAttribute('src') === "/images/cancel.svg") {
     
//       menuImg.style.position = 'fixed';
// }