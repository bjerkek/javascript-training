// Object creation lesson 3
// Class keyword

class Mammal {
  constructor (sound) {
    this.sound = sound
  }

  talk () {
    return this.sound
  }

  talkAgain = () => this.sound
}

class Dog extends Mammal {
  constructor () {
    super('wofferly')
  }
}

let fluffykins = new Mammal('woof')
console.log(typeof fluffykins)
console.log(fluffykins.sound)
console.log(fluffykins.talk())
console.log(fluffykins.talkAgain())

let peter = new Dog()
console.log(peter.talk())


