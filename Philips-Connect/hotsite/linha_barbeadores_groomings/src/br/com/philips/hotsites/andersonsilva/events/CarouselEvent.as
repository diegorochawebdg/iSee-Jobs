package br.com.philips.hotsites.andersonsilva.events
{
	import br.com.philips.hotsites.andersonsilva.ui.CarouselItem;
	
	import flash.events.Event;
	
	public class CarouselEvent extends Event
	{
		
		public static const CAROUSEL_NAVIGATE:String = "CarouselNavigate";
		public static const CAROUSEL_SELECT:String   = "CarouselSelect";
		
		public var _item	:CarouselItem;
		
		public function CarouselEvent(type:String, item:CarouselItem, bubbles:Boolean=false, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
			_item = item;
		}
	}
}