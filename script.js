let ball = document.querySelector(".ball");
let board = document.querySelector(".board");
let boardBound = board.getBoundingClientRect();
let leftPaddle = document.querySelector(".left");
let rightPaddle = document.querySelector(".right");
let y=true;
let x=true;
let leftPlayerLives = 3;
let rightPlayerLives = 3;



//user input listen
document.addEventListener("keydown",(e => {
   // console.log(e);
if(e.key == "w"){
movePaddle(leftPaddle,-window.innerHeight*0.05);
}
else if(e.key == "s"){
movePaddle(leftPaddle,+window.innerHeight*0.05);
}
else if(e.key == "ArrowUp"){
movePaddle(rightPaddle,-window.innerHeight*0.05);
}
else if(e.key == "ArrowDown"){
movePaddle(rightPaddle,+window.innerHeight*0.05);
}
}))
function setcolor(idx) {
    let allIcons = document.querySelectorAll(".fas.fa-circle");
    allIcons[idx].style.color = "#ff6348";
}




function movePaddle(cPaddle,change) {
    let cPaddleBound = cPaddle.getBoundingClientRect();
    if(cPaddleBound.top + change >= boardBound.top && cPaddleBound.bottom + change <= boardBound.bottom){
    cPaddle.style.top = cPaddleBound.top + change + "px";}
}




function moveball () {
let ballCord = ball.getBoundingClientRect();
let ballTop = ballCord.top;
let ballLeft = ballCord.left;
let ballBottom = ballCord.bottom;
let ballRight = ballCord.right;
let leftPaddleBound = leftPaddle.getBoundingClientRect();
let rightPaddleBound = rightPaddle.getBoundingClientRect();
//console.log(ballTop,ballLeft,ballBottom,ballRight);
// is ball in boundary
// checking vertical bound
let hasLeftTouched = ballLeft <= leftPaddleBound.left;
let hasRightTouched = ballRight >= rightPaddleBound.right;
if (hasLeftTouched || hasRightTouched) {
    if (hasLeftTouched) {
        leftPlayerLives--;
        setcolor(leftPlayerLives);
        if(leftPlayerLives == 0){
            alert("game over right sided player won the game");
            document.location.reload();
        }
        else{
          return  resetgame();
        }
    } else {
        rightPlayerLives--;
        setcolor(3+rightPlayerLives);
        if (rightPlayerLives == 0) {
            alert("game over left sided player won");
            document.location.reload();
        } else {
          return  resetgame();
        }
    }
    function resetgame() {
        ball.style.top = window.innerHeight*0.40 + "px";
        ball.style.left = window.innerWidth*0.40 + "px";
requestAnimationFrame(moveball);
    }
    
}
if (ballTop <= boardBound.top || ballBottom >= boardBound.bottom) {
 //vertically outside 
 y=!y;  
}
// checking horizontal bound
if (ballLeft <= boardBound.left || ballRight >= boardBound.right) {
    //horizontally outside
    x=!x;
}
//let leftPaddleBound = leftPaddle.getBoundingClientRect();
//let rightPaddleBound = rightPaddle.getBoundingClientRect();
if(ballLeft <= leftPaddleBound.right && ballRight >=leftPaddleBound.left && ballTop + 30 >= leftPaddleBound.top
    && ballBottom - 30 <= leftPaddleBound.bottom){
   x =! x;
}
if (ballRight >= rightPaddleBound.left && ballLeft <= rightPaddleBound.right && ballTop + 30 >= rightPaddleBound.top
    && ballBottom - 30 <= rightPaddleBound.bottom) {
    x =! x;
}
//console.log(y,x)
ball.style.top = y==true? ballTop + 5 + "px": ballTop - 5 + "px";
ball.style.left = x==true? ballLeft + 4 + "px": ballLeft - 4 + "px";
requestAnimationFrame(moveball);
    
}
requestAnimationFrame(moveball);