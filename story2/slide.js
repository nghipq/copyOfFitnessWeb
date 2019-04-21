var index = 0;
changeClass(index);

function changeClass(index) {
    var buttons = document.getElementsByClassName("button");
    var slides = document.getElementsByClassName("story");
    setInterval(function() {
        var i;
        index += 1;
        if(index > buttons.length) {
            index = 1
        };
        buttons[index - 1].classList.add("active");
        slides[index - 1].classList.add("screen");
        i = index - 2;
        if(i < 0) {
            i = buttons.length - 1
        }
        buttons[i].classList.remove("active");
        slides[i].classList.remove("screen");
    }, 6000)
}

