const EventEmmitter= require('events')

const customEmmitter = new EventEmmitter()

customEmmitter.on('response',(name,id)=>{
    console.log(`data recieved`)
    console.log(`id: ${id}, nome: ${name};`)
})

customEmmitter.on('response',()=>{
    console.log(`some other logic here`)
})

customEmmitter.emit('response', 'john', 34)