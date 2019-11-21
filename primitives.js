// Primitives vs objects
// Primitives hold their value, while objects
// only holds a reference to the value


// Primitives
let a = 23
let b = a

// Now, let's change the value of a
a = 56

// And console them out
console.log(a)  // 56
console.log(b)  // 23


// Objects
let obj1 = {
  name: 'John',
  age: 41
}
let obj2 = obj1

obj1.age = 30

console.log(obj1.age) // 30
console.log(obj2.age) // 30


// Functions
let age = 41
var obj = {
  name: 'JC',
  city: 'Oslo'
}

function change (a, b) {
  a = 30
  b.city = 'New York'
}

change(age, obj)

console.log(age)      // 41 
console.log(obj.city) // New York
