try{
	//O Correto - Whirlpool
	var pageTracker = _gat._getTracker("UA-39635206-1");
	
	//O de testes
	//var pageTracker = _gat._getTracker("UA-27134791-2");
	//pageTracker._trackPageview();
	
	// for( var i in pageTracker ) console.log("Google analytics start! " + i);
	
} catch(err) { 
	
	var pageTracker = new ConnectNoAnalytics();
	function ConnectNoAnalytics(){this._trackPageview = function(){};this._trackEvent = function(){};}
	
}