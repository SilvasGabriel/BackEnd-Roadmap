let express = require('express')
const app = express()

app.get("/",function (req,res){
    res.send('Seja bem vindo ao meu app!')
})

app.get("/sobre", function (req,res) {
    res.send('Esta é a página sobre.')
})

app.get("/blog", function (req,res) {
    res.send('Bem vindo a home page.')
})



app.listen(8081,function (){
    console.log('Servidor funcionando na url http://localhost:8081')
})