let http = require('http')
let fs = require('fs')

http.createServer( (req,res)=>{
  //const text = fs.readFileSync('./content/big.txt','utf-8')
  //res.end(text)
  
  const filesStream = fs.createReadStream('./content/big.txt','utf-8')

  filesStream.on('open',()=>{
    filesStream.pipe(res)
  })

  filesStream.on('error',(err)=>{
    res.end(err)
  })
  
})
.listen(5000)