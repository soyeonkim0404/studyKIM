"use strict";
(function () {
    let colorTabImage = document.querySelectorAll('.gallery-item');
    let colorTabNav = document.querySelectorAll('.nav-item');
    for (let i = 0; i < colorTabNav.length; i++){
        colorTabNav[i].addEventListener('click',(evt)=>{
            evt.preventDefault()
            colorTabImage.forEach((item) => {
                item.classList.remove('current');
            })
            colorTabNav.forEach((item)=>{
                item.classList.remove('current');
            })
            colorTabImage[i].classList.add('current');
            colorTabNav[i].classList.add('current');
        })
    }
})();
