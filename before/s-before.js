var sPlace = document.getElementById("search")
var sClose = document.getElementById("s-close");
var item1 = document.getElementById("overlay1");
var item2 = document.getElementById("item1");

sClose.addEventListener("click", close1);
sPlace.addEventListener("click", open1);

function close1() {
   item1.classList.replace("s-open", "none");  
}

function open1() {
    item1.classList.replace("none", "s-open")
}