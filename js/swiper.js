

// SWIPER - 1
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 3,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        480: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});



// SWIPER - 2
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    speed: 1000,

    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

});



// SWIPER - 3
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,

    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

});