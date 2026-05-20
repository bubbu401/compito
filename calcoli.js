function sconto(i,s){
	sconto = i/s *100;
	sconto = i - sconto;
return sconto;
}
function iva(i,s){
	iva = i/s *100;
	sconto = sconto + i;
	return sconto;
}

module.exports ={
	sconto:sconto,
	iva:iva
};
