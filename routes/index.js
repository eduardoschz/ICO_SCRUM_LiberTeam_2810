var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistemas de Información 2810' });
});

router.get('/conceptos', function(req, res, next) {
  res.render('conceptos', { title: 'Express' });
});

router.get('/Dato', function(req, res, next) {
  res.render('Dato', { title: 'Express' });
});

router.get('/Informacion', function(req, res, next) {
  res.render('Informacion', { title: 'Express' });
});

router.get('/SistemasDeInformacion', function(req, res, next) {
  res.render('SistemasDeInformacion', { title: 'Express' });
});



router.get('/sistemas', function(req, res, next) {
  res.render('sistemas', { title: 'Tipos de Sistemas de Información' });
});

router.get('/spt', function(req, res, next) {
  res.render('spt', { title: 'Sistema de Procesamiento de Transacciones' });
});
=======
>>>>>>> 0f6eec05f5a080c2ede8d3457d216f5caaa012bb

module.exports = router;
