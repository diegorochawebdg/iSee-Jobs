package com.gugateider.framework.pages 
{
	import com.gugateider.framework.assets.AssetLibrary;
	import com.gugateider.framework.data.SiteData;
	import com.gugateider.framework.ui.ScrollbarH;
	import com.gugateider.framework.ui.ScrollbarV;
	import com.gugateider.framework.utils.ShapeUtils;
	import com.gugateider.framework.utils.TextUtils;
	import flash.display.Shape;
	
	import flash.display.DisplayObject;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.text.TextField;
	

	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible for the page 1 of the project
	:: @usage var page:Page1 = new Page1();
	:: addChild(page);
	**/
	public class Page1 extends Page
	{
		// item with the movie that should be scrolled
		private var itemsScroll	:Sprite;
		// mask of the item
		private var itemMask	:Shape;
		private var scroll		:ScrollbarV;
	
		/**
		 * Class responsible for the page 1 of the project
		 */
		public function Page1() 
		{
			addEventListener(Event.ADDED_TO_STAGE , onReady );
		}
		
		/**
		 * Function dispatched when the class is ready to be added on the stage
		 * @param	e
		 */
		private function onReady(e:Event):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, onReady);
			
			var square:DisplayObject = SiteData.instance.LIBRARY.getDisplayObject("Square");
			//addChild(square);
			
			var textfield:TextField = TextUtils.createTf("<span class='headline'>HTML text with css styles</span>", true );
			textfield.x = 200;
			textfield.y = 100;
			addChild( textfield );
			
			
			
			itemsScroll = new Sprite();
			itemsScroll.x = 300;
			itemsScroll.y = 150;
			var itemsScrollContainer:Sprite = new Sprite();
			addChild( itemsScrollContainer );
			itemsScrollContainer.addChild( itemsScroll );
			for (var i:int = 0; i < 10; i++) 
			{
				var shape:Shape = ShapeUtils.drawRect(40,  0, 100, 40, Math.random() * 0xFFFFFF);
				shape.y = 50 * i;
				itemsScroll.addChild( shape );
			}
			
			itemMask = new Shape();
			itemMask.graphics.beginFill(0xFF0000);
			itemMask.graphics.drawRect(0, 0, 300, 200);
			itemMask.graphics.endFill();
			itemMask.x = 300;
			itemsScrollContainer.addChild( itemMask );
			itemMask.alpha = .6;
			//itemsScroll.mask = itemMask;
			
			scroll = new ScrollbarV( itemsScroll, itemMask, 20, 0x000000, 1, 0x999999, 1, 20, 50, 0x444444, 1, 0xFF0000, 1, true );
			scroll.x = 300; 
			itemsScrollContainer.addChild( scroll );
			itemsScrollContainer.y = 150;
			
			
			
			
			var hMask:Shape  = ShapeUtils.drawRect(0, 0, 500, 100 );
			hMask.alpha = .5;
			hMask.y = -30;
			var itemsContainer:Sprite = new Sprite(); 
			var containerAll:Sprite   = new Sprite();
			containerAll.x = 100;
			containerAll.y = 700;
			containerAll.addChild( itemsContainer );
			containerAll.addChild( hMask );
			addChild( containerAll );
			for (var i:int = 0; i < 30; i++) 
			{
				var shape:Shape = ShapeUtils.drawRect(0,  0, 100, 40, Math.random() * 0xFFFFFF);
				shape.x = 110 * i;
				itemsContainer.addChild( shape );
			}
			var scrollH:ScrollbarH = new ScrollbarH( itemsContainer , hMask, 40 );
			scrollH.y = 30;
			containerAll.addChild( scrollH );
			
			
			
			
			
		}
		
	}

}