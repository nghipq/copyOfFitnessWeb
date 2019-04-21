var index = 0;
changeClass(index);

function changeClass(index) {
    var buttons = document.getElementsByClassName("button")
    setInterval(function() {
        var i;
        index += 1;
        if(index > buttons.length) {
            index = 1
        };
        buttons[index - 1].classList.add("active");
        i = index - 2;
        if(i < 0) {
            i = buttons.length - 1
        }
        buttons[i].classList.remove("active")
    }, 6000)
}

