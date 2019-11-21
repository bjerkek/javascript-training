let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound)
  }
}

dog.talk() // "woof"

let talkFunction = dog.talk
talkFunction() // "undefined" -> this is here refering to talkFunction

let boundFunction = dog.talk.bind(dog)
boundFunction() // "woof" -> by using bind, this is here refering to dog

// ===================================
let talk = function () {
  console.log(this.sound)
}

let boromir = {
  speak: talk,
  sound: 'One does not simply walk into mordor!'
}

boromir.speak()                     // One does not simply walk into mordor!
talk()                              // undefined

let blabber = boromir.speak
blabber()                           // undefined

boromir.speak2 = talk.bind(boromir)
let blabber2 = boromir.speak2       // One does not simply walk into mordor!
blabber2()                          // undefined
