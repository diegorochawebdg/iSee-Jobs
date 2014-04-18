package  {
	import flash.display.SimpleButton;
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import com.greensock.TweenMax;
	import com.greensock.easing.Strong;
	import flash.net.navigateToURL;
	import flash.net.URLRequest;
	import com.google.analytics.GATracker;
	
	public class Tela6 extends Tela {
		
		private var btn_next		:SimpleButton;
		private var btn_prev		:SimpleButton;
		private var galeria_btn		:SimpleButton;
		private var galeria_mini	:MovieClip;
		private var galeria			:MovieClip;
		private var btn_imprimir	:SimpleButton;
		private var btn_manual		:SimpleButton;
		
		private var currentPhotoID	:int = 0;
		private var initX			:Number;
		private var gaTracker		:GATracker;
		
		public function Tela6() {
			// constructor code
			
			super();
			
			btn_next = asset.next;
			btn_prev = asset.prev;
			galeria_btn = asset.galeria_btn;
			galeria_mini = asset.galeria_mini;
			galeria		 = asset.galeria;
			btn_imprimir = asset.imprimir;
			btn_manual	 = asset.manual;
			
			TweenMax.to( galeria , 0, { autoAlpha: 0 });
			
			initX = galeria_mini.minis.x;
			
			galeria.bg.addEventListener( MouseEvent.CLICK , closePhoto );
			galeria.fechar_btn.addEventListener( MouseEvent.CLICK , closePhoto );
			
			btn_next.addEventListener(MouseEvent.CLICK , clickNext );
			btn_prev.addEventListener(MouseEvent.CLICK , clickPrev );
			galeria_btn.addEventListener(MouseEvent.CLICK , clickPhoto );
			
			btn_imprimir.addEventListener(MouseEvent.CLICK , clickImprimir );
			btn_manual.addEventListener(MouseEvent.CLICK , clickManual );
			
			// google analytics
			//gaTracker =  new GATracker( CafeteiraMain._stage , "UA-32737410-32" , "AS3", false );
		}
		
		private function clickManual(e:MouseEvent):void 
		{
			trace("manual clicado");
			//gaTracker.trackPageview( "/especificacoes/baixar-manual" );
			navigateToURL( new URLRequest("http://www.isee.com.br/webdrive/philips/maquina_cafe_syntia_cappuccinatore_hd8838/manual.pdf") , "_blank");
		}
		
		
		private function clickImprimir(e:MouseEvent):void 
		{
			//gaTracker.trackPageview( "/especificacoes/imprimir" );
			navigateToURL( new URLRequest("http://www.isee.com.br/webdrive/philips/maquina_cafe_syntia_cappuccinatore_hd8838/print.jpg") , "_blank");
		}
		
		private function closePhoto(e:MouseEvent):void 
		{
			TweenMax.to( galeria , .5, { autoAlpha: 0 });
		}
		
		private function clickPhoto(e:MouseEvent):void 
		{
			galeria.gotoAndStop( currentPhotoID + 1 );
			TweenMax.to( galeria , .5, { autoAlpha: 1 });
		}
		
		private function clickNext(e:MouseEvent):void 
		{
			if(currentPhotoID < 4) currentPhotoID++;
			//else currentPhotoID = 0;
			
			var calcX:Number = initX - (306 * currentPhotoID);
			TweenMax.to( galeria_mini.minis, .5, { x: calcX, ease: Strong.easeOut });
		}
		
		private function clickPrev(e:MouseEvent):void 
		{
			if(currentPhotoID > 0) currentPhotoID--;
			//else currentPhotoID = 0;
			
			var calcX:Number = initX + (306 * currentPhotoID * -1);
			trace("currentPhotoID: " + currentPhotoID + " calcX: " + calcX );
			
			TweenMax.to( galeria_mini.minis, .5, { x	: calcX, ease: Strong.easeOut });
		}
		

	}
	
}
