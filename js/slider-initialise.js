$(function() {
    if ($(".swiper-container").length) {
        var swiper1 = new Swiper (".swiper1", {
            speed: 300,
            spaceBetween: 10,
            slidesPerView: 'auto',
            watchSlidesProgress: true,
            watchSlidesVisibility: true
        });

        var swiper2 = new Swiper (".swiper2", {
            speed: 300,
            spaceBetween: 10,
            slidesPerView: 'auto',
            watchSlidesProgress: true,
            watchSlidesVisibility: true
        });

        var swiper3 = new Swiper (".swiper3", {
            speed: 300,
            spaceBetween: 10,
            slidesPerView: 'auto',
            watchSlidesProgress: true,
            watchSlidesVisibility: true
        });
    }

});