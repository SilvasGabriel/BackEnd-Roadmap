//const {readFile,writeFile} = require('fs')
const fs = require('fs')

console.log('start')

/*
readFile('./content/first.txt','utf-8',(err,result)=>{
    
    if(err){
        console.log(err)
        return null;
    }

    //console.log(result)
    const first = result;
    
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return null;
        }
        const second = result;

        writeFile('./content/third-async.txt',`Here is what the method do: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return null;
            }
            console.log(result)
        })

    })

})
*/

fs.readFile('./content/first.txt','utf-8',(err,result)=>{
    
    if(err){
        console.log(err)
        return null;
    }

    //console.log(result)
    const first = result;

    fs.readFile('./content/second.txt','utf-8',(err,result)=>{

         
        if(err){
            console.log(err)
            return null;
        }

        const second = result;

        fs.writeFile('./content/third-async.txt',`Here is what the method do: ${first}, ${second}`,(err,result)=>{
             
            if(err){
                console.log(err)
                return null;
            }
        
            console.log('done with this task')
        })

    })

})

console.log('starting next task')