package br.com.philips.hotsites.andersonsilva.pages
{
	import br.com.philips.hotsites.andersonsilva.events.CarouselEvent;
	import br.com.philips.hotsites.andersonsilva.events.SaibaMaisEvent;
	import br.com.philips.hotsites.andersonsilva.ui.Carousel;
	import br.com.philips.hotsites.andersonsilva.ui.DestaquesHome;
	
	import com.greensock.TweenMax;
	import com.greensock.easing.Strong;
	import com.gugateider.framework.pages.Page;
	
	import flash.display.Shape;
	import flash.display.Sprite;
	import flash.events.Event;
	
	public class PageHome extends Page
	{
		
		private var destaques:DestaquesHome;
		public  var carousel:Carousel;
		private var maskDestaques:Shape;
		private var maskCarousel:Shape
		
		public function PageHome()
		{
			
			
			super();

			TweenMax.delayedCall( 1 , buildDestaques );
			TweenMax.delayedCall( .7 , buildCarousel );
			
			
		}
		
		private function buildCarousel():void 
		{
			carousel = new Carousel();
			carousel.addEventListener( CarouselEvent.CAROUSEL_NAVIGATE , carouselNavigateEventHandler );
			carousel.addEventListener( SaibaMaisEvent .CLICK, saibaMaisClickHandler );
			addChild( carousel );
			maskCarousel = new Shape();
			maskCarousel.graphics.beginFill(0xFF0000 , 1 );
			maskCarousel.graphics.drawRect( 0 , 0, 1000 , 504 );
			maskCarousel.graphics.endFill();
			addChild( maskCarousel );
			carousel.mask = maskCarousel;
		}
		
		private function saibaMaisClickHandler(e:SaibaMaisEvent):void 
		{
			dispatchEvent( new SaibaMaisEvent( SaibaMaisEvent.CLICK , e.id ));
		}
		
		private function carouselNavigateEventHandler(e:CarouselEvent):void 
		{
			
			destaques.initDestaques( e._item.id );
			trace("select " + e._item.id );
			dispatchEvent( new CarouselEvent( e.type , e._item ));
		}
		
		private function buildDestaques():void 
		{
			
			destaques = new DestaquesHome();
			//destaques.initDestaques();
			addChild( destaques );
			
			maskDestaques = new Shape();
			maskDestaques.graphics.beginFill(0xFF0000 , 1 );
			maskDestaques.graphics.drawRect( 0 , 0, 1000 , 504 );
			maskDestaques.graphics.endFill();
			addChild( maskDestaques );
			destaques.mask = maskDestaques;
			
		}
		
		public function animateIn():void 
		{
			TweenMax.to( destaques, .7, { y: 0, ease: Strong.easeOut, delay: .5 });
			carousel.animateIn();
			TweenMax.delayedCall(1.5, function():void { 
				trace("complete animateIn!");
				// dispatchEvent( new Event(Event.COMPLETE) );
			});
		}
		
		public function animateOut():void 
		{
			TweenMax.to( destaques, .7, { y: 504, ease: Strong.easeOut, delay: .5 });
			carousel.animateOut();
			TweenMax.delayedCall(1.5, function():void { 
				trace("complete!");
				dispatchEvent( new Event(Event.COMPLETE) );
			});
		}
		
		
	}
}