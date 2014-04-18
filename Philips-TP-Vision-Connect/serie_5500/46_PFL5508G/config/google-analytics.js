try{
	
	var pageTracker = _gat._getTracker("UA-37383714-1");
	//pageTracker._trackPageview();
	
	// for( var i in pageTracker ) console.log("Google analytics start! " + i);
	
} catch(err) { 
	
	console.log("Google Analytics não foi iniciado: " + err );
	
}