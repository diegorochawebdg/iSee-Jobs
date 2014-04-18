package br.com.philips.hotsites.andersonsilva.events
{
	import flash.events.Event;
	
	public class MenuEvent extends Event
	{
		public var data:XMLList;
		
		public static const CLICK:String = "MenuItemClick";
		
		public function MenuEvent(type:String, $data:XMLList, bubbles:Boolean=false, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
			data = $data;
		}
	}
}