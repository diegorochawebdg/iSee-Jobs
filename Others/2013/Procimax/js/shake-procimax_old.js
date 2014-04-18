var canPlayProcimax = false;
$(document).ready(function() {
	
	var totalPills      = 14;
	var shakeCount      = 0;
	var pillsProperties = new Array();
	
	
	for(var i = 1; i <= totalPills; i++)
	{
		TweenMax.to( $("#pastilha-" + i.toString()) , 0, {css:{ alpha: 0 }});
		pillsProperties[i] = { top: $("#pastilha-cai-" + i.toString()).css("top"), left: $("#pastilha-cai-" + i.toString()).css("left") };
		// console.log( $("#pastilha-" + i.toString()).css("top"));
		
		//TweenMax.to( $("#pastilha-cai-" + i.toString()) , 2,   { delay: i * 1 , css: { bezier:[{left: $("#pastilha-cai-" + i.toString()).css("left").split("px")[0] - 45, top:$("#pastilha-cai-" + i.toString()).css("top").split("px")[0] - 45},  {left:-250, top:200 }]}, ease: Cubic.easeOut });
	
	}
	resetPills();
	
	function onShake() {
		
		if(!canPlayProcimax) return;
		
		if( shakeCount <= (totalPills-1) ) 
		{ 
			var itemNo = totalPills - shakeCount;
			var target = $("#pastilha-cai-" + itemNo.toString() );
			var initLeft = $("#pastilha-cai-" + itemNo.toString()).css("left").split("px")[0];
			var initTop  = $("#pastilha-cai-" + itemNo.toString()).css("top").split("px")[0];
			shakeCount++;
			TweenMax.to( target , 1.5,   {css: { alpha: 0,  bezier:[{left: initLeft - 45, top: initTop - 45 }, {left:-250, top:200 }]}, ease: Cubic.easeOut, onStartParams: [shakeCount], onStart: function( count ) { 
				TweenMax.to( $("#pastilha-" + count.toString()) , .5, {css:{ alpha: 1 }});
			}});
			/*TweenMax.to( target , 2, {css:{ top:"450px" , alpha: 0 }, ease: Cubic.easeOut, onStartParams: [shakeCount], onStart: function( count ) { 
				TweenMax.to( $("#pastilha-" + count.toString()) , .5, {css:{ alpha: 1 }});
			}});*/
			
		} else { 
			
			TweenMax.to( $(".jogar-novamente") , 1, { css: { alpha: 1 }});
			
		}
	}
	
	function resetPills()
	{
		var delayIntro = .1;
		for(var i = 1; i <= totalPills; i++)
		{
			TweenMax.to( $("#pastilha-" + i.toString()) , .5, {css:{ alpha: 0 }});
			TweenMax.to( $("#pastilha-cai-" + i.toString()) , .5, {css:{ alpha: 1 , top: pillsProperties[i].top , left: pillsProperties[i].left } , delay: delayIntro * i});
		}
		shakeCount = 0;
		TweenMax.to( $(".jogar-novamente") , 1, { css: { alpha: 0 }});
	}
	$(".jogar-novamente").click( function(e) { 
		resetPills();
		e.preventDefault();
	});

	$.shake({
		debug: "",             // debug div id
		supported: "",  	 // not supported message div
		violence: 2.1,                  // single shake sensitivity
		hf: .6,                        // high-pass filter constant
		shakethreshold: 1,              // number of single shakes required to fire a shake event
		debounce: 200,                 // delay between shake events (in ms)
		callback: function() {
			onShake();
		}
	});
	
});