// Functions with a function as input
const years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc (arr, fn) {
  let arrRes = []
  for (let i=0; i<arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

function calculateAge (el) {
  return 2019 - el
}

console.log(arrayCalc(years, calculateAge))

// Functions returning another function
function interviewQuestion (job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX design is?')
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log(name + ', what subject do you teach?')
    }
  } else {
    return function (name) {
      console.log(name + ', what do you do?')
    }
  }
}

// Used like this
var teacherQuestion = interviewQuestion('teacher')
teacherQuestion('John')

// Or like this
interviewQuestion('teacher')('John')