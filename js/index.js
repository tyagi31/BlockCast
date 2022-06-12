let direction = {x:0, y:0};
let foodSound = new Audio('food.mp3');
let gameOverSound = new Audio('move.mp3');
let moveSound = new Audio ('move.mp3');
let musicSound = new Audio('music.mp3');
let speed =2;
let lastPaintTime =0;
let snakeArr = [
    {x:13 , y: 15}
]


//game functions
function main(ctime){

    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
  
}

function gameEngine(){
    board  .innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement);
        
        
    })
}
