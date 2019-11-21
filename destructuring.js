// ES5
var john = ['John', true]
var name = john[0]
var hasCat = john[1]
console.log({name, hasCat})

// ES6
const [city, year] = ['Oslo', 1977]
console.log({city, year})

const obj = {
  firstName: 'John',
  lastName: 'Smith'
}

const {firstName, lastName} = obj
console.log({firstName, lastName})

function calcAgeRetirement (year) {
  const age = new Date().getFullYear() - year
  return [age, 65 - age]
}

const [age, retirement] = calcAgeRetirement(1977)
console.log({age, retirement})