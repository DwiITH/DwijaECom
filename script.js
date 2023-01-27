//swiper

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


//navbar
var navbare = document.getElementById("navbare");
var menu = document.getElementById("menu");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbare.classList.add("sticky");
    }
    else{
        navbare.classList.remove("sticky");
    }
}

// responsive

const navbarnav = document.querySelector('.menu');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};
