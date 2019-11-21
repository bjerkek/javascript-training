let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer (seconds) {
  // Clear any existing timers
  clearInterval(countdown)

  const now = Date.now()
  const then = now + (seconds * 1000)
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)

    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft (seconds) {
  
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const display = `${mins}:${secs < 10 ? '0' : ''}${secs}`

  timerDisplay.textContent = display
  document.title = display
}

function displayEndTime (timestamp) {
  const end = new Date(timestamp)
  const hours = end.getHours()
  const minutes = end.getMinutes()
  endTime.textContent = `Be back at ${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer () {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

function startCustomTimer (e) {
  e.preventDefault()
  console.log(e)
  console.log(e.target.minutes.value)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault()
  timer(this.minutes.value * 60)
})