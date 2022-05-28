let direction = {x:0, y:0};
let foodSound = new Audio('food.mp3');
let gameOverSound = new Audio('move.mp3');
let moveSound = new Audio ('move.mp3');
let musicSound = new Audio('music.mp3');
let speed =2;
let lastPaintTime =0;


//game functions
function main(ctime){

    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed);
    console.log(ctime)
}

function gameEngine(){
    
}
