var menu = document.querySelector(".nav i");

var cross = document.querySelector(".full i");


var tl  =gsap.timeline()

tl.to(".full" ,{
    duration:0.8,
    opacity:1,
    ease:"power2.out",
    right:"0"
})



tl.from(".full h4" , {
    duration:0.5,
    opacity:0,
    x:150,
    stagger:0.1,
})

tl.from(".full i",{
    duration:0.5,
    opacity:0,
    x:150,
    stagger:0.1,
})


tl.pause();



menu.addEventListener("click",()=>{
    tl.play();
})

cross.addEventListener("click",()=>{
    tl.reverse();
})
