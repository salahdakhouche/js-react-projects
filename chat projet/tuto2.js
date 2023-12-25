
//importation d'un module (fichier js)
const sume = require('./tuto');
//l'appel des different attributs axporté du module 
const b = new sume.person("salah eddine","Dakhouche",26);
console.log(sume.sum(1,1));






// les evenement en node js
const eventEmitter = require('events');
//creation d'un event instance
const events = new eventEmitter();
//creation d'un event customié
events.on('mouse',function(n1,n2){
    console.log("hello my friends "+(n1+n2));
})
//l'appele de l'event customisé par la fonction emit
events.emit('mouse',1,1);

