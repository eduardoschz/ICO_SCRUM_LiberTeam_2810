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
      ["metodologiasAgiles", "scrum", "#", "#"],
      ["dialid", "eduardo", "Luis", "marco"]
    ]
};

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Sistemas de Informacion',
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

hbs.registerHelper('caracteristicas', function (caracteristicas, descripcion, color) {
  var out = '<div class="carousel">';
  var tam = caracteristicas.length;
  for(var i = 0; i < tam; i++) {
    out = out + '\n<div class="carousel-item '+ color[i] + ' darken-1">';
    out = out + '\n<p>' + caracteristicas[i] + '</p>';
    out = out + '\n<p>' + descripcion[i] + '</p>';
    out = out + "\n</div>";
  }
  return out + "\n</div>\n";
});

/*===============================================================================================================*/

router.get('/conceptos', function(req, res, next) {
  res.render('conceptos', {
    title: 'Conceptos',
    navigacion: barraNavegacion,
    VC: "conceptos"
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
    navigacion: barraNavegacion,
    VC: "infoUtil",
    caracteristicas: [
      "Accesible", "Exacta", "Completa", "Económica",
      "Flexible", "Relevante", "Segura", "Simple",
      "Oportuna", "Verificable"
    ],
    color: [
      "red", "pink", "deep-purple", "blue",
      "teal", "orange", "brown", "grey",
      "cyan", "green"
    ],
    descripcion: [
      "Mantener al alcance la información de una manera fácil, de tal forma que puedan obtenerla en el formato correcto y en el tiempo preciso para satisfacer sus necesidades.",
      "Libre de errores. El sistema debe contar con mecanismos de verificación.",
      "Contiene los hechos relevantes.",
      "El costo de la producción de la información debe ser relativamente barato. Las personas que toman las decisiones siempre deben balancear el valor de la información con el costo de producirla.",
      "La información es flexible cuando puede utilizarse para una gran variedad de propósitos",
      "Es relevante cuando es importante para las personas que toman las decisiones.",
      "Protección al acceso de la información.",
      "La información debe establecerse en términos claros y concisos.",
      "Cuando se requiere y tiene un valor para el negocio.",
      "Puede ser comprobada para verificar que es correcta."
    ]
  });
});

router.get('/Componentes', function(req, res, next) {
  res.render('Componentes', {
    title: 'Componentes',
    navigacion: barraNavegacion,
    VC : "componentes"
  });
});

router.get('/spt', function(req, res, next) {
  res.render('spt', {
    title: 'Sistema de Procesamiento de Transacciones',
    navigacion: barraNavegacion,
    VC: "tps"
  });
});

router.get('/mis', function(req, res, next) {
  res.render('mis', {
    title: 'Sistema de Informacion para la Administracion',
    navigacion: barraNavegacion,
    VC: "mis"
  });
});

router.get('/crm', function(req, res, next) {
  res.render('crm', {
    title: 'Administracion de Relacion con el Cliente',
    navigacion: barraNavegacion,
    VC: "crm"
  });
});

router.get('/smc', function(req, res, next) {
  res.render('smc', {
    title: 'Proyecto de control de Riego',
    navigacion: barraNavegacion
  });
});

router.get('/metodologiasAgiles', function(req, res, next) {
  res.render('metodologiasAgiles', {
    title: 'Metodologias Agiles',
    navigacion: barraNavegacion
  });
});

router.get('/scrum', function(req, res, next) {
  res.render('scrum', {
    title: 'Scrum',
    navigacion: barraNavegacion
  });
});

router.get('/eduardo', function(req, res, next) {
  res.render('eduardo', {
    title: 'Eduardo Sanchez - SM',
    navigacion: barraNavegacion
  });
});

router.get('/Luis', function(req, res, next) {
  res.render('Luis', {
    title: 'Luis García - ST',
    navigacion: barraNavegacion
  });
});

router.get('/dialid', function(req, res, next) {
  res.render('dialid', {
    title: 'Dialid - PO',
    navigacion: barraNavegacion
  });
});

router.get('/marco', function(req, res, next) {
  res.render('marco', {
    title: 'Marco',
    navigacion: barraNavegacion,
    VC: "marco"
  });
});

module.exports = router;
