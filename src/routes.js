const express = require('express') ;
const router = express.Router();
const carroController = require('./controllers/carroController');
const manutencaoController = require('./controllers/manutencaoController');
router.get('/carros', carroController.buscarTodos);
router.get('/manutencoes', manutencaoController.buscarTodos);
module.exports = router;