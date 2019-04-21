var slideIndex = 0;
changeSlide(slideIndex);

function changeSlide(slideIndex) {
    var slides = document.getElementsByClassName("story")
    setInterval(function() {
        var i;
        slideIndex += 1;
        if(slideIndex > slides.length) {
            slideIndex = 1
        };
        slides[slideIndex - 1].classList.add("screen");
        i = slideIndex - 2;
        if(i < 0) {
            i = slides.length - 1
        }
        slides[i].classList.remove("screen")
    }, 6000)
}
