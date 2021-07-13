const {writeFileSync} = require('fs')

for(let i = 0; i < 100000; i++){
    writeFileSync('./content/big.txt',`hello word ${i} \n`,{ flag:'a' })
}