function changeColor (){
  document.getElementById("boundary1").classList.add("youlose");
}

changeColor();


function changeBoundary (){
var bound = document.querySelectorAll(".boundary"), i;

for (i = 0; i < bound.length; i++) {
  bound[i].classList.add("youlose");
}
}

changeBoundary();

//function showMsg(textVal)
//{
//document.getElementById("end").innerHTML=textVal;
//}
//function clearMsg()
//{
//document.getElementById("end").innerHTML="";
//}


function winAlert() {
    
    alert("You win!");
    
}

/*function startSquare (changeBoundary()) {
    
    if (changeBoundary() == "true"){
        
    }
}*/