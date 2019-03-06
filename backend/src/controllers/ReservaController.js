const Reserva = require('../models/Reserva')

module.exports = {
    async index(req, res){
        const reservas = await Reserva.find({}).sort('data')
        return res.json(reservas)
    },
    async indexById(req,res){
        const reserva = await Reserva.findById(req.params.id)
        return res.json(reserva)
    },
    async store(req, res){
        const reserva = await Reserva.create(req.body)
        req.io.emit('reserva', reserva)
        return res.json(reserva)
    },
    async remove(req, res){
        try{
            const reserva = await Reserva.findByIdAndDelete(req.params.id)
            if( !reserva ){
                return res.status(404).send('Usuario não encontrado')
            } else{
                req.io.emit('reservaApagada', reserva)
                res.status(204).send('Deletado')

            }
        } catch( err ){
            return res.status(500).send(err)
        }
        
    }
}