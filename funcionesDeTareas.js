let fs = require ('fs');
let arrayApp = fs.readFileSync('./tareas.json','utf-8');
let arrayParseado = JSON.parse(arrayApp);

module.exports=arrayParseado;
