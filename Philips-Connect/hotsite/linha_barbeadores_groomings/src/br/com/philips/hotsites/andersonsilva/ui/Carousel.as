package br.com.philips.hotsites.andersonsilva.ui
{
	import br.com.philips.hotsites.andersonsilva.events.CarouselEvent;
	import br.com.philips.hotsites.andersonsilva.events.SaibaMaisEvent;
	import br.com.philips.hotsites.andersonsilva.pages.AndersonSilvaPageManager;
	
	import com.greensock.TweenMax;
	import com.greensock.easing.Strong;
	import com.greensock.loading.LoaderMax;
	import com.gugateider.framework.data.SiteData;
	
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	public class Carousel extends Sprite
	{
		
		private var seta_next:CarouselButton;
		private var seta_prev:CarouselButton;
		private var container:Sprite;
		private var activeItem:CarouselItem;
		private var containerFeatures:CarouselContainerFeatures;
		
		
		private var data:XMLList;
		private var items:Array;
		private var indexes:Array;
		private var _currentIndex:uint = 0;
		
		
		
		
		
		
		public function Carousel()
		{
		
			super();
			
			/*var bmdClass:Class = LoaderMax.getLoader("library").getClass("ImageCarousel");
			var bmp:Bitmap = new Bitmap( new bmdClass() );
			bmp.alpha = .5;
			addChild( bmp );*/
			
			containerFeatures = new CarouselContainerFeatures();
			containerFeatures.addEventListener( Event.SELECT , saibaMaisClickHandler );
			//containerFeatures.mouseEnabled = false;
			
			buildCarousel();
			
			seta_next = new CarouselButton();
			seta_next.x = 926;
			seta_next.y = 267;
			seta_next.visible = false;
			seta_next.addEventListener(MouseEvent.CLICK , paginateNextEventHandler );
			addChild( seta_next );
			
			seta_prev = new CarouselButton();
			seta_prev.x = 560;
			seta_prev.y = 267;
			seta_prev.scaleX = -1;
			seta_prev.visible = false;
			seta_prev.addEventListener(MouseEvent.CLICK , paginatePrevEventHandler );
			addChild( seta_prev );
			
			
			addChild( containerFeatures );
			
			
			
		}
		
		public function get activeItemBitmap():Bitmap 
		{
			return activeItem.image.rawContent as Bitmap;
		}
		
		
		private function saibaMaisClickHandler(e:Event):void 
		{
			dispatchEvent( new SaibaMaisEvent( SaibaMaisEvent.CLICK , containerFeatures.id ));
		}
		
		
		private function activateFeatures( $data:XMLList ):void 
		{
			containerFeatures.create( $data );
			TweenMax.to( containerFeatures , .5 , {autoAlpha: 1 });
		}
		
		private function deactivateFeatures():void 
		{
			containerFeatures.remove();
		}
		
		
		private function paginateNextEventHandler(e:MouseEvent):void 
		{
			var i:Number = _currentIndex;
			if(_currentIndex < (items.length)) i++;
			goto( i );
			//trace("currentIndex: " + _currentIndex + " length: " + items.length );

		}
		
		private function paginatePrevEventHandler(e:MouseEvent):void 
		{
			
			var i:Number = _currentIndex;
			if(_currentIndex > 0) i--;
			goto( indexes[i] );
			
		}
		
		private function item_CLICK(e:MouseEvent):void
		{
			goto( items.indexOf(e.currentTarget) );
		}

		
		public function goto(index:uint):Boolean
		{
			if(index >= items.length) return false;
			
			_currentIndex = index;
			
			update();
			return true;
		}
		
		public function animateOut():void 
		{
			TweenMax.to( containerFeatures , .3, { autoAlpha: 0, ease: Strong.easeOut, delay: .5 });
			TweenMax.to( seta_prev , .3 , { y: 287, autoAlpha: 0, ease: Strong.easeOut , delay: .8 });
			TweenMax.to( seta_next , .3 , { y: 287, autoAlpha: 0, ease: Strong.easeOut , delay: 1 });
			
			var item:CarouselItem;
			for(var i:int = 0; i < items.length; i++)
			{
				item = items[i] as CarouselItem;
				TweenMax.to( item , .5, { autoAlpha: 0, y: 35, ease: Strong.easeOut , delay: .5 + (i / 10) });
				//item.visible = false;
			}
			
			
		}
		
		public function removeCarousel():void 
		{
			var item:CarouselItem;
			for(var i:int = 0; i < items.length; i++)
			{
				item = items[i] as CarouselItem;
				container.removeChild( item );
				//item.visible = false;
			}
			items = new Array();
		}
		
		public function animateIn():void 
		{
			TweenMax.to( containerFeatures , .3, { autoAlpha: 1, ease: Strong.easeOut, delay: .5 });
			TweenMax.to( seta_prev , .3 , { y: 267, autoAlpha: 1, ease: Strong.easeOut , delay: .8 });
			TweenMax.to( seta_next , .3 , { y: 267, autoAlpha: 1, ease: Strong.easeOut , delay: 1 });
			
			showCarousel();
			update(0);
			
			//activeItem.alpha = 1;
			//activeItem.visible = true;
			
		}
		
		
		public function buildCarousel():void 
		{
			
			container = new Sprite();
			container.x = 620;
			container.y = -10;
			container.visible = false;
			addChild( container );
			
			indexes = new Array();
			items   = new Array();
			var item:CarouselItem;
			data = XMLList( SiteData.instance.XMLDATA.content.carousel );
			_currentIndex = Number( data.@startAt ); 
			for(var i:int = 0; i < data.item.length(); i++)
			{
				item = new CarouselItem( XMLList( data.item[i] ) );
				item.index = i;
				item.addEventListener(MouseEvent.CLICK , item_CLICK );
				container.addChild( item );
				
				items.push( item );
				
			}
			
			update(0);
			// TweenMax.delayedCall( .4, update, [0] );
			TweenMax.delayedCall( .4, showCarousel );
			TweenMax.delayedCall(.5, dispatchNavigate);
			
		}
		
		private function dispatchNavigate():void 
		{
			// dispatch event 
			dispatchEvent( new CarouselEvent( CarouselEvent.CAROUSEL_NAVIGATE , activeItem ) );
		}
		
		private function showCarousel():void 
		{
			seta_next.visible = true;
			seta_prev.visible = true;
			container.visible = true;
			var item:CarouselItem;
			for(var i:int = 0; i < items.length; i++)
			{
				item = items[i] as CarouselItem;
				item.y = 0;
				var offset:int = (i - _currentIndex);
				TweenMax.from( item , .5, { y: "35", autoAlpha: 0, ease: Strong.easeOut , delay: i / 10 });
			}
		}
		
		
		private function update(time:Number = 1):void
		{
			var item:CarouselItem;
			var timeTween:Number = time;
			for(var i:int = 0; i < items.length; i++)
			{
				item = items[i] as CarouselItem;
				
				var offset:int = (i - _currentIndex);
				var X:Number = 350 * offset;
				var Z:Number = 600 * Math.abs(offset);
				var RY:Number = 0;
				
				if(offset < 0 ) X += 320;
				
				var tweenObject:Object = { x: X, z: Z, ease: Strong.easeOut , delay: i / 100 };
				
				if( (offset > 1) || (offset < -1))
				{
					if(time != 0) timeTween = .2;
					tweenObject.autoAlpha  = 0;
					tweenObject.blurFilter = { blurX: 10, blurY: 10, quality: 1}; 
					
				} else { 
					
					if(offset != 0) 
					{
						tweenObject.blurFilter = { blurX: 10, blurY: 10, quality: 1};
						tweenObject.autoAlpha  = .5;
						
					} else { 
						
						tweenObject.blurFilter = { blurX: 0, blurY: 0, quality: 1};
						tweenObject.autoAlpha  = 1;
						activeItem = item;
						item.createNew();
					}
				}
				
				//if(offset > 0)
				//RY = 70;
				//else if(offset < 0)
				// RY = -70;
				
				TweenMax.to( item , time , tweenObject );
				
				var numRight	:int = items.length - _currentIndex - 1;
				var num			:int = (_currentIndex > numRight) ? _currentIndex:numRight;
				
				container.addChildAt( item , num - Math.abs(offset) );

			}
			
			
			indexes = new Array();
			for( i = 0; i < items.length; i++)
			{
				item = items[i] as CarouselItem;
				indexes.push( items.indexOf( item ));
			}
			
			deactivateFeatures();
			TweenMax.delayedCall( time , activateFeatures, [AndersonSilvaPageManager.getCarouselData( activeItem.id )] );
			
			dispatchNavigate();
		}
		
		
	}
}