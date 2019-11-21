// Currying is when av function doesn't take its argument up front
// It wants you to give it the first argument, and the the function
// returns another function, which you are supposed to call with the
// second argument, and so on until all the arguments have been provided
// Then the last function is the one who returns the result

let dragon = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon which breads ' +
  element + '!'

console.log(dragon('Fluffyking', 'tiny', 'lightening'))

let dragonWhithCurrying =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon which breads ' +
        element + '!'

console.log(dragonWhithCurrying('Fluffyking')('tiny')('lightening'))
