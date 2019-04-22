var index = 0;
changeClass();

function changeClass() {
    var i;
    var slides = document.getElementsByClassName("story");
    var buttons = document.getElementsByClassName("button");
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" screen", "")  
    }
    index++;
    if (index > slides.length) {index = 1}    
    for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(" active", "");
    }
    slides[index-1].className += " screen"  
    buttons[index-1].className += " active";
    setTimeout(changeClass, 6000);
}

