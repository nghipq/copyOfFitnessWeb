var img = document.getElementById("img");
var imgList = [
    "./brand1.png", 
    "./brand2.png", 
    "./brand3.png",
    "./brand4.png",
    "./brand5.png",
];
var result = imgList.concat(imgList[0]);

function change() {
    setInterval(function() {
        result.shift();
        result = result.concat(result[0]);
        list(result);
    },3000);
    return result;
}

change()

function list(arr) {
    content = arr.map(function(item) {
        return "<div class='brand-square'><img src ='" + item + "'></div>"
    });
    img.innerHTML = content
}

// list(result)