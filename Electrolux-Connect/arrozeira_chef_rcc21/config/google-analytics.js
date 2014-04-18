try{
	//O Correto - Electrolux
	//var pageTracker = _gat._getTracker("UA-37582117-1");
	
	//O de testes
	var pageTracker = _gat._getTracker("UA-27134791-2");
	//pageTracker._trackPageview();
	
	// for( var i in pageTracker ) console.log("Google analytics start! " + i);
	
} catch(err) { 
	
	console.log("Google Analytics não foi iniciado: " + err );
	
}