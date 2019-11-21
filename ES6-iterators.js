const myFavouriteAuthors = {
  allAuthers: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowlings',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephensen',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowlings',
      'Terry Pratchet'
    ]
  },
  getAuthers () {
    let authers = []
    this.allAuthers.fiction
      .reduce(
        (authers, auther) => {
          authers.push(auther)
          return authers
        },
        authers
      )
    return authers
  },
  getAllAuthers () {
    const authers = []

    for (const auther of this.allAuthers.fiction) {
      authers.push(auther)
    }

    for (const auther of this.allAuthers.scienceFiction) {
      authers.push(auther)
    }

    for (const auther of this.allAuthers.fantasy) {
      authers.push(auther)
    }

    return authers
  }
}
console.log(myFavouriteAuthors.getAuthers())
console.log(myFavouriteAuthors.getAllAuthers())



// ES5
var ages = [11, 12, 14, 7, 23, 9, 77]

var fullAge = ages.map(function (cur) {
  return cur >= 18
})

var index = fullAge.indexOf(true)
console.log(ages[index])


// ES6
console.log(ages.findIndex(cur => cur >= 18))
console.log(ages.find(cur => cur >= 18))