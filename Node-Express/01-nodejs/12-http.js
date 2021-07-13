const http = require('http')

const server = http.createServer((req,res)=>{ 
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }

    if(req.url === '/about'){
        res.end('Here is the history about the page.')
    }

    res.end(`
        <h1>Ops!</h2>
        <p>We can't seen to find the page you are looking for!</p>
        <a href="/">Back Home</a>
    `
    )

    //console.log(req)
    //res.write('Welcome to our home page')
    //res.end()
})

server.listen(5500)