package br.com.philips.hotsites.andersonsilva.ui
{
	
	import com.greensock.loading.LoaderMax;
	import com.greensock.loading.display.ContentDisplay;
	
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	
	public class CarouselItem extends Sprite
	{

		public var image:ContentDisplay;
		private var data:XMLList;
		private var _index:int = 0;
		private var bmp:Bitmap;
		
		public function CarouselItem($data:XMLList)
		{
			
			super();
			
			data = $data;
			
			//image = LoaderMax.getLoader("produtos").getContent( data.id.text() );
			
			image = LoaderMax.getContent( data.id.text() );
			image.bgAlpha = 0;
			image.scaleX = image.scaleY = .9;
			//addChild( image );
			
			var bmpData:BitmapData = new BitmapData( image.width , image.height, true, 0 );
			bmpData.draw( image );
			bmp = new Bitmap( bmpData );
			bmp.scaleX = bmp.scaleY = .9;
			bmp.smoothing = true;
			addChild( bmp );
		}
		
		public function createNew():void 
		{
			// addChild( bmp );
		}
		
		
		public function set index(v:int):void { _index = v; };
		public function get index():int { return _index; };
		
		public function get id():String { return data.id.text(); };
		
		public function get _data():XMLList { return data; };
		//public function set data(value:XMLList):void { _data = value; };
	}
}