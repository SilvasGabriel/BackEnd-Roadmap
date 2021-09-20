const express = require('express')
const app = express()

let people = require('./routes/people')

let login = require('./routes/auth')

//static assests
app.use(express.static('./methods-public'))

//parse form data 
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

app.use('/api/people', people)

app.use('/login', login)

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})