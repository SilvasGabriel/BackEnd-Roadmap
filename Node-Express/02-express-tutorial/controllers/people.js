let {people} = require('../data')

const getPerson = (req, res)=>{
    res.status(200).json({success: true, data: people})
}

const postPerson =  (req, res)=>{

    const {name} = req.body;

    if(!name){
        return res.status(400).json({success: false, msg: 'please insert a data'})
    }

    res.status(201).json({success: true, person: name})
}

const putPerson =  (req, res)=>{
    
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person)=> person.id === Number(id))

    if(!person){
        return res.status(404).json({success: false, msg: `no person with ${id} found`})
    }

    const newPeople = people.map((person)=>{
        
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    
    console.log(id, name)

    res.status(200).json({success: true, data: newPeople})

}

const deletePerson = (req, res)=>{
   
    const person = people.find((person)=> person.id === Number(req.params.id))

    if(!person){
        return res
            .status(404)
            .json({success: false, msg: `no person with id ${req.params.id} found`})
    }

    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))

    return res
            .status(200)
            .json({success: true, data: newPeople})

}

module.exports = {
    getPerson,
    postPerson,
    putPerson,
    deletePerson
}