/*Conectando com o bancp de dados*/
const Sequelize = require('sequelize') 
const sequelize = new Sequelize('test','root','12345',{
    host: "localhost",
    dialect: 'mysql'
})

/*Autenticação pra ver se o banco com o sequelize está funcionando!*/
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function (erro) {
    console.log('Falha ao se conectar:'+erro)
})

/*Criando uma tabela!*/
const Postagem = sequelize.define('postagens',{
    /*Criando os dados da tabela*/
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

/*Criar a tabela*/
//Postagem.sync({force:true})

/*Criando dados para a tabela usuarios*/
Postagem.create({
    titulo:"BOM-DIA!",
    conteudo:"Olá, como está?"
})

/*Criando uma tabela!*/
const Usuario = sequelize.define('usuarios',{
    /*Criando os dados da tabela*/
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

/*Criar a tabela*/
//Usuario.sync({force:true})


/*Criando dados para a tabela usuarios*/ 
Usuario.create({
    nome:"Gabriel",
    sobrenome:"Silva",
    idade:23,
    email:"gabrielsilva291996@gmail.com"
})