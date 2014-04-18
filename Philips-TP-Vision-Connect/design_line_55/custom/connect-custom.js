/**
	Responsável pela configuração do projeto.
**/
function ConnectCustom()
{
	
	this.init = function(){
		
		/**
			Nome da pasta em que o projeto está hospedado no servidor.
		**/
		$CONNECT_NAME_FOLDER  = "design_line_55/";
		
		/**
			Local onde o projeto foi hospedado no servidor da iSee.
		**/
		$CONNECT_LOCAL_HOSTED = "http://www.philipsconsumerlifestyle.com/";
		
		/**
			ID do analytics para o projeto.
		**/
		$CONNECT_ANALYTICS_ID = "UA-37383714-1";
		
		
		/**
			Para chamar objeto jQuery utilizar a variavel $Connect.
		**/
		
		
		/**
			Animações de entrada e saída dos elmentos nas sections.
		**/
		this.AnimationItens = [ 
									/* Section 1 */
									{ object: $Connect( "#Connect-Section1 .Connect-Content .logo" ) , startingClass: "fadeInLeft s02" , endClass: "fadeOutLeft" },
                                    { object: $Connect( "#Connect-Section1 .Connect-Content .titles" ) , startingClass: "fadeInDown s03" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section1 .Connect-Content .vendedor-txt" ) , startingClass: "fadeInRight s04" , endClass: "fadeOutLeft" },
									
									/* Section 2 */
									{ object: $Connect( "#Connect-Section2 .Connect-Content .txts" ) , startingClass: "fadeInDown s02 t05" , endClass: "fadeOutUp" },
									/* Section 3 */
									{ object: $Connect( "#Connect-Section3 .Connect-Content .box" ) , startingClass: "fadeInTop s02" , endClass: "fadeOutDown" },
                                    /* Section 4 */
									{ object: $Connect( "#Connect-Section4 .Connect-Content .box" ) , startingClass: "fadeInLeft s02 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .link-video" ) , startingClass: "fadeInRight s03" , endClass: "fadeOutLeft" },
									/* Section 5 */
									{ object: $Connect( "#Connect-Section5 .Connect-Content .box" ) , startingClass: "fadeInDown s02 t05" , endClass: "fadeOutUp" },
									/* Section 6 */
									{ object: $Connect( "#Connect-Section6 .Connect-Content .box" ) , startingClass: "fadeInLeft s02 t05" , endClass: "fadeOutLeft" },
                                    /* Section 7 */
									{ object: $Connect( "#Connect-Section7 .Connect-Content .box" ) , startingClass: "fadeInRight s02 t05" , endClass: "fadeOutLeft" },
                                    { object: $Connect( "#Connect-Section7 .Connect-Content img" ) , startingClass: "fadeInLeft s02 t05" , endClass: "fadeOutRight" }
							 ];
							 
		/**
			Chamada do vídeo do YouTube.
		**/
		ConnectController.playerVideo( [ "0g2ghjS6JvA" ], 686, 419 );
		
        //Posição da instalação da TV
        function bgsInstalacao(){
            $Connect("#Connect-Container #Connect-Section3 .img1, #Connect-Container #Connect-Section3 .img2, #Connect-Container #Connect-Section3 .img3, ").fadeOut(500);
            $Connect("#Connect-Container #Connect-Section3 *").removeClass("selected");
        }
        
        $Connect("#Connect-Container #Connect-Section3 li.item1").click(function(e){
            bgsInstalacao();
            $Connect("#Connect-Container #Connect-Section3 .img1").fadeIn(500);
            $Connect(this).addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section3 li.item2").click(function(e){
            bgsInstalacao();
            $Connect("#Connect-Container #Connect-Section3 .img2").fadeIn(500);
            $Connect(this).addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section3 li.item3").click(function(e){
            bgsInstalacao();
            $Connect("#Connect-Container #Connect-Section3 .img3").fadeIn(500);
            $Connect(this).addClass("selected");
        });
        
        //Imagens que transbordam da tela
        function features(){
            $Connect("#Connect-Container #Connect-Section4 p").fadeOut(100);
            $Connect("#Connect-Container #Connect-Section4 .box a").removeClass("selected");
        }
        
        $Connect("#Connect-Container #Connect-Section4 .box .item1").click(function(e){
            e.preventDefault();
            features();
            $Connect("#Connect-Container #Connect-Section4 p.item1").delay(100).fadeIn(100);
            $Connect(this).addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section4 .box .item2").click(function(e){
            e.preventDefault();
            features();
            $Connect("#Connect-Container #Connect-Section4 p.item2").delay(100).fadeIn(100);
            $Connect(this).addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section4 .box .item3").click(function(e){
            e.preventDefault();
            features();
            $Connect("#Connect-Container #Connect-Section4 p.item3").delay(100).fadeIn(100);
            $Connect(this).addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section4 .box .item4").click(function(e){
            e.preventDefault();
            features();
            $Connect("#Connect-Container #Connect-Section4 p.item4").delay(100).fadeIn(100);
            $Connect(this).addClass("selected");
        });
        
        //Conecte-se com o mundo
        function conecte_se(){
            $Connect("#Connect-Container #Connect-Section5 .content .content1, #Connect-Container #Connect-Section5 .content .content2, #Connect-Container #Connect-Section5 .content .content3").fadeOut(100);
            $Connect("#Connect-Container #Connect-Section5 .features2 li").removeClass("selected");
        }
        
        $Connect("#Connect-Container #Connect-Section5 .features2 li .item1").click(function(e){
            e.preventDefault();
            conecte_se();
            $Connect("#Connect-Container #Connect-Section5 .content .content1").delay(100).fadeIn(100);
            $Connect(this).parent().addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section5 .features2 li .item2").click(function(e){
            e.preventDefault();
            conecte_se();
            $Connect("#Connect-Container #Connect-Section5 .content .content2").delay(100).fadeIn(100);
            $Connect(this).parent().addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section5 .features2 li .item3").click(function(e){
            e.preventDefault();
            conecte_se();
            $Connect("#Connect-Container #Connect-Section5 .content .content3").delay(100).fadeIn(100);
            $Connect(this).parent().addClass("selected");
        });
        
        //Features 3
        function anotherFeatures(){
            $Connect("#Connect-Container #Connect-Section6 .box .content div").fadeOut(100);
            $Connect("#Connect-Container #Connect-Section6 .box li").removeClass("selected");
        }
        
        $Connect("#Connect-Container #Connect-Section6 .box li .item1").click(function(e){
            e.preventDefault();
            anotherFeatures();
            $Connect("#Connect-Container #Connect-Section6 .box .content .item1").delay(100).fadeIn(100);
            $Connect(this).parent().addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section6 .box li .item2").click(function(e){
            e.preventDefault();
            anotherFeatures();
            $Connect("#Connect-Container #Connect-Section6 .box .content .item2").delay(100).fadeIn(100);
            $Connect(this).parent().addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section6 .box li .item3").click(function(e){
            e.preventDefault();
            anotherFeatures();
            $Connect("#Connect-Container #Connect-Section6 .box .content .item3").delay(100).fadeIn(100);
            $Connect(this).parent().addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section6 .box li .item4").click(function(e){
            e.preventDefault();
            anotherFeatures();
            $Connect("#Connect-Container #Connect-Section6 .box .content .item4").delay(100).fadeIn(100);
            $Connect(this).parent().addClass("selected");
        });
        $Connect("#Connect-Container #Connect-Section6 .box li .item5").click(function(e){
            e.preventDefault();
            anotherFeatures();
            $Connect("#Connect-Container #Connect-Section6 .box .content .item5").delay(100).fadeIn(100);
            $Connect(this).parent().addClass("selected");
        });
        
        //Vídeo
        $Connect("#Connect-Container #Connect-Section4 .link-video a").click(function(e){
            e.preventDefault();
            $Connect("#Connect-Container .video-lightbox").fadeIn(300, function(e){
                $Connect("#Connect-Container .video-lightbox .player").append('<iframe width="740" height="555" src="//www.youtube.com/embed/Fr4lSsezHUM" frameborder="0" allowfullscreen></iframe>');
            });
        });
        $Connect("#Connect-Container .video-lightbox .player .fechar, #Connect-Container .video-lightbox").click(function(e){
            e.preventDefault();
            $Connect("#Connect-Container .video-lightbox").fadeOut(300, function(e){
                $Connect("#Connect-Container .video-lightbox .player").html('<a href="#" title="Fechar" class="fechar"></a>');
            });
        });
        
        //Controle
        $Connect("#Connect-Container #Connect-Section5 .content .content2 img").click(function(e){
            $Connect("#Connect-Container .controle-lightbox").fadeIn(300);
        });
        $Connect("#Connect-Container .controle-lightbox .fechar, #Connect-Container .controle-lightbox").click(function(e){
            e.preventDefault();
            $Connect("#Connect-Container .controle-lightbox").fadeOut(300);
        });
		
	}//ConnectCustom
	
}//ConnectCustom