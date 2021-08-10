var conFusionCarousel = document.querySelector('#conFusionCarousel')
var carousel = new bootstrap.Carousel(conFusionCarousel, {
  interval: 2000,
  wrap: true
})

const carrouselBtn = document.getElementById('carouselButton');
 carrouselBtn.addEventListener('click', ()=>{    
    var btnIcon = carrouselBtn.children[0].classList    
    if(btnIcon.contains('fa-pause')){        
        carousel.pause()
        btnIcon.replace('fa-pause','fa-play')        
    }else if(btnIcon.contains('fa-play')){
        carousel.cycle()
        btnIcon.replace('fa-play','fa-pause')
    }
    console.log(bootstrap.Carousel.getInstance(conFusionCarousel))
 })