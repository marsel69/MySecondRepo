var h1 = 300;
var h2 = 300;
var column1 = document.getElementById('column1');
var column2 = document.getElementById('column2');
var winnerBlock = document.getElementById('winnerBlock');
document.addEventListener("keyup",rise);

function rise(event){
	console.log(event.keyCode)

	if (event.keyCode==32)
	{
		h1+=10;
		column1.style.height =h1+"px";
	}
	else if (event.keyCode==13){
		h2+=10;
		column2.style.height =h2+"px";

	}

	if (h1>550){
		document.addEventListener("keyup", rise);
		winnerBlock.style.display="inline";
		winnerBlock.style.left="50px";
		winnerBlock.innerHTML="Blue wins!";
	}
	else if (h2>550){
		document.addEventListener("keyup", rise);
		winnerBlock.style.display="inline";
		winnerBlock.style.left="200px";
		winnerBlock.innerHTML="Red wins!";
	}
}
function newgame(){
	document.addEventListener("keyup",rise);
	 h1 = 300;
    column1.style.height =h1+"px";
	 h2 = 300;
	column2.style.height =h2+"px";
	winnerBlock.innerHTML="";
	winnerBlock.style.display="none";
}
