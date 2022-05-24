$(function () {
    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 651,
            settings: {
                dots: false
            }
        }, ]
    });
    $('.banner-slider').on('swipe', function (event, slick, direction) {
        $('.header__phone').toggleClass('change');
    });


    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L1 13" stroke="#747474" stroke-width="2" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#747474" stroke-width="2" stroke-linejoin="round"/></svg></button>',
        appendArrows: '.reviews-slider-buttons',
        appendDots: '.reviews-slider-nav',
        responsive: [{
            breakpoint: 993,
            settings: {
                arrows: false
            }
        }, ]
    });

})
const map = new mapgl.Map('map', {
    key: 'Your API access key',
    center: [55.31878, 25.23584],
    zoom: 13,
});
const marker = new mapgl.Marker(map, {
    coordinates: [55.31878, 25.23584],
});