/**
	Responsável pela configuração do projeto.
**/
function ConnectCustom()
{
	
	this.init = function(){
		
		/**
			Nome da pasta em que o projeto está hospedado no servidor.
		**/
		$CONNECT_NAME_FOLDER  = "desktop_idea_centre_b550/";
		
		/**
			Local onde o projeto foi hospedado no servidor da iSee.
		**/
		$CONNECT_LOCAL_HOSTED = "http://www.lenovowebcontent.com/";
		
		/**
			ID do analytics para o projeto.
		**/
		$CONNECT_ANALYTICS_ID = "UA-41615571-1";
		
		
		/**
			Para chamar objeto jQuery utilizar a variavel $Connect.
		**/
        $Connect("#Connect-Container a").click(function(e) {
            if($Connect(this).attr("href")=="#"){
                e.preventDefault();
            }
        });
		$Connect("#Connect-Section1 .Connect-Content .proxima-pagina").click(function(e){
            $Connect("a[href$='#Connect-Section2']").click();
        });
        $Connect("#Connect-Section2 .Connect-Content .proxima-pagina").click(function(e){
            $Connect("a[href$='#Connect-Section3']").click();
        });
        $Connect("#Connect-Section3 .Connect-Content .proxima-pagina").click(function(e){
            $Connect("a[href$='#Connect-Section4']").click();
        });
        $Connect("#Connect-Section4 .Connect-Content .proxima-pagina").click(function(e){
            $Connect("a[href$='#Connect-Section5']").click();
        });
        $Connect("#Connect-Section5 .Connect-Content .proxima-pagina").click(function(e){
            $Connect("a[href$='#Connect-Section6']").click();
        });
        
        $Connect("#Connect-Section1 .Connect-Content .all-in-one").hover(function(e){
            $Connect("#Connect-Section1 .Connect-Content .pc-img").addClass("active");
        }, function(e){
            $Connect("#Connect-Section1 .Connect-Content .pc-img").removeClass("active");
        });
        
        $Connect("#Connect-Section3 .Connect-Content .item1").hover(function(e){
            $Connect("#Connect-Container #Connect-Section3 .painel-traseiro").stop(true, true).fadeIn(200);
        }, function(e){
            $Connect("#Connect-Container #Connect-Section3 .painel-traseiro").stop(true, true).fadeOut(200);
        });
        
        
        
        /*Hover dos itens*/
        var _arr = {"#Connect-Section2 .hotspots .item1":"#Connect-Section2 .hotspots-content .item1", "#Connect-Section2 .hotspots .item2":"#Connect-Section2 .hotspots-content .item2", "#Connect-Section2 .hotspots .item3":"#Connect-Section2 .hotspots-content .item3"};
        
        $Connect.each(_arr, function(ind, val){
            var intervalo = setInterval(function(){
                $Connect(ind).removeClass("animated, fadeInDown");
                clearInterval(intervalo);
            }, 3000);
            $Connect(ind).on("mouseenter", function(e){
                $Connect(val).stop(true, true).fadeIn(250);
            });
            $Connect(ind).on("mouseleave", function(e){
                $Connect(val).fadeOut(250);
            });
        });
        
        var _arr2 = {"#Connect-Section3 .hotspots .item1":"#Connect-Section3 .hotspots-content .item1", "#Connect-Section3 .hotspots .item2":"#Connect-Section3 .hotspots-content .item2"};
        
        $Connect.each(_arr2, function(ind, val){
            var intervalo = setInterval(function(){
                $Connect(ind).removeClass("animated, fadeInDown");
                clearInterval(intervalo);
            }, 3000);
            $Connect(ind).on("mouseenter", function(e){
                $Connect(val).stop(true, true).fadeIn(250);
            });
            $Connect(ind).on("mouseleave", function(e){
                $Connect(val).stop(true, true).fadeOut(250);
            });
        });
        
        var _arr3 = {"#Connect-Section4 .hotspots .item1":"#Connect-Section4 .hotspots-content .item1", "#Connect-Section4 .hotspots .item2":"#Connect-Section4 .hotspots-content .item2", "#Connect-Section4 .hotspots .item3":"#Connect-Section4 .hotspots-content .item3", "#Connect-Section4 .hotspots .item4":"#Connect-Section4 .hotspots-content .item4"};
        
        $Connect.each(_arr3, function(ind, val){
            var intervalo = setInterval(function(){
                $Connect(ind).removeClass("animated, fadeInDown");
                clearInterval(intervalo);
            }, 3000);
            $Connect(ind).on("mouseenter", function(e){
                $Connect(val).stop(true, true).fadeIn(250);
            });
            $Connect(ind).on("mouseleave", function(e){
                $Connect(val).fadeOut(250);
            });
        });
        
        
        /*Fim do Hover dos itens*/
        
        $Connect( "#Connect-Section6 .Connect-Content a" ).hover(function(e){
            $Connect( "#Connect-Section6 .Connect-Content .especificacoes").fadeIn(200);
        }, function(e){
            $Connect( "#Connect-Section6 .Connect-Content .especificacoes").fadeOut(200);
        });
		
		/**
			Animações de entrada e saída dos elmentos nas sections.
		**/
		this.AnimationItens = [ 
									/* Section 1 */
									
                                    
                                    /* Section 2 */
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .hotspots .item1" ) , startingClass: " fadeInDown s04 t10" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .hotspots .item2" ) , startingClass: " fadeInDown s07 t10" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .hotspots .item3" ) , startingClass: " fadeInDown s10 t10" , endClass: "fadeOutUp" },
                                    
            
                                    /* Section 3 */
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .hotspots .item1" ) , startingClass: " fadeInDown s04 t10" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .hotspots .item2" ) , startingClass: " fadeInDown s07 t10" , endClass: "fadeOutUp" },
            
                                    /* Section 4 */
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .hotspots .item1" ) , startingClass: " fadeInDown s04 t10" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .hotspots .item2" ) , startingClass: " fadeInDown s07 t10" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .hotspots .item3" ) , startingClass: " fadeInDown s10 t10" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .hotspots .item4" ) , startingClass: " fadeInDown s10 t10" , endClass: "fadeOutUp" },
            
                                    /* Section 5 */
                                    { object: $Connect( "#Connect-Section5 .Connect-Content h3" ) , startingClass: "fadeInDown s00 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section5 .Connect-Content .txt" ) , startingClass: "fadeInDown s04 t05" , endClass: "fadeOutUp" },
            
                                    /* Section 6 */
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .dimensoes" ) , startingClass: "fadeInDown s00 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .conteudo" ) , startingClass: "fadeInDown s04 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content a" ) , startingClass: "fadeInDown s07 t05" , endClass: "fadeOutUp" },
							 ];
							 
		
		
	}//ConnectCustom
	
}//ConnectCustom