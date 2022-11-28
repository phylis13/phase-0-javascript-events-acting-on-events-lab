// Your code here
function moveDodgerLeft(){
    let dodger = document.getElementById("dodger");
    let left = parseInt(dodger.style.left);
    left -= 20;
    dodger.style.left = left+"px";
 }
 
 function moveDodgerRight(){
     let dodger = document.getElementById("dodger");
     let left = parseInt(dodger.style.left);
     left += 20;
     dodger.style.left = left+"px";
 }
 
 console.log(moveDodgerLeft())