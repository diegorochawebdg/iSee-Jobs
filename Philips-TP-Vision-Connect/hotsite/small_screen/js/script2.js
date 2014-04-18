function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function(){
	
	var clickedItem = "";
	
	function openPage() 
	{
		if(getParameterByName("page"))
		{
			$(".features-box").fadeOut(0, function(){
				$(".features-box ul li").hide();
				$(".features-box").fadeIn()
				$("#" + getParameterByName("page")).fadeIn();
			});
		}
		 	
	}
	
	openPage();
	// alert("page: " + getParameterByName("page"));
	
	$('#thumbs').tinycarousel({duration: 1000});
	
	$("#usb-img, #usb-txt").click(function(e) {
		
		if(clickedItem != "usb")
		{
			 $(".features-box").fadeOut(400, function(){
				$(".features-box ul li").hide();
				$(".features-box").fadeIn()
				$("#usb").fadeIn();
			});
			
			clickedItem = "usb";
			
		}
	
    });
	
	$("#clear-sound-img, #clear-sound-txt").click(function(e) {
        $(".features-box").fadeOut(400, function(){
			$(".features-box ul li").hide();
			$(".features-box").fadeIn();
			$("#clear-sound").fadeIn();
		});
    });
	
	$("#perfect-motion-img, #perfect-motion-txt").click(function(e) {
        $(".features-box").fadeOut(400, function(){
			$(".features-box ul li").hide();
			$(".features-box").fadeIn()
			$("#perfect-motion").fadeIn();
		});
    });
	
	$("#hdmi-img, #hdmi-txt").click(function(e) {
        $(".features-box").fadeOut(400, function(){
			$(".features-box ul li").hide();
			$(".features-box").fadeIn()
			$("#hdmi").fadeIn();
		});
    });
	
	$("#dtv-img, #dtv-txt").click(function(e) {
        $(".features-box").fadeOut(400, function(){
			$(".features-box ul li").hide();
			$(".features-box").fadeIn()
			$("#dtv").fadeIn();
		});
    });
	
	$("#full-hd-img, #full-hd-txt").click(function(e) {
        $(".features-box").fadeOut(400, function(){
			$(".features-box ul li").hide();
			$(".features-box").fadeIn()
			$("#full-hd").fadeIn();
		});
    });
	$("#usb-img, #usb-txt, #clear-sound-img, #clear-sound-txt, #perfect-motion-img, #perfect-motion-txt, #hdmi-img, #hdmi-txt, #hdmi-img, #hdmi-txt, #dtv-img, #dtv-txt, #full-hd-img, #full-hd-txt").hover(function(e) {
        $(this).css("cursor","pointer");
    });
	$("#nav .item-img, .next, .prev").hover(function(e) {
        $(this).animate({opacity:0.7}, 300);
    }, function(){
		$(this).animate({opacity:1}, 300);
	});
});
function escondeAtual()
{
	$(".features-box").fadeOut(400);	
}
function mostraAtual()
{
	$(".features-box").delay(1000).fadeIn();
}
