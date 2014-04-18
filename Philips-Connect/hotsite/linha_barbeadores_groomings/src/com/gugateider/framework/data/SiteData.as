package com.gugateider.framework.data 
{
	import com.gugateider.framework.assets.AssetLibrary;
	import flash.display.Stage;
	import flash.text.StyleSheet;
	
	/**
	 * ...
	 * @author Gustavo Teider Rodrigues
	 * http://www.gugateider.com
	 * creation: 22.03.2010
	 * last change: 22.03.2010
	 * Singleton class responsible to save the information from XML and flashvars
	 */
	public class SiteData
	{
		// variables
		private var _DEEPLINK:String;
		private var _LANG:String;
		private var _XMLFILE:String;
		private var _XMLDATA:XML;	
		private var _CSSDATA:StyleSheet;
		private var _LIBRARY:AssetLibrary;
		
		public var stage:Stage;
		
		// Singleton properties
		private static var _INSTANCE:SiteData = null;
		
		
		public function SiteData(e:Enforcer) 
		{
			
		}
		public static function get instance():SiteData{
			if(_INSTANCE == null) _INSTANCE = new SiteData(new Enforcer);
			return _INSTANCE;	
		}
		
		public function get LANG():String { return _LANG; }
		
		public function set LANG(value:String):void 
		{
			_LANG = value;
		}
		
		public function get XMLDATA():XML { return _XMLDATA; }
		
		public function set XMLDATA(value:XML):void 
		{
			_XMLDATA = value;
		}
		
		public function get XMLFILE():String { return _XMLFILE; }
		
		public function set XMLFILE(value:String):void 
		{
			_XMLFILE = value;
		}
		
		public function get CSSDATA():StyleSheet { return _CSSDATA; }
		
		public function set CSSDATA(value:StyleSheet):void 
		{
			_CSSDATA = value;
		}
		
		public function get LIBRARY():AssetLibrary { return _LIBRARY; }
		
		public function set LIBRARY(value:AssetLibrary):void 
		{
			_LIBRARY = value;
		}
		
		public function get DEEPLINK():String { return _DEEPLINK; }
		
		public function set DEEPLINK(value:String):void 
		{
			_DEEPLINK = value;
		}
		
	}

}
class Enforcer {
	public function Enforcer(){
		//empty;	
	}	
}