let sliderInner = document.querySelector(".slider-inner")

let images = sliderInner.querySelectorAll("div")
let index = 1

setInterval(function(){
    let percentage = index * -100
    sliderInner.style.transform = "translateX("+percentage+"%)"
    index++
    if(index > images.length - 1){
        index = 0
    }
},2500)

function rotate(){
    let percentage = index * -100
    sliderInner.style.transform = "translateX("+percentage+"%)"
    index++
    if(index > images.length - 1){
        index = 0
    }
}