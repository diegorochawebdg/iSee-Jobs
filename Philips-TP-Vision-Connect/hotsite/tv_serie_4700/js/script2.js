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
		$("#slider").easySlider({
			continuous: true
		});
		
		$("#slider a").hover(function(e) {
            $(this).animate({opacity:0.7}, 150);
        }, function(){
			$(this).animate({opacity:1}, 150);
		});
		
		//troca das features
		$("#feature_program").hide();
		$("#feature_hdmi").hide();
		$("#feature_motion").hide();
		$("#feature_youtube").hide();
		$("#feature_clear").hide();
		$("#feature_simply").hide();

		$("#slider li a").click(function() {
			var id = $(this).attr("href");
			$(".esconder").hide();
			$(id).fadeIn();
		});
		
		function openPage() 
		{
			if(getParameterByName("page"))
			{
				$(".esconder").hide();
				 $(" #" + getParameterByName("page")).fadeIn();
			} else { 
				$("#feature_full_led").show();		
			}
				
		}
		
		openPage();
		
		//Video youtube
		$(".box-video").hide();
		$(".btn-voltar").hide();
		$(".btn-assistir").click(function() {
			$(".box-video").fadeIn(200);
			$(".btn-assistir").hide()
			$(".btn-voltar").show();
		});
	});	