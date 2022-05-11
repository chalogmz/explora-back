const express = require('express')
const router = express.Router()


// Crear
router.post('/salas', (req, res) => {
    res.send("crear sala")
})



module.exports = router