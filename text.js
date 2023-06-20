
// function test(){
// let nav = document.getElementsByClassName("topNavUl")
// let nav2 = nav.document.getElementsByTagName("li")


// function newNav(){
//     nav.li[0].a.innerHTML = "joj"
// }
// console.log(nav)
// }

window.onload = function(){

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const slideImage = document.querySelector(".swiper-button-next")

const icon = document.querySelector(".fa-bars")
const nav =  document.querySelector("nav")

icon.onclick = function(){
  nav.style.background-color = "#"
}
    }



// const slideImage = document.querySelector(".slideImage");
// const slideContainer = document.querySelector(".slideContainer")
// const nextBtn = document.querySelector(".next-btn")
// const prevBtn = document.querySelector(".prev-btn")
// const navigationDots =document.querySelector(".navigationDots")







window.onload()
    
//     test();
//     imgSwiper();
// }