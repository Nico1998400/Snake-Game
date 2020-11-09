//Making random grid loaction. 

const GRID_SIZE = 21 // Making the grid seize to 21.

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1, // giving us a number between 0 and 20 +1.
        y: Math.floor(Math.random() * GRID_SIZE) + 1 // giving us a number between 0 and 20 +1.
    }
}


// If we are anyware outisde the Grid it will return True or otherwise it will return false.
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE || // Making the position greater then our grid SEIZE(21) or less then 1 wich is our minimun grid seize
        position.y < 1 || position.y > GRID_SIZE  // Making the position greater then our grid SEIZE(21) or less then 1 wich is our minimun grid seize
    )
}