var swiper = new Swiper(".mySwiper", {
    effect: "fade", 
    
    fadeEffect: {
        crossFade: true,
    },
    
    grabCursor: true, 
    
    navigation: {
        nextEl: ".ButtonNext", 
    },
    
    allowTouchMove: true, 
});