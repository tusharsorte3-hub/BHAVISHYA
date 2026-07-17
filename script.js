let image = document.getElementById("graphic");

let graphics = [
    "images/logo.png",
    "images/background.jpg"
];

let i = 0;

function changeGraphic(){

    i++;

    if(i>=graphics.length)
        i=0;

    image.src = graphics[i];

}
