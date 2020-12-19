/*
let express = require('express')
const app = express()

app.get("/",function (req,res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function (req,res) {
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function (req,res) {
    res.send('Bem vindo a pagina principal.')
})

app.get("/ola/:nome/:sobrenome/:cargo",function (req,res) {
    res.send("<h1>Meu nome e "+req.params.nome+"</h1>"+"<h2>Meu sobrenome e "+req.params.sobrenome+"</h2>"+"<h3>E trabalho de "+req.params.cargo+"</h3>")

})

app.listen(8081,function (){
    console.log('Servidor funcionando na url http://localhost:8081')
})

*/
let express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
//Config
    //Template Engin
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars')
    //Body-Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
   
    /*Rotas*/
    app.get('/cadastro',function (req,res) {
        res.render('formulario')
    })

    app.get('/',function (req,res) {
        Post.findAll({order:[['id','DESC']]}).then(function (posts) {
            res.render('home',{posts: posts})
        })
    })

    app.post('/adicionar',function (req,res) {
        Post.create({
            titulo:req.body.titulo,
            conteudo:req.body.conteudo
        }).then(function () {
            res.redirect('/')
        }).catch(function (erro) {
            res.send('Ocorreu um erro: '+erro)
        })
    })

    app.get('/deletar/:id',function (req, res) {
        Post.destroy({where:{'id':req.params.id}}).then(function(){
            res.send('Postagem deletada com sucesso!')
        }).catch(function (erro){
            res.send('Esta postagem não existe!')
        })
    })

app.listen(8081,function (){
    console.log('Servidor funcionando na url http://localhost:8081')
})