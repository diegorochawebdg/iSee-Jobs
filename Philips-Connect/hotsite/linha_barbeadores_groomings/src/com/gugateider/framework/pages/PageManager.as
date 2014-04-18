package com.gugateider.framework.pages 
{
	import com.gugateider.framework.data.SiteData;
	import flash.display.Sprite;
	import flash.events.Event;

	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible to manage the pages of the project 
	:: You'd normally extend this class and create one yourself, you do
	:: @usage var page:PageManager = new PageManager();
	**/
	public class PageManager extends Sprite
	{
		
		
		/**
		 * Every page of the project should be included here
		 * @usage var pageManager:PageManager = new PageManager();
		 */
		public function PageManager() 
		{
			addEventListener(Event.ADDED_TO_STAGE , onReady );
		}
		
		/**
		 * Function dispatched when the class is ready to be added on the stage
		 * @param	e
		 */
		public function onReady(e:Event):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, onReady);
			
			
		}
		
		
		
		
	}

}