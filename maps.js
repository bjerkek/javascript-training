/* eslint-env es6 */

const question = new Map()
question.set('question', 'What is the name of the latest major JavaScript version?')
question.set(1, 'ES5')
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(4, 'ES7')
question.set('correct', 3)
question.set(true, 'Correct answer!')
question.set(false, 'Wrong answer, please try again!')


// Making a quiz
console.log(question.get('question')) 
for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`)
  }
}

// const answer = parseInt(prompt('Write the correct answer'))
const answer = 3
console.log(question.get(answer === question.get('correct')))

/*
// Size
console.log(question.size)

// Unlike an object, we can iterate maps
question.forEach((value, key) => console.log({value, key}))

// Iterating with for of, using destructering
for (let [key, value] of question.entries()) {
  console.log({value, key})
}

// Removing element, if it's there
if (question.has(4)) {
  question.delete(4)
}

// Delete all items
question.clear()
*/
