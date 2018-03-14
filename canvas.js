document.addEventListener("DOMContentLoaded", function () {
	var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
  }

})

document.addEventListener("DOMContentLoaded", function () {
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');

	ctx2.fillStyle = 'rgb(200, 0, 0)';
 	ctx2.fillRect(10, 10, 50, 50);
  }
)

// no one writes SVG; use illustrator program to convert