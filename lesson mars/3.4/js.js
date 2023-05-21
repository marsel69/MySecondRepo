var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("black");
colorCircles[7] = document.getElementById("brown");


var list=document.getElementById("list");
list.addEventListener("click", pickColor);

var targetColor="#f00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";



function pickColor(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="LI"){

		if (e.target.id=="red"){
			targetColor="#f00"
		}
		else if (e.target.id=="blue"){
			targetColor="#00f"
		}
		else if (e.target.id=="green"){
			targetColor="#0f0"
		}
		else if (e.target.id=="yellow"){
			targetColor="#ff0"
		}
		else if (e.target.id=="cyan"){
			targetColor="#0ff"
		}
		else if (e.target.id=="magenta"){
			targetColor="#f0f"
		}
		else if (e.target.id=="black"){
			targetColor="#000"
		}
		else if (e.target.id=="brown"){
			targetColor="#964b00"
		}
		for (var i = 0; i<=7; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "80px"
		e.target.style.width = "80px"
	}
}
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function drawOnCanvas(e){
	if (e.which==1){
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, 10, 0, Math.PI*2);
		canvasContext.fill();
	}
}