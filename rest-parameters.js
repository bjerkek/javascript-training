// ES5
function isFullAge5 () {
  var argsArray = Array.prototype.slice.call(arguments)

  argsArray.forEach(function (cur) {
    console.log((2019 - cur) >= 18)
  })
}

isFullAge5(2010, 1990, 1998, 1762)

// ES6
function isFullAge6 (...years) {
  years.forEach(cur => console.log((2019 - cur) >= 18))
}

isFullAge6(2010, 1990, 1998, 1762)