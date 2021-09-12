const {Router}= require('express')
const router = Router()
const controller = require('../controllers/info.controller')

router.get('/:id',controller.obtener)

module.exports=router