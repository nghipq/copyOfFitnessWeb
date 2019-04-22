var img = document.getElementById("img");
var imgList = [
    "./image/brand1.png", 
    "./image/brand2.png", 
    "./image/brand3.png",
    "./image/brand4.png",
    "./image/brand5.png",
];
var imgResult = imgList.concat(imgList[0]);

function imgChange() {
    setInterval(function() {
        imgResult.shift();
        imgResult = imgResult.concat(imgResult[0]);
        list(imgResult);
    },3000);
    return imgResult;
}

imgChange()

function list(arr) {
    imgContent = arr.map(function(item) {
        return "<div class='brand-square'><img src ='" + item + "'></div>"
    });
    img.innerHTML = imgContent;
}

// list(result)