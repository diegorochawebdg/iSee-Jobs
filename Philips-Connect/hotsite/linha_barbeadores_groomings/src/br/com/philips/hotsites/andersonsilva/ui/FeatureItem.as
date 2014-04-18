package br.com.philips.hotsites.andersonsilva.ui
{
	import com.greensock.TweenMax;
	import com.greensock.easing.Back;
	import com.greensock.easing.Strong;
	import com.greensock.loading.LoaderMax;
	import com.greensock.loading.display.ContentDisplay;
	import com.gugateider.framework.utils.TextUtils;
	
	import flash.display.Sprite;
	import flash.text.TextField;
	
	public class FeatureItem extends Sprite
	{
		
		private var picture:ContentDisplay;
		private var tf:TextField;
		
		
		public function FeatureItem()
		{
			
			super();
			
		}
		
		
		public function create( data:XMLList ):void 
		{
			
			picture = LoaderMax.getLoader("produtos").getContent( data.id.text() );
			addChild( picture );
			
			tf = TextUtils.createTf( data.text.text() , false, 300, 300 );
			tf.x = picture.x + picture.width;
			tf.y = picture.y + 25;
			addChild( tf );
			
			TweenMax.from( picture, .5, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut });
			TweenMax.from( tf, .5, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut, delay: .3 });
			
		}
		
		
		
	}
}