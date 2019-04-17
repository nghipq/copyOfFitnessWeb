var img = document.getElementById("img");
var imgList = [
    "./image/brand1.png", 
    "./image/brand2.png", 
    "./image/brand3.png",
    "./image/brand4.png",
    "./image/brand5.png",
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