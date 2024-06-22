  
  var main = document.querySelector('#main')


  var cursor = document.querySelector('#cursor')

  var imageDiv =  document.querySelector('#image')



  main.addEventListener("mousemove",(e)=>{

    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.7,
        ease:"power3.out"
    })
  })


  imageDiv.addEventListener("mouseenter" , (e)=>{


    gsap.to(cursor,{
        scale:1.8
    })
  })


  imageDiv.addEventListener("mouseleave" , (e)=>{


    gsap.to(cursor,{
        scale:1
    })
  })



