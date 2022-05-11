const express = require('express');
const { db } = require('../models/experiencia');
const router = express.Router()
const experienciaSchema = require('../models/experiencia')


// Crear
router.post('/', (req, res) => {
    const experiencia = experienciaSchema(req.body);
    
    experiencia.save()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
});

// Obtener
router.get('/', (req, res) => {
    experienciaSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
});

// Obtener por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    experienciaSchema.findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
});

// Obtener Sala 
// router.get('/:sala', (req, res) => {
//     const { sala } = req.params;

//     db.experienciaSchema.find( { sala: "cinco" } )
//         .then((data) => res.json(data))
//         .catch((err) => res.status(500).json(err))
// });

// Actualizar
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, sala, imagen } = req.body;

    experienciaSchema.updateOne(
        { _id: id },
        { $set: { titulo, descripcion, sala, imagen } }
    )
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
});

// Eliminar
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    experienciaSchema.remove( { _id: id } )
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err))
});



module.exports = router