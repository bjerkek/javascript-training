// ES5
function SmithPerson (firstName, lastName, nationality) {
  
  lastName === undefined ? lastName = 'Smith' : lastName = lastName
  nationality === undefined ? nationality = 'Norwegian' : nationality = nationality
  
  this.firstName = firstName
  this.lastName = lastName
  this.nationality = nationality
}

var john = new SmithPerson('John')
console.log(john)

// ES6
function SmithersPerson (firstName, lastName = 'Smithers', nationality = 'Norwegian') {
  this.firstName = firstName
  this.lastName = lastName
  this.nationality = nationality
}

var peter = new SmithersPerson('Peter')
console.log(peter)