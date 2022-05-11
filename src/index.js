const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 3003
const experienciasRoutes = require('./routes/experiencias.routes')
const salasRoutes = require('./routes/salas.routes')
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://chalogmz:chalo4091@cluster0.hqgw5.mongodb.net/explora?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error))


// Rutas
app.use('/', experienciasRoutes)
app.use('/:id', experienciasRoutes)
app.use('/:sala', experienciasRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to my API")
})


app.listen(port, () => console.log('listening on port', port));