var Text = document.getElementById("text");
var start = false;
var chew = true;
var getwall = false;

var Wall0 = document.getElementById("w0");
Wall0.onmouseover = function() {
	if (start) {
	this.id = "hoverw0";
	Text.textContent = "you lose";
	getwall = true;
    }
    start = false;
}

Wall0.onmouseout = function() {
	this.id = "w0";
}

var Wall1 = document.getElementById("w1");
Wall1.onmouseover = function() {
	if (start) {
	getwall = true;
	this.id = "hoverw1";
	Text.textContent = "you lose";
    }
    start = false;
}

Wall1.onmouseout = function() {
	this.id = "w1";
}


var Wall2 = document.getElementById("w2");
Wall2.onmouseover = function() {
	if (start) {
	getwall = true;
	this.id = "hoverw2";
	Text.textContent = "you lose";
    }
    start = false;
}

Wall2.onmouseout = function() {
	this.id = "w2";
}

var Wall3 = document.getElementById("w3");
Wall3.onmouseover = function() {
	if (start) {
	getwall = true;
	this.id = "hoverw3";
	Text.textContent = "you lose";
	}
	start = false;
}

Wall3.onmouseout = function() {
	this.id = "w3";
}

var Wall4 = document.getElementById("w4");
Wall4.onmouseover = function() {
	if (start) {
	getwall = true;
	this.id = "hoverw4";
	Text.textContent = "you lose";
	}
	start = false;
}

Wall4.onmouseout = function() {
	this.id = "w4";
}

document.getElementById("p0").onmouseover = function() {
	chew = false;
}

s.onmouseover = function() {
	chew = true;
	start = true;
	Text.textContent = "start";
	getwall = false;
}

e.onmouseover = function() {
	if (start) {
		if (!getwall && !chew) {
			Text.textContent = "you win!";
			start = false;
		}
		if (chew) {
			Text.textContent = "Don't cheat!";
		}
	}
	start = false;
}