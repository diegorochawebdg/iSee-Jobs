package  {
	
	import flash.display.MovieClip;
	import com.greensock.TweenMax;
	import com.greensock.easing.Strong;
	import flash.events.MouseEvent;
	import flash.events.Event;
	import flash.system.Security;
	import flash.display.Stage;
	import com.google.analytics.GATracker;
	import flash.events.ProgressEvent;
	import flash.ui.ContextMenu;
	
	public class CafeteiraMain extends MovieClip {

		// objetos no stage
		public var menu		:MovieClip;
		public var tela		:Tela;
		public var targetMC	:MovieClip;
		public var preloader	:Preloader;
		
		public var _stage	:Stage;
		
		
		// variveis
		private var menu_items	:Array = new Array();
		private var oldTela		:Tela;
		private var _clickedItem:String;
		private var gaTracker	:GATracker;
		
		public function CafeteiraMain() {
			
			
			// The player SWF file on www.youtube.com needs to communicate with your host
			// SWF file. Your code must call Security.allowDomain() to allow this
			// communication.
			//Security.allowDomain("http://www.youtube.com");
			//Security.allowDomain("http://s.ytimg.com");
			Security.allowDomain("youtube.com","http://youtube.com","www.youtube.com");
			
			var cMenu:ContextMenu = new ContextMenu();
			cMenu.hideBuiltInItems();
			
			this.contextMenu = cMenu;
			
			preloader = new Preloader();
			preloader.x = 0;
			preloader.y = 400;
			addChild( preloader );
			
			this.loaderInfo.addEventListener( ProgressEvent.PROGRESS , loadingEventHandler );
			
		}
		
		private function loadingEventHandler(e:ProgressEvent):void 
		{
			var loaded:Number = e.bytesLoaded;
			var total:Number  = e.bytesTotal;
			var pct:Number = ((e.bytesLoaded / e.bytesTotal ) );
				
			trace("pct: " + pct );
			
			preloader.bar.scaleX = pct;
			preloader.pct.text   = String( Math.round(pct * 100).toString() + "%" );
			preloader.pct.x      = preloader.bar.x + preloader.bar.width - preloader.pct.textWidth;
			
			//preloader.pct.text = "BOB NELSO";
			
			
			if( loaded == total )
			{
				
				this.loaderInfo.removeEventListener( ProgressEvent.PROGRESS , loadingEventHandler );
				TweenMax.to( preloader, 1, { autoAlpha: 0, onComplete: initSite });
				
			} 
	
		}
		
		
		private function initSite():void 
		{
			removeChild( preloader );
			
			// google analytics
			gaTracker =  new GATracker( this , "UA-32737410-32" , "AS3", false );
			
			_stage = stage;
			
			targetMC = new MovieClip();
			addChild( targetMC );
			
			menu = new Menu();
			menu.x = 864;
			addChild( menu );
			
			// constructor code
			menu_items = [menu.botao1, menu.botao2, menu.botao3, menu.botao4, menu.botao5,  menu.botao6];
			TweenMax.allTo( menu_items, 0, { alpha: .5 });
			
			var menuOver:MovieClip;
			for(var i:int = 0; i < menu_items.length; i++)
			{
				menuOver = menu_items[i] as MovieClip;
				menuOver.over.mouseEnabled = false;
				menuOver.buttonMode = true;
				menuOver.addEventListener(MouseEvent.MOUSE_OVER , overMenuEventHandler );
				menuOver.addEventListener(MouseEvent.MOUSE_OUT  , outMenuEventHandler );
				menuOver.addEventListener(MouseEvent.CLICK     , clickMenuEventHandler );
			}
			
			// TweenMax.to( tela1.maskMC, 1, { y: 0, ease: Strong.easeOut });
			
			tela = new Tela1();
			targetMC.addChild( tela );
			tela.init( false );
		}
		
		private function outMenuEventHandler(e:MouseEvent):void 
		{ 
			var menuOver:MovieClip;
			for(var i:int = 0; i < menu_items.length; i++)
			{
				menuOver = menu_items[i] as MovieClip;
				TweenMax.to( menuOver.over , 1, { ease: Strong.easeOut , x: 183 });
				TweenMax.to( menuOver , 1, { ease: Strong.easeOut , alpha: .5 });
			}
			
		}
		
		private function clickMenuEventHandler(e:MouseEvent):void 
		{ 
			clickItem( e.target.name );
		}
		
		private function overMenuEventHandler(e:MouseEvent):void 
		{ 
			overMenu( e.target.name );
		}
		
		public function overMenu( menu:String ):void 
		{
			// TweenMax.allTo( menu_items, .5, { alpha: .5 });
			
			var menuEscolhido:MovieClip;
			var menuOver:MovieClip;
			for(var i:int = 0; i < menu_items.length; i++)
			{
				menuOver = menu_items[i] as MovieClip;
				if(menuOver.name == menu) { 
					
					menuEscolhido = menuOver;
					TweenMax.to( menuEscolhido.over , 1, { ease: Strong.easeOut , x: -51 });
					TweenMax.to( menuEscolhido , 1, { ease: Strong.easeOut , alpha: 1 });
				
				} else { 
					
					TweenMax.to( menuOver.over , 1, { ease: Strong.easeOut , x: 183 });
					TweenMax.to( menuOver , 1, { ease: Strong.easeOut , alpha: .5 });
				} 
			}
			
			// TweenMax.to( menuEscolhido , .5, { alpha: 1 });
			
			
		}
		
		
		public function telaTransitionComplete(e:Event):void 
		{
			for(var i:int = 0; i < targetMC.numChildren; i++)
			{
				var telaItem:Tela = targetMC.getChildAt(i) as Tela;
				if(telaItem != tela) targetMC.removeChildAt( i );
			}
			
			trace("complete " + targetMC.numChildren);
			// targetMC.removeChild( oldTela );
		}
		
		public function clickItem( item:String ):void 
		{ 
			
			if(_clickedItem == item) return;
			
			if(tela.toString() == "[object Tela3]")
			{ 
				Tela3(tela).stopVideo();
			}
			
			
			trace("item clicado eh: " + item );
			_clickedItem = item;
			oldTela = tela;
			switch( item ) 
			{
				case "botao1":
					tela = new Tela1();
					gaTracker.trackPageview( "/verdadeiro-cappucino-italiano" );
				break;
				
				case "botao2":
					tela = new Tela2();
					gaTracker.trackPageview( "/do-seu-jeito" );
				break;
				
				case "botao3":
					tela = new Tela3();
					gaTracker.trackPageview( "/assista-o-video" );
				break;
				
				case "botao4":
					tela = new Tela4();
					gaTracker.trackPageview( "/capacidade" );
				break;
				
				case "botao5":
					tela = new Tela5();
					gaTracker.trackPageview( "/praticidade-e-estilo" );
				break;
				
				case "botao6":
					tela = new Tela6();
					gaTracker.trackPageview( "/especificacoes" );
				break;
				
			}
			
			targetMC.addChild( tela );
			tela.init( true );
			tela.addEventListener(Event.COMPLETE , telaTransitionComplete );
			
		}
	}
	
	
	
}
