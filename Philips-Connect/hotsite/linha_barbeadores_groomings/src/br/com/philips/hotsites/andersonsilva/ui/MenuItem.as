package br.com.philips.hotsites.andersonsilva.ui
{
	import br.com.philips.hotsites.andersonsilva.events.MenuEvent;
	
	import com.greensock.TweenMax;
	import com.greensock.easing.Back;
	import com.greensock.easing.Strong;
	import com.greensock.loading.LoaderMax;
	import com.greensock.loading.display.ContentDisplay;
	import com.gugateider.framework.utils.TextUtils;
	
	import flash.display.Bitmap;
	import flash.display.MovieClip;
	import flash.display.Shape;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	
	public class MenuItem extends Sprite
	{
		public static const BARBEADORES_WIDTH	:int = 72;
		public static const BARBEADORES_HEIGHT  :int = 88;
		public static const GROOMINGS_WIDTH		:int = 72;
		public static const GROOMINGS_HEIGHT	:int = 88;
		public static const ITEM_HEIGHT			:int = 110;
		
		private var _selected:Boolean;
		private var	_type	:String = "";
		private var _data	:XMLList;
		private var _thumb	:ContentDisplay;
		private var _bgTitle:Shape;
		private var _title	:TextField;
		private var _mouseAction	:MovieClip;
		
		
		public function MenuItem( $type:String = "barbeadores")
		{
			
			super();
			
			_type = $type;
			
		}
		
		
		public function buildItem( data:XMLList=null ):void 
		{
			
			_data = data;
			
			/*this.graphics.beginFill( Math.random() * 0xFFFFFF , 1 );
			if( _type == "barbeadores") this.graphics.drawRect(0 , 0 , BARBEADORES_WIDTH, ITEM_HEIGHT );
			else this.graphics.drawRect(0 , 0 , GROOMINGS_WIDTH, ITEM_HEIGHT );
			this.graphics.endFill();*/
			
			/*_mouseAction = new Sprite();
			_mouseAction.graphics.beginFill(0xFFFFFF , 1 );
			_mouseAction.graphics.drawRect( 0 , 0, BARBEADORES_WIDTH , ITEM_HEIGHT );
			_mouseAction.graphics.endFill();
			_mouseAction.alpha = 0;
			addChild( _mouseAction );*/
			var mouseActionClass:Class = LoaderMax.getLoader("library").getClass("MouseAction");
			_mouseAction = new mouseActionClass();
			_mouseAction.alpha = 0;
			
			addChild( _mouseAction );
			
			_bgTitle = new Shape();
			_bgTitle.graphics.beginFill( 0xFFFFFF , .13 );
			_bgTitle.graphics.drawRect( 0 , 81 , 53 , 18 );
			_bgTitle.graphics.endFill();
			addChild( _bgTitle );
			
			// get thumbnail
			_thumb = LoaderMax.getLoader("produtos").getContent( id + "_mini" );
			_thumb.y = 5;
			addChild( _thumb );
			
			_title = TextUtils.createTf( _data.menu_title.text() , false , _bgTitle.width - 8 , _bgTitle.height );
			_title.x = 7;
			_title.y = 83;
			addChild( _title );
			
			if( _type != "barbeadores")
			{
				_mouseAction.width += 3;
				_bgTitle.x = 16;
				_title.x = (_bgTitle.x + _bgTitle.width) - (_title.textWidth + 6);
			}
			
			
			
			addListeners();
			
			
		}
		
		
		public function makeBlue():void 
		{
			_selected = true;
			_mouseAction.alpha = 1;
			_bgTitle.visible = false;
			TweenMax.to( _mouseAction , .5 , { tint: null });
		}
		
		public function makeNormal():void 
		{
			_bgTitle.visible = true;
			_mouseAction.alpha = 0;
			TweenMax.to( _thumb , .3 , { y: 0, ease: Back.easeOut });
			TweenMax.to( _mouseAction , 0 , { tint: null });
			_selected = false;
		}
		
		public function setSelected(action:String="selected"):void 
		{
			_bgTitle.visible = true;

			switch(action)
			{
				case "selected":
					// selected	
					_selected = true;
					_mouseAction.alpha = 1;
					_bgTitle.visible = false;
					TweenMax.to( _mouseAction , .5 , { tint: null });
					
					dispatchEvent( new MenuEvent(MenuEvent.CLICK , _data ));
					
				break;
				case "over":
					
					_bgTitle.visible = false;
					
					if(!_selected)
					{
						_mouseAction.alpha = .27;
						
						TweenMax.to( _thumb , .3 , { y: 0, ease: Back.easeOut });
						TweenMax.to( _mouseAction , 0 , { tint: 0xFFFFFF });
					} else { 
						
						
						
					}
					
				break;
				case "out":
					if(!_selected) 
					{
						_mouseAction.alpha = 0;
						
					} else { 
						
						_bgTitle.visible = false;
					
					}
					TweenMax.to( _thumb , .3 , { y: 5, ease: Back.easeOut });
					
				break;
				case "carousel":
					
					_bgTitle.visible = false;
					_mouseAction.alpha = .27;
					TweenMax.to( _thumb , .3 , { y: 0, ease: Back.easeOut });
					TweenMax.to( _mouseAction , 0 , { tint: 0xFFFFFF });
				
				break;
				
				case "disable":
					
					_bgTitle.visible = false;
					_mouseAction.alpha = 0;
					TweenMax.to( _thumb , .3 , { y: 5, ease: Back.easeOut });
					//TweenMax.to( _mouseAction , 0 , { tint: null });
					_selected = false;
					
				break;
				
			}
		}
		
		
		private function addListeners():void 
		{
			this.buttonMode = true;
			this.addEventListener( MouseEvent.MOUSE_OVER , rollOverHandler );
			this.addEventListener( MouseEvent.MOUSE_OUT  , rollOutHandler );
			this.addEventListener( MouseEvent.CLICK      , releaseHandler );
		}
		
		private function releaseHandler(e:MouseEvent):void 
		{
			setSelected("selected");
		}
		
		private function rollOverHandler(e:MouseEvent):void 
		{
			setSelected("over");
		}
		
		private function rollOutHandler(e:MouseEvent):void 
		{
			setSelected("out");
		}
		
		public function get id():String 
		{
			return _data.id.text();
		}
		
		public function get selected():Boolean { return _selected };
		public function set selected(v:Boolean) { _selected = v; };
		
		
	}
}