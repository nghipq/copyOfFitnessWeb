var input = document.getElementById("input");

input.addEventListener("focus", returnValue);

function returnValue() {
    input.value = "";
    return input.value;
}