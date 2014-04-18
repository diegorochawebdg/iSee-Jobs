/**
	Responsável pela configuração do projeto.
**/
function ConnectCustom()
{
	
	this.init = function(){
		
		/**
			Nome da pasta em que o projeto está hospedado no servidor.
		**/
		$CONNECT_NAME_FOLDER  = "panelas_solar/";
		
		/**
			Local onde o projeto foi hospedado no servidor da iSee.
		**/
		$CONNECT_LOCAL_HOSTED = "http://www.iseeconnect.com.br/clientes/tramontina/";
		
		/**
			ID do analytics para o projeto.
		**/
		$CONNECT_ANALYTICS_ID = "UA-37934533-3";
		
		
		/**
			Para chamar objeto jQuery utilizar a variavel $Connect.
		**/
		$Connect("#Connect-Section1 .Connect-Content .proxima-pagina").click(function(e){
            e.preventDefault();
            $Connect("a[href$='#Connect-Section2']").click();
        });
        $Connect("#Connect-Section2 .Connect-Content .proxima-pagina").click(function(e){
            e.preventDefault();
            $Connect("a[href$='#Connect-Section3']").click();
        });
        $Connect("#Connect-Section3 .Connect-Content .proxima-pagina").click(function(e){
            e.preventDefault();
            $Connect("a[href$='#Connect-Section4']").click();
        });
        $Connect("#Connect-Section4 .Connect-Content .proxima-pagina").click(function(e){
            e.preventDefault();
            $Connect("a[href$='#Connect-Section5']").click();
        });
		
		/**
			Animações de entrada e saída dos elmentos nas sections.
		**/
		this.AnimationItens = [ 
									/* Section 1 */
									{ object: $Connect( "#Connect-Section1 .Connect-Content .logo" ) , startingClass: "fadeInDown s02 t05" , endClass: "fadeOutUp" },
									{ object: $Connect( "#Connect-Section1 .Connect-Content .hgroup" ) , startingClass: "fadeInDown s04 t10" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section1 .Connect-Content p" ) , startingClass: "fadeInUp s08 t10" , endClass: "fadeOutDown" },
                                    { object: $Connect( "#Connect-Section1 .Connect-Content .garantia" ) , startingClass: "rotateInDownRight s08 t10" , endClass: "rotateOutUpRight" },
                                    
                                    /* Section 2 */
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .tampa" ) , startingClass: " fadeInDownBig s10 t20" , endClass: "fadeOutUpBig" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .tomate1" ) , startingClass: " fadeInDownBig s02 t25" , endClass: "fadeOutUpBig" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .tomate2" ) , startingClass: " fadeInDownBig s03 t25" , endClass: "fadeOutUpBig" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .tomate3" ) , startingClass: " fadeInDownBig s04 t25" , endClass: "fadeOutUpBig" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .pimenta" ) , startingClass: " fadeInDownBig s05 t25" , endClass: "fadeOutUpBig" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .cebola1" ) , startingClass: " fadeInDownBig s06 t25" , endClass: "fadeOutUpBig" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .cebola2" ) , startingClass: " fadeInDownBig s07 t25" , endClass: "fadeOutUpBig" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .saida-vapor, #Connect-Section2 .Connect-Content .linha-vapor, #Connect-Section2 .Connect-Content .vapor" ) , startingClass: "fadeIn s40 t05" , endClass: "fadeOut" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .txts" ) , startingClass: " fadeInDown s45 t10" , endClass: "fadeInUp" },
                                    
            
                                    /* Section 3 */
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .hgroup" ) , startingClass: "fadeInDown s00 t10" , endClass: "fadeOut" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .inox1" ) , startingClass: "fadeInUp s04 t10" , endClass: "fadeOut" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .aluminio" ) , startingClass: "fadeInUp s12 t10" , endClass: "fadeOut" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .inox2" ) , startingClass: "fadeInUp s20 t10" , endClass: "fadeOut" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content p" ) , startingClass: "fadeInUp s25 t10" , endClass: "fadeOut" },
            
                                    /* Section 4 */
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .design" ) , startingClass: "fadeInUp s02 t10" , endClass: "fadeOut" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .item1" ) , startingClass: "fadeInUp s05 t10" , endClass: "fadeOut" },
                                   { object: $Connect( "#Connect-Section4 .Connect-Content .item2" ) , startingClass: "fadeInUp s07 t10" , endClass: "fadeOut" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .item3" ) , startingClass: "fadeInUp s09 t10" , endClass: "fadeOut" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .item4" ) , startingClass: "fadeInUp s11 t10" , endClass: "fadeOut" },
            
                                    /* Section 6 */
                                    { object: $Connect( "#Connect-Section6 .Connect-Content h3" ) , startingClass: "fadeInDown s00 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item1" ) , startingClass: "fadeInDown s03 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item2" ) , startingClass: "fadeInDown s05 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item3" ) , startingClass: "fadeInDown s07 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item4" ) , startingClass: "fadeInDown s09 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item5" ) , startingClass: "fadeInDown s11 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item6" ) , startingClass: "fadeInDown s13 t05" , endClass: "fadeOutUp" },
							 ];
							 
		
		
	}//ConnectCustom
	
}//ConnectCustom