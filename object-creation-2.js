// Object creation lesson 2
// New applied to functions
// Recreating the new keyword

function Animal (sound) {
  this.sound = sound
}

Animal.prototype.talk = function () {
  console.log('I say : ', this.sound)
}

var dog = new Animal('woof')

dog.talk()

// What happens when we call new Person?
// 1. It creates a new object. Just a plain object, no properties, no nothing
// 2. It sets the prototype. It will then check that objects prototype and set the new object to that prototype/object
// 3. It executes the contsructor with this. It will then call the function Person, but with the new object it created as 'this'
// 4. It then returns the new object

// Now we are going to pretend that the new keyword do not exist
// and build the function itself

function Person (saying) {
  this.saying = saying
}

Person.prototype.talk = function () {
  console.log('I say : ', this.saying)
}

function spawn (constructor, saying) {
  var obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  // var argsArray = Array.from(arguments)                // ECMA 6
  var argsArray = Array.prototype.slice.apply(arguments)  // ECMA 5
  constructor.apply(obj, argsArray.slice(1))              // ECMA 5

  return obj
}

var crockford = spawn(Person, 'SEMICOLON!!!!!1on1')
crockford.talk()
