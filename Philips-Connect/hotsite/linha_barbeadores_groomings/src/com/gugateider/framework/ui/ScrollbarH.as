package com.gugateider.framework.ui 
{
	import com.greensock.easing.Strong;
	import com.greensock.TweenMax;
	import com.gugateider.framework.Main;
	import com.gugateider.framework.utils.ShapeUtils;
	import flash.display.DisplayObject;
	import flash.display.Shape;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	
	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible to create a horizontal scrollbar
	:: @usage var scrollH:ScrollbarH = new ScrollbarH();
	**/
	public class ScrollbarH extends Sprite
	{
		
		// objects on the stage
		private var scroll_bg		:Sprite;
		private var scroll_handler	:Sprite;
		private var container		:DisplayObject;
		private var maskItem		:DisplayObject;
		
		// variables 
		private var bar_distance			:Number;
		private var container_distance		:Number;
		private var scrollBarPoint			:Number;
		private var targetDist				:Number;
		private var margin					:Number = 20;
		
		// constants
		public static const EASE				:Number = 0.11;
		
	
		/**
		 * Creates a vertical scrollbar
		 * @param	container					-> Is the scrolled container 
		 * @param	maskItem					-> Mask of the container
		 * @param	barHeight					-> Height of the scroll bar
		 * @param	barColour					-> Scrollbar color
		 * @param	barBorderThickness			-> Scrollbar thickness
		 * @param	barBorderColour				-> Scrollbar border color
		 * @param	barBorderAlpha				-> Scrollbar border alpha
		 * @param	handlerWidth				-> Scroll handler width
		 * @param	handlerHeight				-> Scroll handler height
		 * @param	handlerColour				-> Scroll handler colour
		 * @param	handlerBorderThickness		-> Scroll handler border thickness
		 * @param	handlerBorderColour			-> Scroll handler border colour
		 * @param	handlerBorderAlpha			-> Scroll handler border alpha
		 */
		public function ScrollbarH( container:DisplayObject, maskItem:DisplayObject, barHeight:Number = 40, barColour:Number = 0x000000, barBorderThickness:Number = 1, barBorderColour:Number = 0x999999, barBorderAlpha:Number = 1, handlerWidth:Number=40, handlerHeight:Number=40, handlerColour:Number=0x444444, handlerBorderThickness:Number=1, handlerBorderColour:Number=0xFF0000, handlerBorderAlpha:Number=1, animate:Boolean=true  ) 
		{
			// set the container and the mask
			this.container = container;
			this.maskItem  = maskItem;			
			
			// create assets
			var shapeBG:Shape 	   = ShapeUtils.drawRect(0, 0, maskItem.width, barHeight, barColour, barBorderThickness, barBorderColour, barBorderAlpha );
			var shapehandler:Shape = ShapeUtils.drawRect(0, 0, handlerWidth, handlerHeight, handlerColour, handlerBorderThickness, handlerBorderColour, handlerBorderAlpha );
			
			scroll_bg = new Sprite();
			scroll_bg.addChild( shapeBG );
			addChild( scroll_bg );
			
			scroll_handler = new Sprite();
			scroll_handler.addChild( shapehandler );
			addChild( scroll_handler );
			
			
			
			// set initial variables
			bar_distance = maskItem.width - scroll_handler.width;
			container_distance = container.width - maskItem.width + margin;
			container.x -= container.width - maskItem.width;
			
			// ? animate ? 
			initMoveScroll( false );
			
		}
		
		/**
		 * Animate the scrolled mc
		 * @param animate -> If true, will have an animation from the half to top
		 */
		private function initMoveScroll(animate:Boolean = true ):void 
		{
			if (animate)
			{
				var halfContainer	:Number = maskItem.x - (container.width * .5);
				var halfHandler		:Number = (scroll_bg.x * .5) - (scroll_handler.width * .5);
				var tweenduration	:Number = container.width / 1000;
				
				// animate handler and container
				TweenMax.fromTo( container, tweenduration, { x: halfContainer }, { x: maskItem.y, ease: Strong.easeOut } );
				TweenMax.fromTo( scroll_handler, tweenduration, { x: halfHandler }, { x: maskItem.y, ease: Strong.easeOut } );
			} else { 
				container.x = maskItem.x;
				scroll_handler.x = maskItem.x;
			}
			
			scroll_handler.addEventListener( MouseEvent.MOUSE_DOWN , scrollHandlerDown );
			Main.stage.addEventListener(MouseEvent.MOUSE_UP , scrollHandlerUp );
			
		}
		
		/**
		 * Function dispatched when the mouse is released
		 * @param	e
		 */
		private function scrollHandlerUp(e:MouseEvent):void 
		{
			removeEventListener(Event.ENTER_FRAME, onScrollArea );
		}
		
		/**
		 * Function dispatched once the handler is clicked
		 * @param	e
		 */
		private function scrollHandlerDown(e:MouseEvent):void 
		{
			scrollBarPoint = scroll_handler.width - (scroll_handler.x + scroll_handler.width - mouseX);
    		addEventListener(Event.ENTER_FRAME, onScrollArea );
		}
		
		/**
		 * Function dispatched when the content is scrolling
		 * @param	e
		 */
		private function onScrollArea(e:Event=null):void 
		{
			scroll_handler.x = mouseX - scrollBarPoint;
			if ((scroll_handler.x + scroll_handler.width) > (maskItem.x + maskItem.width))
			{
				scroll_handler.x = maskItem.x + maskItem.width - scroll_handler.width;
			}
			if (scroll_handler.x < maskItem.x)
			{
				scroll_handler.x = maskItem.x;
			}
			targetDist = maskItem.x - (container_distance * (( scroll_handler.x - maskItem.x) / bar_distance )  );
			container.x += (targetDist - container.x) * EASE;
		}
		
	}

}