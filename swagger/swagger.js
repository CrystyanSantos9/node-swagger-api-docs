const swaggerAutogen = require('swagger-autogen')()


const outputFile = './swagger/swagger_output.json'
const endpointFiles = ['./index.js']

swaggerAutogen(outputFile, endpointFiles)