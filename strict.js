// If we forget to declare 'i' (see the for loop), the compiler
// will 'hoist' it to the top making it a global variable
// Running the code below without 'use strict' will output the i
// becouse the i are hoisted.

// This applies only to var, not let which only will be available
// in the scope it is added. Locked scope, not function scope

'use strict'
function test () {
  for (i = 1; i < 11; i++) {
    console.log(i)
  }
}

test()

console.log(i)
