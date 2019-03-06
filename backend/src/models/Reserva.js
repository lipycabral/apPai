const mongoose = require('mongoose')

const ReservaSchema = new mongoose.Schema({
    cliente: String,
    numeroCliente: String,
    data:{
        type: Date,
        default: Date.now()
    },
    local: String,
    qtHamburguer:{
        type: Number,
        default: 0
    },
    qtPizza:{
        type: Number,
        default: 0
    },
    qtCachorroQuente:{
        type: Number,
        default: 0
    },
    qtSuco:{
        type: Number,
        default: 0
    },
    qtCrepe:{
        type: Number,
        default: 0
    },
    qtGarcon:{
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model('Reserva', ReservaSchema)