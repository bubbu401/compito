let op = require ("./calcoli.js");
argv = process.argv.slice(2);


let importo = Number (argv [0]);
let operazione = (argv[1]);
let percentuale = Number (argv [2]);


if (argv.length !== 3 ){
	console.log("il programma funziona con : node importo.js <importo> <operazione> <percentuale>");
	process.exit(1);
}
let risultato;
if (operazione === "sconto"){
	console.log("il risultato e");
	risultato =op.sconto(importo,percentuale);
}else{
console.log("operazione non riconosciuta");

}
console.log(risultato);
