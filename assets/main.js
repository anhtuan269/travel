$(document).ready(function () {
    $(".slider").owlCarousel({
        nav: false,
        loop: true,
        dotsEach: 3,
        dots: false,
        center:true,
        responsive: {
            1280: {
                items: 3,
            },
            768: {
                items: 2,

            },
            480: {
                items: 1,

            },
            0: {
                items: 1,
            }
        }
    });
});