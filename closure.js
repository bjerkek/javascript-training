var me = 'Superman'

function greetMe () {
  console.log('Hello, I am ', me)
}

// This line illustrates that the function greetMe have access to
// variables outside and not simply are copying the value from the var
// This code prints out 'Hello, I am Batman'

me = 'Batman'

greetMe()

// Following an example where closure makes sence
// The function on success is a function and a closure in itself
// but do have access to the requerstId

// function sendRequest () {
//   var requestId = '123'
//   $.ajax({
//     url: '/myurl',
//     success: function (response) {
//       console.log('Request ' + requestId + ' returned')
//     }
//   })
// }
