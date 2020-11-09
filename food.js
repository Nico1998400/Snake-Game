import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition() // Snake not moving by default for let food, css grid always tart at 1.
const EXPANSION_RATE = 1 // How much the Snake grows when it eats.

// check if the Snake is on top of the food.
export function update() {
   if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition() // updates the food to new location when on top of it.
   } 
}

// Exporting drawing Snake and Drawin Snake, Based on Speed.
export function draw(gameBoard) {
    // Looping thru Each segment with ForEach.
    const foodElement = document.createElement('div') // going into our x / y cordinate and setting it with grid.
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food') // giving Snake a class.
    gameBoard.appendChild(foodElement)
}

// Getting Random food positions.
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition() // Getting a Random Value when inside the grid.
    }
    return newFoodPosition
}

