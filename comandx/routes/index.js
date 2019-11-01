const IndexController = require('../controller/index-controller');
const indexController = new IndexController();
const PratoController = require('../controller/prato-controller')
const pratoController = new PratoController();
var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', indexController.index());
router.get('/mesas', indexController.error());
router.get('/pratos',  pratoController.listar());
module.exports = router;