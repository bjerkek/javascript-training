// Object creation lesson 3
// Exploring Object.create
// What, Why, How

// Object.create is a static method on the Object prototype that:
// "Creates a new Object with the prototype set to a certain object."

const cat = {
  init: function (sound) {
    this.sound = sound
  },
  makeSound: function () {
    console.log(this.sound)
  },
  makeNoice: () => {
    console.log(this.sound)
  }
}

// Reimplementing Object.create
function objectCreate (proto) {
  const obj = {}
  Object.setPrototypeOf(obj, proto)
  return obj
}

const mark = Object.create(cat)
mark.sound = 'meow'
mark.makeSound()

// makeNoice logs out undefined because its an arrow function, but I dont know why?
const waffles = Object.create(cat)
waffles.init('hrhrhrhrh')
waffles.makeNoice()

console.log('Is Mark a cat? ', cat.isPrototypeOf(mark))

const steven = objectCreate(cat)
steven.sound = 'kurr kurr kurr'
steven.makeSound()
