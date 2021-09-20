//console.log('Express Tutorial')

const http = require('http');

const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    
    //console.log(req.method)
    //console.log(req.url)
    const url = req.url;
    
    //home page
    if(url==='/'){

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.write('<h1>home page</h1>')
        res.write(homePage)
        res.end();

    }
    //styles for home page
    else if(url === '/styles.css'){

        res.setHeader('Content-Type', 'text/css');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        //res.write('<h1>about page</h1>')
        res.write(homeStyle)
        res.end();

    }
    //logo for home page
    else if(url === '/logo.svg'){

        res.setHeader('Content-Type', 'image/svg+xml');
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        //res.write('<h1>about page</h1>')
        res.write(homeLogo)
        res.end();

    }
    //logic for home page
    else if(url === '/browser-app.js'){

        res.setHeader('Content-Type', 'text/javascript');
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        //res.write('<h1>about page</h1>')
        res.write(homeLogic)
        res.end();

    }
    //about page
    else if(url === '/about'){

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>about page</h1>')
        res.end();

    }
    // 404
    else{

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>page not found</h1>')
        res.end();

    }

})

server.listen(5000);