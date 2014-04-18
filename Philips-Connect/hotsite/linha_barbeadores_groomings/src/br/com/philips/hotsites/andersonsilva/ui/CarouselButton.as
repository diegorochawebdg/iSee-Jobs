package br.com.philips.hotsites.andersonsilva.ui
{
	import com.greensock.TweenMax;
	import com.greensock.easing.Strong;
	import com.greensock.loading.LoaderMax;
	
	import flash.display.Bitmap;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	
	public class CarouselButton extends Sprite
	{
		
		private var bmp:Bitmap;
		
		public function CarouselButton()
		{
			super();
			
			var bmdClass:Class = LoaderMax.getLoader("library").getClass("SetaCarousel");
			bmp = new Bitmap( new bmdClass() );
			addChild( bmp );
			
			
			this.buttonMode = true;
			this.addEventListener( MouseEvent.MOUSE_OVER , rollOverHandler );
			this.addEventListener( MouseEvent.MOUSE_OUT  , rollOutHandler );
			
		}
		
		private function rollOverHandler(e:MouseEvent):void 
		{
			TweenMax.to( bmp, .3, { x: 4, ease: Strong.easeOut });
		}
		
		private function rollOutHandler(e:MouseEvent):void 
		{
			TweenMax.to( bmp, .3, { x: 0, ease: Strong.easeOut });
		}
		
	}
}