"use strict";

//board
var blockSize = 25;
var rows = 15;
var cols = 30;
var board;
var context; 

//snake head (Start Position)
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var velocityX = 0;
var velocityY = 0;
var snakeBody = [];
var foodX;
var foodY;
var gameOver = false;


//  ========== RESTARTING & STARTING ========== 
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
    startButton.textContent = "Restart";
});
var begin = false;
function start(){
    begin = true;
    velocityX = 1;
    velocityY = 0;
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
    foodX;
    foodY;
    placeFood()
    gameOver = false;
}
//  ========== RESTARTING & STARTING ========== 


//  ========== Creating the board (canva) ========== 
window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 1000/10); //100 milliseconds
}
//  ========== Creating the board (canva) ========== 



function update() {
    if (gameOver) {
        return;
    }
    //  ========== Canva (Color & Size) ========== 
    context.fillStyle="black";  
    context.fillRect(0, 0, board.width, board.height);
    //  ========== Canva (Color & Size) ========== 


    //  ========== Water (Color & Size) ========== 
    context.fillStyle="blue";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    //  ========== Water (Color & size) ========== 


    //  ========== Snake (Drinking) ========== 
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }
    //  ========== Snake (Drinking) ========== 


    //  ========== Snake (adding to body) ========== 
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    //  ========== Snake (adding to body) ========== 


    //  ========== Snake (Color & Size) ========== 
    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    //  ========== Snake (Color & Size) ========== 


    //  ========== Game Over (Hit the edges) ========== 
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("Game Over");
    }
    //  ========== Game Over (Hit the edges) ========== 

    //  ========== Game Over (Eats itself) ========== 
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
    //  ========== Game Over (Eats itself) ========== 
}


//  ========== Movement (Keyboard) ========== 
function changeDirection(e) {
    if (begin){
        if (e.code === "KeyW" && velocityY != 1){
            velocityX = 0;
            velocityY = -1;
        }
        if (e.code === "KeyA" && velocityX != 1){
            velocityX = -1;
            velocityY = 0;
        }
        if (e.code === "KeyS" && velocityY != -1){
            velocityX = 0;
            velocityY = 1;
        }
        if (e.code === "KeyD" && velocityX != -1){
            velocityX = 1;
            velocityY = 0;
        }
    }
}
//  ========== Movement (Keyboard) ========== 

//  ========== Random placement of Water ========== 
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}
//  ========== Random placement of Water ========== 