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
	:: This class is responsible to create a vertical scrollbar
	:: @usage var scrollV:ScrollbarV = new ScrollbarV();
	**/
	public class ScrollbarV extends Sprite
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
		public static const GAP				:Number = 0;
		
	
		/**
		 * Creates a vertical scrollbar
		 * @param	container					-> Is the scrolled container 
		 * @param	maskItem					-> Mask of the container
		 * @param	barWidth					-> Width of the scroll bar
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
		public function ScrollbarV( container:DisplayObject, maskItem:DisplayObject, barWidth:Number = 20, barColour:Number = 0x000000, barBorderThickness:Number = 1, barBorderColour:Number = 0x999999, barBorderAlpha:Number = 1, handlerWidth:Number=20, handlerHeight:Number=50, handlerColour:Number=0x444444, handlerBorderThickness:Number=1, handlerBorderColour:Number=0xFF0000, handlerBorderAlpha:Number=1, animate:Boolean=true  ) 
		{
			// set the container and the mask
			this.container = container;
			this.maskItem  = maskItem;			
			
			// create assets
			var shapeBG:Shape 	   = ShapeUtils.drawRect(0, 0, barWidth, maskItem.height, barColour, barBorderThickness, barBorderColour, barBorderAlpha );
			var shapehandler:Shape = ShapeUtils.drawRect(0, 0, handlerWidth, handlerHeight, handlerColour, handlerBorderThickness, handlerBorderColour, handlerBorderAlpha );
			
			scroll_bg = new Sprite();
			scroll_bg.addChild( shapeBG );
			addChild( scroll_bg );
			
			scroll_handler = new Sprite();
			scroll_handler.addChild( shapehandler );
			addChild( scroll_handler );
			
			
			
			// set initial variables
			bar_distance = maskItem.height - scroll_handler.height;
			container_distance = container.height - maskItem.height + margin;
			container.y -= container.height - maskItem.height;
			
			// ? animate ? 
			initMoveScroll( animate );
			
		}
		
		/**
		 * Animate the scrolled mc
		 * @param animate -> If true, will have an animation from the half to top
		 */
		private function initMoveScroll(animate:Boolean = true ):void 
		{
			if (animate)
			{
				var halfContainer	:Number = maskItem.y - (container.height * .5);
				var halfHandler		:Number = (scroll_bg.y * .5) - (scroll_handler.height * .5);
				var tweenduration	:Number = container.height / 250;
				
				// animate handler and container
				TweenMax.fromTo( container, tweenduration, { y: halfContainer }, { y: maskItem.y, ease: Strong.easeOut } );
				TweenMax.fromTo( scroll_handler, tweenduration, { y: halfHandler }, { y: maskItem.y, ease: Strong.easeOut } );
			} else { 
				container.y = maskItem.y;
				scroll_handler.y = maskItem.y;
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
			scrollBarPoint = scroll_handler.height - (scroll_handler.y + scroll_handler.height - mouseY);
    		addEventListener(Event.ENTER_FRAME, onScrollArea );
		}
		
		/**
		 * Function dispatched when the content is scrolling
		 * @param	e
		 */
		private function onScrollArea(e:Event=null):void 
		{
			scroll_handler.y = mouseY - scrollBarPoint;
			if ((scroll_handler.y + scroll_handler.height) > (maskItem.y + maskItem.height))
			{
				scroll_handler.y = maskItem.y + maskItem.height - scroll_handler.height;
			}
			if (scroll_handler.y < maskItem.y)
			{
				scroll_handler.y = maskItem.y;
			}
			targetDist = maskItem.y - (container_distance * (( scroll_handler.y - maskItem.y) / bar_distance )  );
			container.y += (targetDist - container.y) * 0.1;
		}
		
	}

}