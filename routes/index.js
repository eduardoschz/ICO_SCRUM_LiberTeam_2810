var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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




module.exports = router;
