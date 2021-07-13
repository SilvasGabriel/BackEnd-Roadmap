// CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
//const {john, peter} = require('./4-names')
const sayHi  = require('./5-utils')
const data = require('./6-alternative')
console.log(names)

//console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.items[0])
sayHi(data.SinglePerson.name)

//sayHi(john)
//sayHi(peter)

require('./7-mind-grenade')