var Time = null;
var size = 60;
var second;
var seed;
var stop = true;

document.getElementById("t").onfocus = this.blur();
document.getElementById("s").onfocus = this.blur();

function minus() {
	document.getElementById("t").value = second;
	if (second < 0) {
		over();
	}
	second--;
}

document.getElementById("startButton").onclick = function() {
	if (stop) {
	if (Time) clearInterval(Time);
	second = 30;
	document.getElementById("t").value = second;
	second--;
	seed = Math.floor(Math.random()*(size - 1));
	document.getElementById("game").textContent = "Playing";
	document.getElementById("s").value = 0;
	Time = setInterval(minus, 1000);
	document.getElementById(seed).checked = true;
	stop = false;
    } else {
    	over();
    }
}

function over() {
	stop = true;
	document.getElementById("t").value = 0;
	document.getElementById(seed).checked = false;
	clearInterval(Time);
	Time = null;
	alert("Game over\nyour score is:" + document.getElementById("s").value);
	document.getElementById("game").textContent = "Game over";
}

function clickRight() {
	if (!stop) {
	document.getElementById("s").value++;
	document.getElementById(seed).checked = false;
	var temp = seed;
	seed = Math.floor(Math.random()*size);
	if (seed == temp) seed = seed + 5;
	while (seed >= size) seed = seed - size;
    }
}

function clickWrong(i) {
	if (document.getElementById("s").value > 0 && !stop) {
		document.getElementById("s").value--;
	}
	document.getElementById(i).checked = false;
}

window.onload = function() {
	$('input[type="radio"]').click (function() {
		if (!stop) {
	        if (this.id==seed) {
	        	clickRight();
	        } else {
	        	clickWrong(this.id);
	        }
	        document.getElementById(seed).checked = true;
	    } else {
	    	this.checked = false;
	    }
		}
	);
}