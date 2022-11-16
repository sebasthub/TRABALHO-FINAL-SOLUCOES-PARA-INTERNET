const carroService = require('../services/carroService')
module.exports = {
buscarTodos: async (req, res) =>{
let json = {error: '', result: []};
let carros = await carroService.buscarTodos();

console.log(carros);

json.result = carros;
res.json(json) ;
}
}