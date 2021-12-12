let arrayParseado = require('./funcionesDeTareas');
let process = require('process');
const { log } = require('console');
let index = process.argv[2];

switch (index){
 case "listar":
    let tareas= arrayParseado;
    if (tareas.length ===0 ){
      console.log("");
      console.log("Bienvenido a la App. de Tareas de Martin Salgado");
      console.log("");
     console.log("No Hay Tareas Para mostrar");
     console.log("");
    }else{
      console.log("");
      console.log(">>>BIENVENIDO A LA APP. DE TAREAS DE MARTIN SALGADO<<<   Version 1.0");
      console.log("");
      for(let i=0; i < tareas.length ; i++)
      {
        console.log("Título: " + tareas[i].Titulo + " - estado: " + tareas[i].Estado);
      }
      console.log("");
    }
    break;
    case undefined: 
    console.log("");
    console.log(">>>Bienvenido a la App. de Tareas de Martin Salgado<<<     Version 1.0");
    console.log("");
    console.log("Atencion - Tienes que pasar una Acción");
    console.log("");
    console.log("***Luego de escribir app.js ingresa la Palabra 'listar' para visualizar Tareas***");
    console.log("");
    break;
    default:
      console.log("");
    console.log(">>>Bienvenido a la App. de Tareas de Martin Salgado<<<     Version 1.0");
    console.log("");
      console.log("No entiendo lo que quieres hacer");
      console.log("");
}