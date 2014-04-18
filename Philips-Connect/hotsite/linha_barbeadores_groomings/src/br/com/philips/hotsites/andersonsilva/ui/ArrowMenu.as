package br.com.philips.hotsites.andersonsilva.ui
{
	import com.greensock.TweenLite;
	import com.greensock.easing.Circ;
	import com.greensock.loading.LoaderMax;
	import com.gugateider.framework.MainLoaderMax;
	import com.gugateider.framework.data.SiteData;
	import com.gugateider.framework.utils.TextUtils;
	
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.MovieClip;
	import flash.display.Shape;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	
	public class ArrowMenu extends Sprite
	{
		// arrow to be clicked
		private var _arrow:MovieClip;
		private var _maskBarbeadores:Sprite;
		private var _maskGroomings:Sprite;
		private var menu_title:Sprite;
		private var menu_title_barbeadores		:TextField;
		private var menu_title_barbeadores_bg	:Shape;
		private var menu_title_groomings		:TextField;
		private var menu_title_groomings_bg	:Shape;
		
		
		// variables
		private var _isArrowPressed	:Boolean;
		
		
		// static consts
		private static const MASK_HEIGHT:Number = 116;
		private var dashedLine:Bitmap;
		
		
		/**
		 * Class Constructor
		 * @param none
		 */
		public function ArrowMenu()
		{
			
			super();
			
		}
		
		/*
		 * Initializes Class
		 * @param xPos -> initial position
		 */

		

		public function get maskGroomings():Sprite
		{
			return _maskGroomings;
		}

		public function init( xPos:Number=0 ):void 
		{
			
			// draw area
			//this.graphics.beginFill( 0xFF0000 , 0 );
			//this.graphics.drawRect( 0 , 0 , MainLoaderMax.stage.stageWidth , MASK_HEIGHT );
			//this.graphics.endFill();
			
			var bmpDashed:Class = LoaderMax.getLoader("library").getClass("Dashedline") as Class; 
			dashedLine = new Bitmap( new bmpDashed() );
			addChild( dashedLine );
			
			_maskBarbeadores = new Sprite();
			drawMaskBarbeadores( xPos ); 
			addChild( _maskBarbeadores );
			
			_maskGroomings = new Sprite();
			drawMaskGroomings( xPos );
			addChild( _maskGroomings );
			
			var arrowClass:Class = LoaderMax.getLoader("library").getClass("MenuArrowAsset") as Class; 
			_arrow   = new arrowClass();
			_arrow.x = xPos - (_arrow.width * .5 );
			_arrow.buttonMode = true;
			_arrow.addEventListener( MouseEvent.MOUSE_DOWN , arrowMouseDownEventHandler );
			_arrow.addEventListener( MouseEvent.MOUSE_UP   , arrowMouseUpEventHandler );
			addChild(_arrow);
			
			var data:XMLList = SiteData.instance.XMLDATA.content;
			
			menu_title = new Sprite();
			addChild( menu_title );
			
			
			var menu_title_arrow_class:Class = LoaderMax.getLoader("library").getClass("menu_titulo_arrow") as Class; 
			var menu_title_arrow_bmpData:BitmapData = new menu_title_arrow_class();
			var menu_title_arrow_barbeadores:Bitmap = new Bitmap( menu_title_arrow_bmpData );
			var menu_title_arrow_groomings  :Bitmap = new Bitmap( menu_title_arrow_bmpData );
			menu_title_arrow_barbeadores.x = 4;
			menu_title_arrow_barbeadores.y = 3;
			
			menu_title_barbeadores   = TextUtils.createTf( data.barbeadores.menu_title.text() , true );
			menu_title_barbeadores.y = 2;
			
			menu_title_barbeadores_bg = new Shape();
			menu_title_barbeadores_bg.graphics.beginFill(0xFFFFFF , .2 );
			menu_title_barbeadores_bg.graphics.drawRect( 0 , 0 , ( menu_title_barbeadores.textWidth + menu_title_arrow_barbeadores.width) + 30 , 22 );
			menu_title_barbeadores_bg.graphics.endFill();
			
			menu_title_barbeadores.x = menu_title_arrow_barbeadores.x + 10;
			
			
			menu_title.addChild( menu_title_barbeadores_bg );
			menu_title.addChild( menu_title_arrow_barbeadores );
			menu_title.addChild( menu_title_barbeadores );
			
			menu_title_groomings   = TextUtils.createTf( data.groomings.menu_title.text() , true );
			menu_title_groomings.y = 2;
			
			menu_title_groomings_bg = new Shape();
			menu_title_groomings_bg.graphics.beginFill(0xFFFFFF , .2 );
			menu_title_groomings_bg.graphics.drawRect( 0 , 0 , (menu_title_groomings.textWidth + menu_title_arrow_barbeadores.width) + 30 , 22 );
			menu_title_groomings_bg.graphics.endFill();
			
			menu_title_arrow_groomings.scaleX = -1;
			menu_title_arrow_groomings.y = 3;
			
			menu_title_groomings_bg.x = menu_title_barbeadores_bg.width;
			menu_title_arrow_groomings.x = menu_title_groomings_bg.x + menu_title_groomings_bg.width - 4;
			
			menu_title_groomings.x = menu_title_arrow_groomings.x - (menu_title_groomings.textWidth + 20);
			
			menu_title.addChild( menu_title_groomings_bg );
			menu_title.addChild( menu_title_arrow_groomings );
			menu_title.addChild( menu_title_groomings );
			
			
			menu_title.x = _maskBarbeadores.width - menu_title_barbeadores_bg.width;
			
			dashedLine.x = _maskBarbeadores.width;
			dashedLine.y =  _arrow.y;
			
			MainLoaderMax.stage.addEventListener( MouseEvent.MOUSE_MOVE , onMouseMoveEventHandler );
			MainLoaderMax.stage.addEventListener( MouseEvent.MOUSE_UP , arrowMouseUpEventHandler );
			
		}
		
		protected function onMouseMoveEventHandler(event:MouseEvent):void
		{
			if( !_isArrowPressed || (this.mouseX < 5) || (this.mouseX > MainLoaderMax.stage.stageWidth)) return;
			
			var calc:Number = Math.min( 520 , Math.max( 85, Math.floor(this.mouseX - ( _arrow.width * .5 ))));			
			TweenLite.to( _arrow , .5, { x: calc, ease: Circ.easeOut , onUpdate: function():void { 
				drawMaskBarbeadores( _arrow.x + (_arrow.width * .5));
				drawMaskGroomings( _arrow.x + (_arrow.width * .5) );
				menu_title.x = _maskBarbeadores.width - menu_title_barbeadores_bg.width;
				dashedLine.x = _maskBarbeadores.width;
			}});
			
		}
		
		private function drawMaskBarbeadores( width:Number ):void 
		{
			_maskBarbeadores.graphics.clear();
			_maskBarbeadores.graphics.beginFill( 0xFF0000 , .6 );
			_maskBarbeadores.graphics.drawRect( 0 , 0, width, MASK_HEIGHT );
			_maskBarbeadores.graphics.endFill(); 
		}
		
		private function drawMaskGroomings( x:Number ):void 
		{	
			_maskGroomings.graphics.clear();
			_maskGroomings.graphics.beginFill( 0xFFCCEE , .6 );
			_maskGroomings.graphics.drawRect( x , 0, ( MainLoaderMax.stage.stageWidth - x), MASK_HEIGHT );
			_maskGroomings.graphics.endFill(); 
		}
		
		
		protected function arrowMouseUpEventHandler(event:MouseEvent):void
		{
			_isArrowPressed = false;
		}
		
		protected function arrowMouseDownEventHandler(event:MouseEvent):void
		{
			_isArrowPressed = true;
		}
		
		public function get maskBarbeadores():Sprite
		{
			return _maskBarbeadores;
		}
		
	}
}