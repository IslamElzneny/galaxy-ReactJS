
var currentSlide = 0,
    currentActive = 0,
    testimSpeed = 5000
    ;


function playSlide(slide) {
    if (document.querySelector(".container_section_testimonial")){
        var testimDots = document.querySelectorAll("#testim-dots li"),
        testimContent = document.querySelectorAll("#testim-content>div");
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    }
}

setInterval(function () {
    playSlide(currentSlide += 1);
}, testimSpeed)


