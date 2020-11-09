// all the input information. 

let InputDirection = { x: 0, y:0 } // Snake not moving by default for Inputdirection.
let lastInputDirection = { x: 0, y: 0 } // Snake not moving by default for LastInputdirection.

// modifying InputDirection everytime we click a key.
window.addEventListener('keydown', e=> { // e = event.
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break // Making so i cant go down when im moving up.
            InputDirection = { x: 0, y: -1 } // -1 Move us upwards.
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break // Making so i cant move up when im going down.
            InputDirection = { x: 0, y: 1 } // 1 Moves us downwords.
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break // Making so i cant go left when im moving right.
            InputDirection = { x: -1, y: 0 } // -1 Moves us right.
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break // Making so i cant move right when im moving left.
            InputDirection = { x: 1, y: 0 } // 1 Moves us left.
            break
    }
})

// Retruning our InputDirection.
export function getInputDirection() {
    lastInputDirection = InputDirection
    return InputDirection
}