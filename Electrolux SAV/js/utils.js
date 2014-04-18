// JavaScript Document
function validaEmail(em){
	//alert(email);
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if(filtro.test(em)){
		return true;
	}else{
		return false;
	}
}

function validaTel(tel){
	//alert(email);
	var filtrotel = /^\(([\d]{2})\)([\d]{4})\-([\d]{4})$/;	
	if(filtrotel.test(tel)){
		return true;
	}else{
		return false;
	}
}
function getURLParameter(name) {
	return decodeURI(
		(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
	);
}