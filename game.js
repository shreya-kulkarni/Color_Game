var numSquares = 4;
var colors = [];
var pickedColor;
var colorDisplay=document.querySelector("#color_display");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");
var m=0;
var count=0;
var temp=0;
var r=0;
var g=256;
var b=256;
var flag1=0;



init();

function init() {
	//colorDisplay.textContent = pickedColor;
	changeheading(pickedColor);
	setupSquares();
	setupMode();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			//alert(clickedColor);
			if(clickedColor === pickedColor) {
				flag1++;
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				if(flag1==6)
				{
                    colorDisplay.textContent="WIN!!!!!!  ";
                    flag1=0;
                    numSquares=4;
				}
				changeColors(pickedColor);
			}
			else {
				this.style.backgroundColor = 'white';
				messageDisplay.textContent = "try again";
			}
		});
	}
}

function setupMode() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Level1") {
				numSquares = 4;
				flag1=0;
			}
			else if (this.textContent === "Level2" && flag1==1) {
				numSquares = 8;
				
			}
			else if (this.textContent === "Level3" && flag1==2) {
				numSquares = 12;
				
			}
			else if (this.textContent === "Level4" && flag1==3) {
				
				numSquares = 16;
			}
			else if (this.textContent === "Level5" && flag1==4) {
                
				numSquares = 20;
			}
			else if(this.textContent === "Level6" && flag1==5)
			{
				
				numSquares = 24;
			}
			
			reset();
		});
	}
}

function reset() {
	colors = genRandomColors(numSquares);
	pickedColor = chooseColor();
	changeheading(pickedColor);

	//colorDisplay.textContent = pickedColor;
	//h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}
function changeheading(color) {
	//for(var i = 0; i < squares.length; i++) {
		//squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	//}
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function chooseColor() {
var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num) {
	var arr = [];
	r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

    
function makeColor() {
	var max=Math.floor(Math.random() * 100);
	var step = (max / (75));
	return "rgb(" + parseInt(r*step) + ", " + parseInt(g*step) + ", " + parseInt(b*step)+ ")"; 
}




