var express = require('express');
var router = express.Router();


const FuncController = require('../controller/func-controller')
const funcController = new FuncController();


router.get('/add', funcController.renderFunc());
router.post('/add', funcController.addFunc());
router.get('/', funcController.listar());
router.get('/edit/:id', funcController.formEditar());
router.put('/edit/:id', funcController.editar());

router.delete('/delete/:id', funcController.delete());


module.exports = router;