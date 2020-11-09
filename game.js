// Host this server by Web Server for Chrome
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js' // importing Data from other js file.
import { update as updateFood, draw as drawFood } from './food.js' // importing Data from other js file.
import { outsideGrid } from './grid.js'

let lastRenderTime = 0 // Sending last render time to currenttime.
let gameOver = false
const gameBoard = document.getElementById('game-board') // grabbing Gameboard.
//Game Loop, function that repeats itslef over and over again.
//Main function Loops over and over again with currentTime.

function main(currentTime) { // gameOver fucntion.
    if (gameOver) {
        return alert('Game over, Press restart to play again') // Alerting "you lose" if you die
    }

    window.requestAnimationFrame(main) // Requestin a Frame to animate my game with requestAnimationFrame.
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 //Converting to seconds.
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return // Calculate if we actually need to move. 
    lastRenderTime = currentTime // Last render to current.
    update() // Update all the logic for the game.
    draw() // drawing everything on the page from the update loop.
}

window.requestAnimationFrame(main)

// update snake and food. - Go to snake.js
function update() {
    updateSnake() // Taking Update Snake from Snake.js
    updateFood() // Taking Update Food from food.js
    checkDeath() // Going to display if you run into yourself or the wall.
}

// draw snake and food. - Go to 
function draw() {
    gameBoard.innerHTML = '' // Clear everything in our view by setting innerHTML to nothing.
    drawSnake(gameBoard) // Taking draw Snake from Snake.js
    drawFood(gameBoard) // Taking draw food from food.js
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() // if the head outide the map we loose or if it intersect itself.
}


