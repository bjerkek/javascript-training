// Select the elements on the page (canvas, shake button)

const canvas = document.getElementById('etch-a-sketch')
const ctx = canvas.getContext('2d')
const shakeButton = document.querySelector('.shake')
const MOVE_AMOUNT = 10

// Setup our canvas for drawing
const { width, height } = canvas

// Create randown x and y starting point
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = MOVE_AMOUNT

let hue = 0
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.beginPath() // Start the drawing
ctx.moveTo(x, y)
ctx.lineTo(x, y)
ctx.stroke()

// Write a draw function
function draw(options) {
  hue++
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  ctx.beginPath()
  ctx.moveTo(x, y)

  // Move x and y 

  switch (options.key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT
      break
    case 'ArrowDown':
      y += MOVE_AMOUNT
      break
    case 'ArrowLeft':
      x -= MOVE_AMOUNT
      break
    case 'ArrowRight':
      x += MOVE_AMOUNT
      break
    default:
      break
  }
 
  
  ctx.lineTo(x, y)
  ctx.stroke()
}

// Write a handler for the keys
function handleKey(e) {
  if(e.key.includes('Arrow')) {
    e.preventDefault()
    draw({ key: e.key })
  }

}

// Clear / Shake function
function clearCanvas() {
  canvas.classList.add('shake')
  ctx.clearRect(0, 0, width, height)
  canvas.addEventListener('animationend', () => canvas.classList.remove('shake'), { once: true })
}

// Listen for row keys
window.addEventListener('keydown', handleKey)
shakeButton.addEventListener('click', clearCanvas)