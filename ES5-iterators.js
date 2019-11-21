const myFavouriteAuthors = [
  'Neal Stephenson',
  'Arthur Clarke',
  'Isaac Asimov',
  'Robert Heinlein'
]

console.log('====================================')

// For loop
for (let i = 0; i < myFavouriteAuthors.length; i++) {
  console.log(myFavouriteAuthors[i])
}

console.log('====================================')

// while loop
let index = 0
while (index < myFavouriteAuthors.length) {
  console.log(myFavouriteAuthors[index])
  index++
}

console.log('====================================')

// for of
for (const value of myFavouriteAuthors) {
  console.log(value)
}

console.log('====================================')
