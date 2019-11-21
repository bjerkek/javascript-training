// Function constructor
var john = {
  name: 'John',
  yearOfBirth: 1977,
  job: 'teacher'
}

var Person = function (name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

// We put the function in the prototyp and not in the constructor
// This way the objects inherit the function instead of copying it,
// creating a lot of duplicate code
Person.prototype.calculateAge = function () {
  console.log(2019 - this.yearOfBirth)
}

// Not very common, but you could also add properties
// to the protorype, not just functions
Person.prototype.lastName = 'Smith'

var mike = new Person('mike', 1978, 'cook')
mike.calculateAge()

console.log(mike.lastName)                     // Smith
console.log(mike.hasOwnProperty('job'))       // true
console.log(mike.hasOwnProperty('lastName'))  // false (inherited through the prototype)
console.log(mike instanceof Person)           // true