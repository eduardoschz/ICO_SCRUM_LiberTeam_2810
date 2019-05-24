var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistemas de Información 2810' });
});

router.get('/conceptos', function(req, res, next) {
  res.render('conceptos', { title: 'Express' });
});

router.get('/sistemas', function(req, res, next) {
  res.render('sistemas', { title: 'Tipos de Sistemas de Información' });
});

router.get('/spt', function(req, res, next) {
  res.render('spt', { title: 'Sistema de Procesamiento de Transacciones' });
});

router.get('/mis', function(req, res, next) {
  res.render('mis', { title: 'Sistema de Informacion para la Administracion' });
});

router.get('/crm', function(req, res, next) {
  res.render('crm', { title: 'Administración de Relacion con el Cliente' });
});
module.exports = router;
