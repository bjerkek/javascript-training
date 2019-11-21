/* eslint-env es6 */

// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
}

var john = new Person5('John', 1977, 'teacher')
john.calculateAge()


// Es6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calculateAge () {
    const age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }
}

const peter = new Person6('Peter', 1977, 'designer')
peter.calculateAge()