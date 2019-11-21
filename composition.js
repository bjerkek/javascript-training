// Composistion over inheritance
// Inheritance is when you design your types around what they are!
// Composition is when you design your types around what they do!

const barker = (state) => ({
  bark: () => console.log('Woof, I am ', state.name)
})

const driver = (state) => ({
  drive: () => {
    state.position = state.position + state.speed
    console.log('Position: ', state.position)
  }
})

barker({ name: 'karo' }).bark()
driver({ position: 10, speed: 10 }).drive()

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  }

  return Object.assign(
    {},
    barker(state),
    driver(state)
  )
}

murderRobotDog('sniffles').bark()
