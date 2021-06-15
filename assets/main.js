$(document).ready(function () {
    $(".slider").owlCarousel({
        nav: false,
        loop: true,
        dotsEach: 3,
        dots: false,
        center: true,
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

$(document).ready(function () {
    $(".drop-down").click(function() {
        $('.drop-down').toggleClass('active')
    })

    $(".account").click(function() {
        $('.account').toggleClass('active')
    })


    $("#tab1").click(function () {

        $("#content-1").addClass("show");
        $("#content-1").removeClass("hide");

        $("#content-2").addClass("hide");
        $("#content-3").addClass("hide");
        $("#content-4").addClass("hide");
        $("#content-5").addClass("hide");

        $("#content-2").removeClass("show");
        $("#content-3").removeClass("show");
        $("#content-4").removeClass("show");
        $("#content-5").removeClass("show");

        $("#tab1").addClass("active")
        $("#tab2").removeClass("active")
        $("#tab3").removeClass("active")
        $("#tab4").removeClass("active")
        $("#tab5").removeClass("active")
    })

    $("#tab2").click(
        function () {
            $("#content-2").removeClass("hide");
            $("#content-2").addClass("show");

            $("#content-1").addClass("hide");
            $("#content-3").addClass("hide");
            $("#content-4").addClass("hide");

            $("#content-5").removeClass("show");
            $("#content-1").removeClass("show");
            $("#content-3").removeClass("show");
            $("#content-4").removeClass("show");
            $("#content-5").removeClass("show");

            $("#tab2").addClass("active")
            $("#tab1").removeClass("active")
            $("#tab3").removeClass("active")
            $("#tab4").removeClass("active")
            $("#tab5").removeClass("active")
        }
    )

    $("#tab3").click(
        function () {
            $("#content-3").addClass("show");
            $("#content-3").removeClass("hide");

            $("#content-2").addClass("hide");
            $("#content-1").addClass("hide");
            $("#content-4").addClass("hide");
            $("#content-5").addClass("hide");
            $("#content-2").removeClass("show");
            $("#content-1").removeClass("show");
            $("#content-4").removeClass("show");
            $("#content-5").removeClass("show");

            $("#tab3").addClass("active")
            $("#tab2").removeClass("active")
            $("#tab1").removeClass("active")
            $("#tab4").removeClass("active")
            $("#tab5").removeClass("active")
        }
    )
    $("#tab4").click(
        function () {
            $("#content-4").addClass("show");
            $("#content-4").removeClass("hide");

            $("#content-2").addClass("hide");
            $("#content-3").addClass("hide");
            $("#content-1").addClass("hide");
            $("#content-5").addClass("hide");
            $("#content-5").removeClass("show");
            $("#content-2").removeClass("show");
            $("#content-3").removeClass("show");
            $("#content-1").removeClass("show");
            $("#content-5").removeClass("show");

            $("#tab4").addClass("active")
            $("#tab2").removeClass("active")
            $("#tab3").removeClass("active")
            $("#tab5").removeClass("active")
            $("#tab1").removeClass("active")
        }
    )
    $("#tab5").click(
        function () {
            $("#content-5").addClass("show");
            $("#content-5").removeClass("hide");

            $("#content-2").addClass("hide");
            $("#content-3").addClass("hide");
            $("#content-4").addClass("hide");
            $("#content-1").addClass("hide");
            $("#content-2").removeClass("show");
            $("#content-3").removeClass("show");
            $("#content-4").removeClass("show");
            $("#content-1").removeClass("show");

            $("#tab5").addClass("active")
            $("#tab2").removeClass("active")
            $("#tab3").removeClass("active")
            $("#tab4").removeClass("active")
            $("#tab1").removeClass("active")
        })
});
