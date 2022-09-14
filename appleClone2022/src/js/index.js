"use strict";
/*product nav sticky*/
(function(){
    const productNav = document.querySelector('#product-nav');
    window.addEventListener('scroll', function(){
        if(window.scrollY >= 44){
            productNav.classList.add('sticky-now');
        }else{
            productNav.classList.remove('sticky-now');
        }
    });
})();

/*device color show and hide*/
(function () {
  let colorTabImage = document.querySelectorAll(".gallery-item");
  let colorTabNav = document.querySelectorAll(".nav-item");
  for (let i = 0; i < colorTabNav.length; i++) {
          colorTabNav[i].addEventListener("click", (evt) => {
              evt.preventDefault();
              colorTabImage.forEach((item) => {
                  item.classList.remove("current");
              });
              colorTabNav.forEach((item) => {
                  item.classList.remove("current");
              });
              colorTabImage[i].classList.add("current");
              colorTabNav[i].classList.add("current");
          });
      /*(function (x){
          colorTabImage.forEach((item) => {
              item.classList.remove("current");
          });
          colorTabNav.forEach((item) => {
              item.classList.remove("current");
          });
          colorTabImage[i].classList.add("current");
          colorTabNav[i].classList.add("current");
      },x*1000)*/
  }
})();

