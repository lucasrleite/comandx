var express = require('express');
var router = express.Router();


const PratoController = require('../controller/prato-controller')
const pratoController = new PratoController();


router.get('/add', pratoController.renderPrato());
router.post('/add', pratoController.addPrato());
router.get('/', pratoController.listar());
router.get('/edit/:id', pratoController.formEditar());
router.put('/edit/:id', pratoController.editar());

router.delete('/delete/:id', pratoController.delete());


module.exports = router;