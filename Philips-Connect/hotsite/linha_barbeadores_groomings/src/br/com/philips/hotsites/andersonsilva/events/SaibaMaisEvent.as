package br.com.philips.hotsites.andersonsilva.events
{
	import flash.events.Event;
	
	public class SaibaMaisEvent extends Event
	{
		public static const CLICK:String = "saibaMaisClick";
		public var id:String;
		public function SaibaMaisEvent(type:String, $id:String, bubbles:Boolean=false, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
			id = $id;
		}
	}
}