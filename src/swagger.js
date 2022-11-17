const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./router.ts']

const doc = {
    swagger: "2.0",
     info: {
        "version": "1.0.0",
        "title": "REST API",
        "description": ""
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: [
        "http"
    ],
    definitions: {
        AddManutencao: {
            data: "data",
            solicitante: "string",
            veiculo: "string",
            empresa_manutencao: "string",
            retorno:  "data",
            valor: 0,
            problemas: "string",
        }
    
      }
}

swaggerAutogen(outputFile, endpointsFiles, doc)