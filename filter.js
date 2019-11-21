/*
In functional programming functions are values.
This example show how to use a higher-order-function as filter,
and how to divide the solution into seperate parts.
https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
*/

var animals = [
  { name: 'Flyffy', species: 'dog' },
  { name: 'Peter', species: 'cat' },
  { name: 'John', species: 'frog' },
  { name: 'Sally', species: 'dog' },
  { name: 'Merlin', species: 'cat' },
  { name: 'Tracy', species: 'dog' }
]

var isDog = function (animal) {
  return animal.species === 'dog'
}

var dogs = animals.filter(isDog)
console.log('dogs: ', dogs)

// Everything on one line, but we are missing the reusable code in isDog
var cats = animals.filter((animal) =>
  animal.species === 'cat'
)
console.log('cats: ', cats)
