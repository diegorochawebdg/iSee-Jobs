package com.gugateider.framework.pages 
{
	import com.gugateider.framework.data.SiteData;
	import flash.display.Sprite;
	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible for the pages of the project
	:: You'd normally extend this class and create one yourself, you do
	:: @usage var page:Page1 = new Page1();
	**/
	public class Page extends Sprite
	{
		// variables
		public var id:int;
		
		
		/**
		 * Class constructor, 
		 */
		public function Page() 
		{
			/*this.graphics.beginFill(0xFF0000);
			this.graphics.drawRect(0, 0, 200, 200);
			this.graphics.endFill();*/
		}
		
		/**
		 * Init 
		 **/ 
		public function init():void 
		{
			
		}
		
		
		
	}

}