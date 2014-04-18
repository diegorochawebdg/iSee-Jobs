try{
	//O Correto - Lenovo
	//var pageTracker = _gat._getTracker("UA-41615571-1");
	
	//O de testes
	var pageTracker = _gat._getTracker("UA-27134791-2");
	//pageTracker._trackPageview();
	
	// for( var i in pageTracker ) console.log("Google analytics start! " + i);
	
} catch(err) { 
	
	//console.log("Google Analytics não foi iniciado: " + err );
	var pageTracker = new ConnectNoAnalytics();
	function ConnectNoAnalytics(){this._trackPageview = function(){};this._trackEvent = function(){};}
}