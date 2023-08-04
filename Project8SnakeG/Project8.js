let direction = {x: 0, y: 0};
const foodSound = new Audio();
const gameOverSound = new Audio();
const moveSound = new Audio();
const musicSound = new Audio;
let speed = 9;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
food = {x:6, y:7}
let score = 0


//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if ((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    
}

function isCollide(snake){
    // if you bump into yourself
    for(let index =1; index< snakeArr.length; index++){
    if (snake[index].x === snake[0].x && snake[index].y === snake[0].y){
        return true;
    }
}
//if you bump into the wall
    if (snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
        return true
    }

}

function gameEngine(){
//Part1.Updating the snake array & food
if(isCollide(snakeArr)){
    // gameOverSound.play()
    // musicSound.pause()
    direction = {x:0, y:0}
    alert("Game over! Press Enter to play again.")
    snakeArr = [{x:13, y: 15}]
    // musicSound.play()
    score =0
}

//if you have eaten the food, increment the score and regenarate the food
if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
    // foodSound.play()
    score += 1
    scoreBox.innerHTML = "Score: " +score
    snakeArr.unshift({x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y})
    let a = 2
    let b = 16
    food = {x: Math.round(a+(b-a)* Math.random()), y: Math.round(a+(b-a)* Math.random())}
}

//Moving the Snake
for (let i  = snakeArr.length-2; i>=0 ; i --){
  snakeArr[i+1] = {...snakeArr[i]}
}

snakeArr[0].x += direction.x;
snakeArr[0].y += direction.y;

//Part2.Display the snake
board.innerHTML = "";
snakeArr.forEach((e, index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    
    if (index === 0){
        snakeElement.classList.add('head')
    }
    else{
        snakeElement.classList.add('snake')
    }
    board.appendChild(snakeElement)
})
//Display the food
foodElement = document.createElement('div');
foodElement.style.gridRowStart = food.y;
foodElement.style.gridColumnStart = food.x;
foodElement.classList.add('food');
board.appendChild(foodElement)
}








//Main logics

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    direction = {x: 0, y: 1} //start the game
    // moveSound();
    switch (e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            direction.x = 0 ;
            direction.y = -1;
            break;
            
        case "ArrowDown":
            console.log("ArrowDown")
            direction.x = 0;
            direction.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            direction.x = -1;
            direction.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight")
            direction.x = 1;
            direction.y = 0;
            break;
        default:
            break;

    }
})


