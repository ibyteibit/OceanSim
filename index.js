var water_slider = document.getElementById('sealevel_slider');
var pH_slider = document.getElementById('pH_slider');
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext("2d");

waterColor = "#0077be";

ctx.strokeStyle = "white";
ctx.fillStyle = waterColor;

var pH_value = 7;

var rectx = 0;
var recty = 90;
ctx.fillRect(0, 90, window.innerWidth, 200);
ctx.strokeRect(-10, 90, window.innerWidth, 200);

water_slider.oninput = function () {
    console.log(water_slider.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 90 + (100 - water_slider.value - 50), window.innerWidth, 200);
    ctx.strokeRect(-10, 90 + (100 - water_slider.value - 50), window.innerWidth, 200);
}

pH_slider.oninput = function () {
    var pH_value = pH_slider.value / 100;
    console.log(pH_value);
}
