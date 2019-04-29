var close2 = document.getElementById("close2");
var overlay2 = document.getElementById("overlay2");
var button2 = document.getElementById("bag");
var close3 = document.getElementById("close3");
var overlay3 = document.getElementById("overlay3");
var button3 = document.getElementById("direction")

close2.addEventListener("click", () => {
    overlay2.classList.replace("flex", "none")
})

close3.addEventListener("click", () => {
    overlay3.classList.replace("flex", "none")
})

button3.addEventListener("click", () => {
    overlay3.classList.replace("none", "flex")
})

button2.addEventListener("click", () => {
    overlay2.classList.replace("none", "flex")
})



