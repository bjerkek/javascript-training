// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the
// number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// Classic FizzBuzz
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

// Classic minimized
for (var i = 1; i < 101; i++) {
  if (i % 15 === 0) console.log('FizzBuzz')
  else if (i % 3 === 0) console.log('Fizz')
  else if (i % 5 === 0) console.log('Buzz')
  else console.log(i)
}

// Switch FizzBuzz
for (let i = 1; i < 101; i++) {
  switch (true) {
    case (i % 15 === 0):
      console.log('FizzBuzz')
      break
    case (i % 3 === 0):
      console.log('Fizz')
      break
    case (i % 5 === 0):
      console.log('Buzz')
      break
    default:
      console.log(i)
  }
}

// ES6 FizzBuzz
for (let i = 1; i < 101; i++) {
  console.log(
    (i % 15 === 0)
    ? 'FizzBuzz'
    : (i % 3 === 0)
      ? 'Fizz'
      : (i % 5 === 0)
        ? 'Buzz'
        : i
  )
}

for (let i = 1; i < 101; i++) {
  const t = i % 3
  const f = i % 5
  console.log(
    t + f === 0
      ? 'FizzBuzz'
      : t === 0
        ? 'Fizz'
        : f === 0
          ? 'Buzz'
          : i
  )
}
