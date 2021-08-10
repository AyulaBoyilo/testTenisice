// Hero title random movement animation
let screenWidth = document.querySelector('body').offsetWidth;
let heroTitle;

if (screenWidth < 768) {
    heroTitle = gsap.timeline ()
    .to('.hero__title',{
        x: 'random(-20, 20, 5)',
        y: 'random(-20, 10, 3)',
        duration:1.5,
        ease:"power-in-out",
        repeat:-1,
        repeatRefresh:true
    })
} else if (screenWidth < 1024) {
    heroTitle = gsap.timeline ()
    .to('.hero__title',{
        x: 'random(-30, 30, 5)',
        y: 'random(-30, 10, 3)',
        duration:1.5,
        ease:"power3.inOut",
        repeat:-1,
        repeatRefresh:true
    })
} else {
    heroTitle = gsap.timeline ()
    .to('.hero__title',{
        x: 'random(-70, 70, 5)',
        y: 'random(-70, 20, 3)',
        duration:1.5,
        ease:"power-in-out",
        repeat:-1,
        repeatRefresh:true
    })
}

// Hero subtitle enter animation
let heroSubtitle = gsap.timeline ()
.from('.hero__subtitle',{
    x: -400,
    opacity: 0,
    skewX: 20,
    duration:1,
    delay: 2,
    ease:"elastic.out",
    stagger: 1
})

// Tenisice heading on scroll animation
let tenisiceHeading = gsap.from('.tenisice__heading',{
    scrollTrigger: {
        trigger: '.tenisice__heading',
        start: 'bottom 80%'
    },
    x: -400,
    opacity: 0,
    skewX: 20,
    duration:1,
    ease:"elastic.out",
    stagger: .5
})

// Tenisice image on scroll animation
gsap.from('.tenisice__img',{
    scrollTrigger: {
        trigger: '.tenisice__img',
        start: 'bottom 80%'
    },
    opacity: 0,
    duration:.5,
    delay: 1.5,
    ease:"none",
})

gsap.from('.tenisice__img',{
    scrollTrigger: {
        trigger: '.tenisice__img',
        start: 'bottom 75%'
    },
    y: -400,
    duration:1,
    delay: 1.5,
    ease:"bounce.out",
})

// Banner tenisica infinite jump animation
let jumpHeight = document.querySelector('.tenisice__hero').offsetHeight - ((.4 * screenWidth) * .56);
let jumpWidth = screenWidth + (.4 * screenWidth);

let tenisicaInfiniteVertical = gsap.timeline ({repeat:-1});
tenisicaInfiniteVertical.to('.tenisice__hero__tenisica',{
    y: jumpHeight,
    duration:1,
    ease:"power1.in",
})
tenisicaInfiniteVertical.to('.tenisice__hero__tenisica',{
    y: 0,
    duration:1,
    ease:"power1.out",
})
let tenisicaInfiniteHorizontal = gsap.timeline ()
.to('.tenisice__hero__tenisica',{
    x: jumpWidth,
    duration:7,
    ease:"none",
    repeat:-1,
})

// Ruksaci heading on scroll animation
let ruksaciHeading = gsap.from('.ruksaci__heading',{
    scrollTrigger: {
        trigger: '.ruksaci',
        start: 'top 80%'
    },
    x: 800,
    opacity: 0,
    skewX: 20,
    duration:1,
    ease:"elastic.out",
    stagger: .5
})

// Ruksaci image on scroll animation
gsap.from('.ruksaci__img',{
    scrollTrigger: {
        trigger: '.ruksaci',
        start: 'top 60%'
    },
    x: 600,
    opacity: 0,
    skewX: 20,
    duration:1,
    delay: 1,
    ease:"elastic.out"
})

// Footer heading infinite jump
let footerInfiniteVertical = gsap.timeline ({repeat:-1});
footerInfiniteVertical.to('.footer__heading',{
    y: .07*screenWidth,
    duration:1,
    ease:"power.inOut",
})
footerInfiniteVertical.to('.footer__heading',{
    y: 0,
    duration:1,
    ease:"power.inOut",
})

// Mobile carousel
if (screenWidth < 768) { // carousel works only on mobile
    
    let slides = document.querySelectorAll('.slide');
    let slides2 = document.querySelectorAll('.slide2');
    // let prevButton = document.querySelector('.proizvod__slider__navigation--left');
    // let nextButton = document.querySelector('.proizvod__slider__navigation--right');

    let slideWidth = slides[0].offsetWidth;

    // initial slides position
    slides[0].style.left = '0px';
    slides[1].style.left = slides[1].offsetWidth + 'px';
    slides[2].style.left = 2 * slides[2].offsetWidth + 'px';

    slides2[0].style.left = '0px';
    slides2[1].style.left = slides[1].offsetWidth + 'px';
    slides2[2].style.left = 2 * slides[2].offsetWidth + 'px';

    setInterval(animateSlides, 3000, -1);

    function animateSlides(direction){
        slides.forEach(slide => {
            slide.style.zIndex = 1;
            if (parseFloat(slide.style.left) < 0) {
                slide.style.zIndex = 0;
                slide.style.left = 2 * slideWidth + 'px';
            }
            slide.style.left = parseFloat(slide.style.left) + (slideWidth * direction) + 'px';
        });
    }

    setInterval(animateSlides2, 3000, -1);

    function animateSlides2(direction){
        slides2.forEach(slide => {
            slide.style.zIndex = 1;
            if (parseFloat(slide.style.left) < 0) {
                slide.style.zIndex = 0;
                slide.style.left = 2 * slideWidth + 'px';
            }
            slide.style.left = parseFloat(slide.style.left) + (slideWidth * direction) + 'px';
        });
    }

    // nextButton.addEventListener('click', clickRight);

    // function clickRight(){
    //     slides.forEach(slide => {
    //         slide.style.zIndex = 1;
    //         if (parseFloat(slide.style.left) > slideWidth) {
    //             slide.style.zIndex = 0;
    //             slide.style.left = '0px';
    //         }
    //         slide.style.left = parseFloat(slide.style.left) + slideWidth + 'px';
    //     });
    // }
}