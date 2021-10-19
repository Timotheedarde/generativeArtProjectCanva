let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

//Creer Rectangle plein
ctx.fillRect(100,100,100,50);

//dessiner forme
ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(400,300);
ctx.stroke();

//dessiner cercle
ctx.beginPath();
ctx.arc(75,75,50,0,2*Math.PI);
ctx.fillStyle = "red";
ctx.strokeStyle ="Black";
ctx.lineWidth = 5;
ctx.fill(),
ctx.stroke();

