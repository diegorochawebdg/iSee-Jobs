/**
	Responsável pela configuração do projeto.
**/
function ConnectCustom()
{
	
	this.init = function(){
		
		/**
			Nome da pasta em que o projeto está hospedado no servidor.
		**/
		$CONNECT_NAME_FOLDER  = "mini_system_nx5/";
		
		/**
			Local onde o projeto foi hospedado no servidor da iSee.
		**/
		$CONNECT_LOCAL_HOSTED = "http://www.philipsconsumerlifestyle.com/";
		
		/**
			ID do analytics para o projeto.
		**/
		$CONNECT_ANALYTICS_ID = "UA-37482913-1";
		
		
		/**
			Para chamar objeto jQuery utilizar a variavel $Connect.
		**/
		
		
		/**
			Animações de entrada e saída dos elmentos nas sections.
		**/
		this.AnimationItens = [ 
									/* Section 1 */
									{ object: $Connect( "#Connect-Section1 .Connect-Content .logo" ) , startingClass: "fadeInLeft s02 t05" , endClass: "fadeOutLeft" },
									{ object: $Connect( "#Connect-Section1 .Connect-Content h2" ) , startingClass: "fadeInLeft s02 t05" , endClass: "fadeOutLeft" },
                                    { object: $Connect( "#Connect-Section1 .Connect-Content .vendedor-txt img" ) , startingClass: "fadeInUp s04 t05" , endClass: "fadeOutDown" },
                                    { object: $Connect( "#Connect-Section1 .Connect-Content .vendedor-txt p" ) , startingClass: "fadeInUp s06 t05" , endClass: "fadeOutDown" },
                                    { object: $Connect( "#Connect-Section1 .Connect-Content .animate" ) , startingClass: "rotateIn s04 t15" , endClass: "rotateOut" },
                                    
                                    /* Section 2 */
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .item1" ) , startingClass: "fadeInUp s02 t05" , endClass: "fadeOutDown" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .item2" ) , startingClass: "fadeInUp s04 t05" , endClass: "fadeOutDown" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .item3" ) , startingClass: "fadeInUp s06 t05" , endClass: "fadeOutDown" },
                                    { object: $Connect( "#Connect-Section2 .Connect-Content .item4" ) , startingClass: "fadeInUp s08 t05" , endClass: "fadeOutDown" },
            
                                    /* Section 3 */
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts h3" ) , startingClass: "fadeInLeft s02 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts h4.item1" ) , startingClass: "fadeInLeft s03 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts p.item1" ) , startingClass: "fadeInLeft s04 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts h4.item2" ) , startingClass: "fadeInLeft s05 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts p.item2" ) , startingClass: "fadeInLeft s06 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts h4.item3" ) , startingClass: "fadeInLeft s07 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts p.item3" ) , startingClass: "fadeInLeft s08 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts h4.item4" ) , startingClass: "fadeInLeft s09 t05" , endClass: "fadeOutRight" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .main-txts h4.item5" ) , startingClass: "fadeInLeft s10 t05" , endClass: "fadeOutRight" },
            
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .uma-explosao-som-cores h3" ) , startingClass: "fadeInUp s03 t05" , endClass: "fadeOutDown" },
                                    { object: $Connect( "#Connect-Section3 .Connect-Content .uma-explosao-som-cores p" ) , startingClass: "fadeInUp s05 t05" , endClass: "fadeOutDown" },
            
                                     { object: $Connect( "#Connect-Section3 .Connect-Content .animation" ) , startingClass: "rotateIn s03 t10" , endClass: "rotateOut" },
            
                                    /* Section 4 */
                                    { object: $Connect( "#Connect-Section4 .Connect-Content h3" ) , startingClass: "fadeInDown s02 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .item1" ) , startingClass: "fadeInDown s04 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .item2" ) , startingClass: "fadeInDown s06 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .item3" ) , startingClass: "fadeInDown s08 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section4 .Connect-Content .item4" ) , startingClass: "fadeInDown s10 t05" , endClass: "fadeOutUp" },
            
                                    /* Section 5 */
                                    { object: $Connect( "#Connect-Section5 .Connect-Content h3" ) , startingClass: "fadeInDown s02 t15" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section5 .Connect-Content iframe" ) , startingClass: "rollIn s02 t05" , endClass: "rollOut" },
            
                                    /* Section 6 */
                                    { object: $Connect( "#Connect-Section6 .Connect-Content h3" ) , startingClass: "fadeInDown s02 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item1" ) , startingClass: "fadeInDown s03 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item2" ) , startingClass: "fadeInDown s04 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item3" ) , startingClass: "fadeInDown s05 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item4" ) , startingClass: "fadeInDown s06 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .item5" ) , startingClass: "fadeInDown s07 t05" , endClass: "fadeOutUp" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .caixa-som1" ) , startingClass: "bounceInDown s09 t10" , endClass: "bounceOut" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .caixa-som2" ) , startingClass: "bounceInDown s10 t10" , endClass: "bounceOut" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .medidas.first" ) , startingClass: "fadeInRightBig s11 t10" , endClass: "fadeOutRightBig" },
                                    { object: $Connect( "#Connect-Section6 .Connect-Content .medidas.second" ) , startingClass: "fadeInLeftBig s09 t10" , endClass: "fadeOutLeftBig" }
							 ];
							 
		
		
	}//ConnectCustom
	
}//ConnectCustom