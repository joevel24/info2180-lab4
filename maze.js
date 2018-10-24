let boundary;
let condition = false;
let objective;
let testwin = false;
let leave;
let start;


window.onload = function() {
	_status = document.getElementById("status");
	objective = document.getElementById("end");
	objective.onmouseover = youWin;
	start = document.getElementById("start");
	leave = document.getElementById("maze");
	leave.onmouseleave = outside;
	start.onclick = restart;
	boundary = document.querySelectorAll(".boundary");
	for (var i = 0; i < boundary.length - 1; i++) {
		boundary[i].onmouseover = changeBoundary;
	}
}

/*function changeColor() {
  document.getElementById("boundary1").classList.add("youlose");
  document.getElementById("status").innerHTML = "You Lose!";
}*/

//changeColor();


function changeBoundary() {
	if(!testwin) {
		if(!condition) {
			condition = true;
	boundary = document.querySelectorAll(".boundary");
	_status.innerHTML = "You Lose!";
	for (var i = 0; i < boundary.length - 1; i++) {
		boundary[i].classList.add("youlose");
		}
		}
	}
	
}

//changeBoundary();

function youWin() {
	if(!condition) {
		testwin = true;
		_status.innerHTML = "You Win!";
	}
}

function restart() {
	condition = false;
	testwin = false;
	boundary = document.querySelectorAll(".boundary");
	for (var i = 0; i < boundary.length - 1; i++) {
		boundary[i].className = "boundary";
	}
	//document.location.href = "";
	
}

function outside() {
	if (!testwin) {
		changeBoundary();
	}
}