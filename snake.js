import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 10 // How many times the snake moves pers second = Controlig how fast the game should be 
const snakeBody = [{ x: 11, y: 11 }] // Using grid to draw Snake by X and Y angle , Starting in the middle becouse 11 x and 11 y.
let newSegments = 0 // Setting snake to default not growing.

// Exporting updated Snake and Updateing Snake, Based on Speed.
export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] } // The snakes body move torwords its parent child (the head).
    }

   snakeBody[0].x += inputDirection.x //updating the head based on were we are moving.
   snakeBody[0].y += inputDirection.y
}

// Exporting drawing Snake and Drawin Snake, Based on Speed.
export function draw(gameBoard) {
    // Looping thru Each segment with ForEach.
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div') // going into our x / y cordinate and setting it with grid.
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake') // giving Snake a class.
        gameBoard.appendChild(snakeElement)
    })
}

//Expanding snake when eating food.
export function expandSnake(amount) {
    newSegments += amount
}

//Determs if this postions is on our snake.
export function onSnake(postition, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => { // looping tru the segments.
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, postition)
    })
}

// First Element in our array is alwas going to be our head.
export function getSnakeHead() {
    return snakeBody[0] 
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}


// Take new Segments and add them to the bottom of our Snake.
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) // Taking the last part of ur snake and duplication it.
    }

    newSegments = 0
}

let score = 0;
const userScore = document.getElementById("user-score")
 function game() {
     score++;
     userScore.innerHTML = score;
     console.log("score"); }