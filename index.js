
require('dotenv').config()

//config variáveis de ambiente
const PORT = process.env.NODE_ENV !== "development" ? process.env.PORT : 3000;
const HOST = process.env.NODE_ENV !== "development" ? process.env.HOST : "0.0.0.0"

const express = require('express')
const swaggerUi= require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')

const mainRoutes = require('./routes/main')

const app = express()


//definindo doc swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
//definindo middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//rotas
app.use('/', mainRoutes)

app.listen(PORT, HOST, ()=>{
    console.log(`Server is on host "${HOST}" listen on port "${PORT}"`)
})

