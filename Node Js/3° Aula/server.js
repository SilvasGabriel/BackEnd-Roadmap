let http = require('http')

http.createServer(function(req,res) {
    res.end("Oi!")
}).listen(8081)

console.log('O servidor está funcionando!')