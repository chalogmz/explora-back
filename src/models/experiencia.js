const mongoose = require('mongoose')

const experienciaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    sala: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Experiencia', experienciaSchema)