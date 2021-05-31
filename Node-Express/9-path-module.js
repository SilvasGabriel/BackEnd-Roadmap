const path = require('path')

//plataform specific separator
console.log(path.sep)

//join method
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//basename method
const base = path.basename(filePath)
console.log(base)

//resolve method
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
