var canPlayProcimax = false;
$(document).ready(function() {
	
	//window.addEventListener('shake', shakeEventDidOccur, false);
	var totalPills      = 14;
	var shakeCount      = 0;
	var pillsProperties = new Array();

	
	
	for(var i = 1; i <= totalPills; i++)
	{
		TweenLite.to(document.getElementById("pastilha-" + i.toString()), 0, {css:{ alpha: 0 }});		
		pillsProperties[i] = { 
			top:  document.getElementById("pastilha-cai-" + i.toString()).offsetTop, 
			left: document.getElementById("pastilha-cai-" + i.toString()).offsetLeft 
		};
		// console.log( $("#pastilha-" + i.toString()).css("top"));
		
		//TweenLite.to( $("#pastilha-cai-" + i.toString()) , 2,   { delay: i * 1 , css: { bezier:[{left: $("#pastilha-cai-" + i.toString()).css("left").split("px")[0] - 45, top:$("#pastilha-cai-" + i.toString()).css("top").split("px")[0] - 45},  {left:-250, top:200 }]}, ease: Cubic.easeOut });
	
	}
	
	
	
	function onShake() {
	//function shakeEventDidOccur () {		
		
		if(!canPlayProcimax) return;
		
		if( shakeCount <= (totalPills-1) ) 
		{ 
			var itemNo = totalPills - shakeCount;		
		
			var target 	 = document.getElementById("pastilha-cai-" + itemNo.toString());
			var initLeft = document.getElementById("pastilha-cai-" + itemNo.toString()).offsetLeft;
			var initTop  = document.getElementById("pastilha-cai-" + itemNo.toString()).offsetTop;			

			shakeCount++;
			
			TweenLite.to( target , 1.5,   {css: { alpha: 0,  bezier:[{left: initLeft - 45, top: initTop - 45 }, {left:-250, top:200 }]}, ease: Cubic.easeOut, onStartParams: [shakeCount], onStart: function( count ) { 
				TweenLite.to( document.getElementById("pastilha-" + count.toString()) , .5, {css:{ alpha: 1 }});
			}});
			/*TweenLite.to( target , 2, {css:{ top:"450px" , alpha: 0 }, ease: Cubic.easeOut, onStartParams: [shakeCount], onStart: function( count ) { 
				TweenLite.to( $("#pastilha-" + count.toString()) , .5, {css:{ alpha: 1 }});
			}});*/
			
		} 
		
		if(shakeCount >= totalPills) { 
			
			TweenLite.to(document.getElementById("jogar-novamente") , 1, { css: { alpha: 1 }});
			
		}
	}
	
	function resetPills()
	{
	
		var delayIntro = .1;
		
		for(var i = 1; i <= totalPills; i++)
		{
			
					
			TweenLite.to( document.getElementById("pastilha-" + i.toString()), .5, { css:{ alpha: 0 }});
			TweenLite.to( document.getElementById("pastilha-cai-" + i.toString()), .5, { css:{ alpha: 1 , top: pillsProperties[i].top , left: pillsProperties[i].left } , delay: delayIntro * i});
		}
		
		shakeCount = 0;
		
		TweenLite.to(document.getElementById("jogar-novamente"), 1, { css: { alpha: 0 }});
		
	}	
	
	$(document).on("click", ".jogar-novamente" ,function(e) { 
		resetPills();
		e.preventDefault();
	});

	$.shake({
		debug: "",             // debug div id
		supported: "",  	 // not supported message div
		violence: 2.8,                  // single shake sensitivity
		hf: .6,                        // high-pass filter constant
		shakethreshold: 1,              // number of single shakes required to fire a shake event
		debounce: 250,                 // delay between shake events (in ms)
		callback: function() {
			onShake();
		}
	});
	
	
	resetPills();
});