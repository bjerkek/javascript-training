
/*
MAP
https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2
*/

var animals = [
  { name: 'Flyffy', species: 'dog' },
  { name: 'Peter', species: 'cat' },
  { name: 'John', species: 'frog' },
  { name: 'Sally', species: 'dog' },
  { name: 'Merlin', species: 'cat' },
  { name: 'Tracy', species: 'dog' }
]

// Old way, using for loop
let oldNames = []
for (let i = 0; i < animals.length; i++) {
  oldNames.push(animals[i].name)
}
console.log(oldNames)

// New way, using map
let newNames = animals.map(function (animal) {
  return animal.name
})
console.log(newNames)

// Simplified using map and arrow function
let names = animals.map((x) =>
  x.name
)
console.log(names)
