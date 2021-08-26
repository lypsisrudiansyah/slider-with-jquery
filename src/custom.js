var mainslider;
var sliding = false;

$(document).ready(function() {
    var options = {
        slides: '.slide', // Nama slide di slidecontainer
        swipe: false, // handler swipe, wajib include touchSwipe
        transition: "slide", // Transisi slide => slide dan fade
        slideTracker: false, // menambah pelacakan slide
        slideTrackerID: 'slideposition', // Nama pelacakan slide
        slideOnInterval: true, // Interval slide
        interval: 10000, // Interval slide, jika slideOnInterval is enabled/true
        animateDuration: 1200, // Durasi animasi
        animationEasing: 'easeInBack', // Nilai yang diterima: linear ease in out in-out snap easeOutCubic
                                // easeInOutCubic dll
        pauseOnHover: false, // Pause jika user mengarahkan cursor ke slide container
        magneticSwipe: true, // efek menmpel pada slide ketika di swipping/dragging
        neverEnding: false, // aktifkan untuk membuat efek yang tidak pernah berhenti / neverending
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data('simpleslider')

    $(".slider").on("beforeSliding", function (event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + prevSlide + "'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").hide();
        sliding = true;
    });

    $(".slider").on("afterSliding", function (event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").fadeIn();
        sliding = false;
    });

    /* Control the slider by scrolling */
    $(window).bind("mousewheel", function (event) {
        if (!sliding) {
            if (event.originalEvent.deltaY > 0) {
                mainslider.nextSlide();
                // mainslider.newSlide();
            } else {
                mainslider.prevSlide();
            }
        }
        if (event.originalEvent.deltaY > 0) {
            mainslider.nextSlide();
            // mainslider.newSlide();
        } else {
            mainslider.prevSlide();
        }
    });

    $(".slide#satu").backstretch("./images/image1.jpg");
    $(".slide#dua").backstretch("./images/image2.jpg");
    $(".slide#tiga").backstretch("./images/image3.jpg");
    $(".slide#empat").backstretch("./images/image4.jpg");
    $(".slide#lima").backstretch("./images/image5.jpg");
    $(".slide#enam").backstretch("./images/image6.jpg");

    $(".slide .backstretch img").on("dragstart", function (event) {
        event.preventDefault();
    });
    $(".slidecontent").each(function () {
        console.log(-$(this).height());
        $(this).css('margin-top', (-$(this).height()) /2);
    });
    
});