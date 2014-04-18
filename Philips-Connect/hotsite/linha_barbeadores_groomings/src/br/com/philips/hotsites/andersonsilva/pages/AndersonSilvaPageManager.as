package br.com.philips.hotsites.andersonsilva.pages
{
	import br.com.philips.hotsites.andersonsilva.analytics.PhilipsGATracker;
	import br.com.philips.hotsites.andersonsilva.events.CarouselEvent;
	import br.com.philips.hotsites.andersonsilva.events.MenuEvent;
	import br.com.philips.hotsites.andersonsilva.events.SaibaMaisEvent;
	
	import com.google.analytics.debug._Style;
	import com.greensock.TweenMax;
	import com.greensock.easing.Strong;
	import com.greensock.loading.LoaderMax;
	import com.greensock.loading.SWFLoader;
	import com.gugateider.framework.data.SiteData;
	import com.gugateider.framework.pages.Page;
	import com.gugateider.framework.pages.PageManager;
	
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	public class AndersonSilvaPageManager extends PageManager
	{
		
		// constantes
		public static const PAGE_INIT	:String = "pageInit";
		public static const PAGE_REMOVE	:String = "pageRemove";
		
		// objetos no palco
		private var currentPage			:Page;
		private var pageContainer		:Sprite;
		private var pageBGContainer		:MovieClip;
		private var pageMenu			:PageMenu;
		private var pageHome			:PageHome;
		private var pageInterna			:PageInterna;
		private var iconeGarantia		:MovieClip;
		
		// variaveis
		private var currentClickedID	:String;
		
		
		
		/**
		 * Construtor da classe
		 * @param nenhum
		 **/
		public function AndersonSilvaPageManager()
		{
			super();
		}
		
		/**
		 * Função disparada quando o palco estiver pronto para receber os assets
		 * @param none
		 **/ 
		override public function onReady(e:Event):void
		{
			
			// Google Analytics onReady
			// PhilipsGATracker.trackPage( SiteData.instance.XMLDATA.analytics.game_carregado );
			
			
			var libraryLoader:SWFLoader = LoaderMax.getLoader("library") as SWFLoader;
			var bgClass:Class = libraryLoader.getClass("Background"); 
			pageBGContainer  = new bgClass();
			addChild( pageBGContainer );
			
			TweenMax.delayedCall( 2, function():void { 
				
				iconeGarantia.visible = true;
				iconeGarantia.play();
				
			});
			
	
			pageContainer = new Sprite();
			addChild( pageContainer );
			
			pageHome = new PageHome();
			pageHome.addEventListener( CarouselEvent.CAROUSEL_NAVIGATE , carouselNavigateEventHandler );
			pageHome.addEventListener( Event.COMPLETE , pageHomeAnimateOutComplete );
			pageHome.addEventListener( SaibaMaisEvent.CLICK , saibaMaisClickHandler );
			addChild( pageHome );
			
			pageInterna = new PageInterna();
			pageInterna.addEventListener( Event.COMPLETE , pageInternaAnimateOutComplete );
			pageInterna.addEventListener( Event.CHANGE   , pageInternaVoltarEventHandler );
			addChild( pageInterna );
			
			pageMenu = new PageMenu();
			pageMenu.addEventListener( MenuEvent.CLICK , menuItemClickHandler );
			addChild( pageMenu );
			
			var iconeGarantiaClass:Class = LoaderMax.getLoader("library").getClass("IconeGarantia");
			iconeGarantia = new iconeGarantiaClass();
			iconeGarantia.visible = false;
			iconeGarantia.x = 876;
			addChild( iconeGarantia );
			
			currentPage = pageHome;
			
			PhilipsGATracker.trackPage( "/home" );
			
			/*fullScreenButton = SiteData.instance.LIBRARY.getDisplayObject("FullScreenButton") as MovieClip;
			fullScreenButton.buttonMode = true;
			fullScreenButton.addEventListener(MouseEvent.CLICK , toggleFullScreen );
			addChild( fullScreenButton );*/
			
		}
		
		private function saibaMaisClickHandler(e:SaibaMaisEvent):void 
		{
			currentClickedID = e.id;
			
			pageBGContainer.mundo.gotoAndPlay("hide");
			pageHome.animateOut();
			
			pageMenu.makeBlueSaibaMais( currentClickedID );
			
		}
		
		
		private function pageHomeAnimateOutComplete(e:Event):void 
		{
			initInterna();
		}
		
		private function pageInternaAnimateOutComplete(e:Event):void 
		{
			if( currentPage == pageInterna )
			{
				
				initInterna();
			
			} else { 
				
				pageHome.animateIn();
				pageBGContainer.mundo.gotoAndPlay("show");
				
			}
		}
		
		private function pageInternaVoltarEventHandler(e:Event):void 
		{
			currentPage = pageHome;
			pageMenu.disableActivate();
			//pageInterna.animateOut();
			PhilipsGATracker.trackPage( "/voltarHome" );
			trace("voltar clicked!");
		}
		
		private function menuItemClickHandler(e:MenuEvent):void 
		{
			currentClickedID = e.data.id.text();
			trace("Menu clicked: " + currentClickedID );
			
			if( currentPage == pageInterna )
			{
				
				trace("estamos na interna, pageInterna.animateOut()");
				pageInterna.animateOut();
				
			} else { 
				
				
				pageBGContainer.mundo.gotoAndPlay("hide");
				pageHome.animateOut();
				
				//TweenMax.to( pageBGContainer , 1, { autoAlpha: 0 });
				//TweenMax.to( pageHome , 1, { autoAlpha: 0, onComplete: initInterna, onCompleteParams: [e.data.id.text()] });
				
			}
			
			
			// dispatchEvent( new MenuEvent( e.type , e.data )):
		}
		
		private function carouselNavigateEventHandler(e:CarouselEvent):void 
		{
			
			pageMenu.disableAll();
			pageMenu.overMenu( e._item.id );
			
			showHideLogo(e._item.id);
		}
		
		/**
		 * Inicializa a pagina interna 
		 * @param none
		 * 
		 */		
		private function initInterna():void 
		{
			
			pageInterna.initInterna( currentClickedID );
			currentPage = pageInterna;
			
			showHideLogo(currentClickedID);
			// pageMenu.overMenu( currentClickedID , "selected");
			
			PhilipsGATracker.trackPage( "/produto/" + currentClickedID );
			
		}
		
		
		private function showHideLogo(id:String):void 
		{
			// show / hide logo
			if( (getData(id).showLogo.text() == "true") && (iconeGarantia.state == "hidden"))
			{
				
				iconeGarantia.gotoAndPlay("show");
				
			} else if( (getData(id).showLogo.text() == "false") && (iconeGarantia.state == "showing"))
			{
				
				iconeGarantia.gotoAndPlay("hide");
				
			}
		}
		
		
		/**
		 * 
		 *  STATIC METHODS
		 * 
		 **/ 
		
		public static function getIntroDestaques():Array 
		{
			var returnData:Array = new Array();
			var data:XMLList = SiteData.instance.XMLDATA.intro_destaques;
			for(var i:int = 0; i < data.item.length(); i++)
			{
				returnData.push( data.item[i].id );
				
			}
			return returnData;
		}
		
		
		
		public static function getData( id:String ):XMLList 
		{
			var returnData:XMLList;
			var data:XMLList = SiteData.instance.XMLDATA.content.barbeadores;
			for(var i:int = 0; i < data.item.length(); i++)
			{
				if( data.item[i].id.text() == id ) returnData = XMLList(data.item[i]);
				
			}
			data = SiteData.instance.XMLDATA.content.groomings;
			for( i = 0; i < data.item.length(); i++)
				if( data.item[i].id.text() == id ) returnData = XMLList(data.item[i]);
			
			return returnData;
		}
		
		
		public static function getCarouselData( id:String ):XMLList 
		{
			var returnData:XMLList;
			var data:XMLList = SiteData.instance.XMLDATA.content.carousel;
			for(var i:int = 0; i < data.item.length(); i++)
			{
				if( data.item[i].id.text() == id ) returnData = XMLList(data.item[i]);
				
			}
			
			return returnData;
		}
	
		
	}
}