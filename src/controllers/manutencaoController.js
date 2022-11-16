const manutencaoService = require('../services/manutencaoService')
module.exports = {
buscarTodos: async (req, res) =>{
let json = {error: '', result: []};
let manutencoes = await manutencaoService.buscarTodos();

console.log(manutencoes);

json.result = manutencoes;
res.json(json) ;
}
}