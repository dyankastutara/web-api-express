const express = require('express')
const router = express.Router()
const controllerMemo = require('../controllers/memo')



router.get('/', controllerMemo.getAll)
router.get('/:id', controllerMemo.getDetail)
router.get('/user/:user', controllerMemo.getByUser)
router.post('/', controllerMemo.insert)
router.delete('/:id', controllerMemo.delete)
router.put('/:id', controllerMemo.update)




module.exports = router