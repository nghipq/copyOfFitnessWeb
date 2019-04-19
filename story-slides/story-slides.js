var div = document.getElementById("story");
var sList = [
    {
        id: 1,
        name: "stile mark",
        img: "./image/testimonial-profile-1.png",
        job: "yoga trainer",
        para: "World is committed to making participa in the event that rassment free experience for every, regardless level of experienc, gender identity.and expression orientation, disability by the personal appearance"
    },
    {
        id: 2,
        name: "david william",
        img: "./image/testimonial-profile-2.png",
        job: "yoga trainer",
        para: "World is committed to making participa in the event that rassment free experience for every, regardless level of experienc, gender identity.and expression orientation, disability by the personal appearance"
    },
    {
        id: 3,
        name: "william will",
        img: "./image/testimonial-profile-3.png",
        job: "body william trainer",
        para: "World is committed to making participa in the event that rassment free experience for every, regardless level of experienc, gender identity.and expression orientation, disability by the personal appearance"
    },
];
var result = sList.slice(0, 2);
var x = sList.length - 1;

function mkList(arr) {
    content = arr.map(function(item) {
        return "<div class='story'><p>"
         + item.para
         + "</p><div class='speaker'><div class='circle'><img src='"
         + item.img
         + "'></div><div class='info'><div class='name'>"
         + item.name
         + "</div><div class='job'>"
         + item.job
         + "</div></div></div></div>"
    });
    return div.innerHTML = content
}

// mkList(result)

function change() {
    setInterval(function() {
        result.shift();
        result = result.concat(sList[x]);
        mkList(result);
        if(x < 2) {
            x += 1;
            return x
        }else{
            x -= 2;
            return x
        } 
    }, 6000);
    return result
}

change();

