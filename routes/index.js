var express = require('express');
var hbs = require('hbs');
var router = express.Router();

var barraNavegacion = {
    menu: ["Teoría Básica", "Tipos", "Scrum", "Equipo"],
    target: ["id_teoria", "id_tipos", "id_scrum", "id_equipo"],
    temas: [
      ["Conceptos", "Información Útil", "Componentes"],
      ["TPS", "MIS", "CRM"],
      ["Metodologías Ágiles", "Definición", "Roles", "Herramientas"],
      ["Dialid (PO)", "Eduardo (SM)", "Luis (ST)", "Marco (ST)"]
    ],
    ligas: [
      ["conceptos", "InformacionUtil", "Componentes"],
      ["spt", "mis", "crm"],
      ["#", "#", "#", "#"],
      ["#", "#", "#", "#"]
    ]
}

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Sistemas de Información',
    navigacion: barraNavegacion,
    VC: "inicio"                          // Nombre de los archivos css y js
  });
});

/* ============= Helpers ==========================*/

hbs.registerHelper('menu', function(items, objetivos) {
  var out = '<ul id="nav-items" class="right hide-on-med-and-down">';
  var tam = items.length;
  for(var i = 0; i < tam; i++) {
    out = out + '\n<li><a class="dropdown-trigger" data-target="' + objetivos[i] + '" href="#">' + items[i] + '<i class="material-icons right">arrow_drop_down</i></a></li>';
  }
  return out + "\n</ul>";
});


hbs.registerHelper('submenus', function (tarjetas, temas, ligas) {
  var out = '';
  for (var i = 0; i < tarjetas.length; i++) {
    out = out + '<ul id="' + tarjetas[i] + '" class="dropdown-content">';
    for (var j = 0; j < temas[i].length; j++) {
      out = out + '<li><a href="' + ligas[i][j] + '">' + temas[i][j] + '</a></li>\n';
    }
    out = out + '</ul>\n\n';
  }
  return out + "\n";
});

/*===============================================================================================================*/

router.get('/conceptos', function(req, res, next) {
  res.render('conceptos', { 
    title: 'Conceptos',
    navigacion: barraNavegacion 
  });
});

router.get('/sistemas', function(req, res, next) {
  res.render('sistemas', { 
    title: 'Tipos de Sistemas de Informacion',
    navigacion: barraNavegacion 
  });
});

router.get('/InformacionUtil', function(req, res, next) {
  res.render('InformacionUtil', { 
    title: 'Informacion Util',
    navigacion: barraNavegacion 
  });
});

router.get('/Componentes', function(req, res, next) {
  res.render('Componentes', { 
    title: 'Componentes',
    navigacion: barraNavegacion 
  });
});

router.get('/spt', function(req, res, next) {
  res.render('spt', { 
    title: 'Sistema de Procesamiento de Transacciones',
    navigacion: barraNavegacion 
  });
});

router.get('/mis', function(req, res, next) {
  res.render('mis', { 
    title: 'Sistema de Informacion para la Administracion',
    navigacion: barraNavegacion
  });
});

router.get('/crm', function(req, res, next) {
  res.render('crm', { 
    title: 'Administracion de Relacion con el Cliente',
    navigacion: barraNavegacion 
  });
});

router.get('/smc', function(req, res, next) {
  res.render('smc', { 
    title: 'Proyecto de control de Riego',
    navigacion: barraNavegacion 
  });
});

module.exports = router;
