var button = document.querySelector("button");
var body = document.querySelector("body");
var color = true;

button.addEventListener("click", changeColor);

function changeColor() {
    if (color) {
        body.style.backgroundColor = "purple";
    } else {
        body.style.backgroundColor = "white";
    }
    color = !color
}