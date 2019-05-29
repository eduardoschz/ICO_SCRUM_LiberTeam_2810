var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistemas de Información' });
});

router.get('/conceptos', function(req, res, next) {
  res.render('conceptos', { title: 'Conceptos' });
});

router.get('/sistemas', function(req, res, next) {
  res.render('sistemas', { title: 'Tipos de Sistemas de Información' });
});
router.get('/InformacionUtil', function(req, res, next) {
  res.render('InformacionUtil', { title: 'Informacion Util' });
});
router.get('/Componentes', function(req, res, next) {
  res.render('Componentes', { title: 'Componentes' });
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

router.get('/smc', function(req, res, next) {
  res.render('smc', { title: 'Proyecto de control de Riego' });
});

module.exports = router;
