// Really stupid game
function game () {
  const score = Math.random() * 10
  console.log(score >= 5)
}
game();

// Or by using IFFE
(function () {
  const score = Math.random() * 10
  console.log(score >= 5)
})();

// IIFE with arguments
(function (goodLuck) {
  const score = Math.random() * 10
  console.log(score >= 5 - goodLuck)
})(5)


// IIFE in ES6
{
  let a = 1
  let b = 2
}

console.log(a, b) // a is not defined