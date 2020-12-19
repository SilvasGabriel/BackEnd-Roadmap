const mongoose = require('mongoose')

//Moongose configuração
mongoose.Promise = global.Promise

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/aprendendo').then(()=>{
    console.log('Conectado ao MongoDb...')
}).catch((error)=>{
    console.log('Houve um erro ao se conectar ao MongoDb.'+error)
})

//Model - Usuarios
//Definindo o Model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type:String,
        require:true
    },
    sobrenome: {
        type:String,
        require:false    
    },
    email: {
        type:String,
        require:true
    },
    idade: {
        type:Number,
        require:true
    },
    pais:{
        type:String,
        require:false
    }

})

//Definindo a colection
mongoose.model('Usuarios',UsuarioSchema)

const user = mongoose.model('Usuarios')

new user({
    nome:"Gabriel",
    sobrenome:"Silva",
    email:"gabrielsilva291996@gmail.com",
    idade: 23,
    pais:"Brasil"
}).save().then(()=>{
    console.log('Usuario criado com sucesso.')
}).catch((erro)=>{
    console.log('Houve um erro ao registrar o usuário:'+erro)
})
