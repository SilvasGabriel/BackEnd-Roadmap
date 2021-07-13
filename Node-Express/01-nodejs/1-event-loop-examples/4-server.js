const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('hello world')
})

server.listen(5000, ()=>{
    console.log('O servidor esta rodando na porta : 5000 ...')
})