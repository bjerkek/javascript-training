/*
REDUCE
The multitool of list tranformations and can be used for any transformation
https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3
*/
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

// Old way, using for loop
let oldWayTotalAmount = 0
for (let i = 0; i < orders.length; i++) {
  oldWayTotalAmount += orders[i].amount
}
console.log(oldWayTotalAmount)

// New way, using reduce
let newWayTotalAmount = orders.reduce(function (sum, order) {
  return sum + order.amount
}, 0)
console.log(newWayTotalAmount)

// Simplified
let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount)


// import fs from 'fs'
const fs = require('fs')

const output = fs.readFileSync('data.txt', 'UTF-8')
  .trim()
  .split('\n')
  .map(line => line.split('|'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log('output: ', JSON.stringify(output, null, 2))