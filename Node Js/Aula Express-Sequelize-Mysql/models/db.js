const Sequelize = require('sequelize') 

 /*Conectando com o banco de dados*/
 const sequelize = new Sequelize('postapp','root','12345',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}