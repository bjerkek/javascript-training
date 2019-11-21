// Object.create

var personProto = {
  calculateAge = function () {
    console.log(2019 - this.yearOfBirth)
  }
}

var john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1977
john.job = 'teacher'

var jane = Object.create(personProto, {
  name: { value: 'Jane'},
  yearOfBirth: { value: 1977 },
  job: { value: 'designer'}
})