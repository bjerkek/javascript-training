// Object creation lesson 1
// Prototype

function talk () {
  console.log(this.sound)
}

let animal = {
  talk
}

let cat = {
  sound: 'meow!'
}

let dog = {
  sound: 'woof!'
}

Object.setPrototypeOf(cat, animal)
cat.talk()

Object.setPrototypeOf(dog, animal)
dog.talk()

let prarieDog = {
  howl: function () {
    console.log(this.sound.toUpperCase())
  }
}

Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()
