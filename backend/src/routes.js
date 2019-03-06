const express = require('express')
const routes = express.Router()

const ReservaController = require('./controllers/ReservaController')

routes.get('/reservas', ReservaController.index)
routes.get('/reservas/:id', ReservaController.indexById)
routes.post('/reservas', ReservaController.store)
routes.delete('/delete/:id', ReservaController.remove)


module.exports = routes