//const {readFileSync,writeFileSync} = require('fs')
const fs = require('fs');

console.log('start')

//const first = readFileSync('./content/first.txt','utf-8')
const first = fs.readFileSync('./content/first.txt','utf-8')

//console.log(first)

//const second = readFileSync('./content/second.txt','utf-8')
const second = fs.readFileSync('./content/second.txt','utf-8')

//console.log(second)

fs.writeFileSync('./content/third-sync.txt',`Here is what the method do: ${first}, ${second}`,{flag:'a'})

console.log('done with this task')
console.log('start the next one')