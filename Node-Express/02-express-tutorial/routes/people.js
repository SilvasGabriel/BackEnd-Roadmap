const express = require('express')
const router = express.Router();

const {

    getPerson,
    postPerson,
    putPerson,
    deletePerson

} =  require('../controllers/people')

//router.get('/', getPerson)
//router.post('/', postPerson)
//router.put('/:id', putPerson)
//router.delete('/:id', deletePerson)

router.route('/').get(getPerson).post(postPerson)
router.route('/:id').put(putPerson).delete(deletePerson)

module.exports = router