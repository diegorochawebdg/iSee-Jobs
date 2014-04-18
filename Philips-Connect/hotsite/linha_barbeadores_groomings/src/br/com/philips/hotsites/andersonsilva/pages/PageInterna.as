package br.com.philips.hotsites.andersonsilva.pages
{
	
	import br.com.philips.hotsites.andersonsilva.ui.FeatureItem;
	
	import com.greensock.TweenMax;
	import com.greensock.easing.Back;
	import com.greensock.easing.Strong;
	import com.greensock.loading.LoaderMax;
	import com.greensock.loading.display.ContentDisplay;
	import com.gugateider.framework.pages.Page;
	import com.gugateider.framework.utils.TextUtils;
	
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	import flash.text.TextField;
	
	public class PageInterna extends Page
	{
		private var productTitleTF:TextField;
		private var featuresContainer:Sprite;
		private var picture:ContentDisplay;
		//private var picture:Bitmap;
		private var prod_detalhe:MovieClip;
		private var pag_internaGraphic:MovieClip;
		
		// variaveis
		private var data:XMLList;
		
		
		public function PageInterna()
		{
			
			
			super();
			
			featuresContainer = new Sprite();
			addChild( featuresContainer );
			
			data = new XMLList();
		}
		
		
		public function initInterna( id:String="" ):void 
		{
			
			data = AndersonSilvaPageManager.getData( id );
			
			// loop features
			var featureItem:FeatureItem;
			for( var i:int = 0; i < data.features.item.length(); i++)
			{
				
				featureItem   = new FeatureItem();
				featureItem.x = Number( data.features.item[i].position.@x ); 
				featureItem.y = Number( data.features.item[i].position.@y );
				featuresContainer.addChild( featureItem );
				
				TweenMax.delayedCall( .4 + (i / 10) , showFeature , [XMLList(data.features.item[i]), featureItem]);
				
			}
			
			productTitleTF   = TextUtils.createTf( data.product_title.text() , false, 488, 130 );
			productTitleTF.y = 22;
			productTitleTF.x = 138;
			addChild( productTitleTF );
			TweenMax.from(productTitleTF, .5, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut });
			
			var prodDetalheClass:Class = LoaderMax.getLoader("library").getClass("BlueGradient");
			prod_detalhe = new prodDetalheClass();
			prod_detalhe.x = 753;
			prod_detalhe.y = 344;
			
			var strLengthText:String = data.product_description.text();
			var detalheTF:TextField = TextUtils.createTf( strLengthText , false, 190, 120 );
			detalheTF.x = 48;
			detalheTF.y = (prod_detalhe.height - detalheTF.textHeight) * .5;
			prod_detalhe.addChild( detalheTF );
			addChild( prod_detalhe );
			if(strLengthText.length == 0) TweenMax.to( prod_detalhe, 0, { autoAlpha: 0});
			else TweenMax.from( prod_detalhe, .5, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut, delay: .4 });
			
			// picture   = null;
			
			picture   = LoaderMax.getLoader("produtos").getContent( data.id.text() );
			//picture = bmpCarousel;
			picture.x = 610;
			picture.y = -40;
			picture.scaleX = 1;
			picture.scaleY = 1;
			addChild( picture );
			TweenMax.to(picture, 0, { autoAlpha: 0 });
			TweenMax.to(picture, .5, { autoAlpha: 1, blurFilter: {blurX: 0, blurY: 0, quality: 1}, ease: Back.easeOut, delay: .2 });
			
			var bmdClass:Class = LoaderMax.getLoader("library").getClass("PaginaInterna");
			pag_internaGraphic = new bmdClass();
			pag_internaGraphic.comprar.buttonMode = true;
			pag_internaGraphic.comprar.addEventListener( MouseEvent.CLICK , comprarClickHandler );
			// pag_internaGraphic.voltar.visible = false;
			pag_internaGraphic.voltar.buttonMode = true;
			pag_internaGraphic.voltar.addEventListener( MouseEvent.CLICK , voltarClickHandler );
			pag_internaGraphic.voltar.addEventListener( MouseEvent.MOUSE_OVER , voltarOverHandler );
			pag_internaGraphic.voltar.addEventListener( MouseEvent.MOUSE_OUT  , voltarOutHandler );
			addChild( pag_internaGraphic );
			
			var itemDestaque:String = data.features.@itemDestaque;
			
			if( itemDestaque == "random" ) 
			{
				var itemsDestaque = AndersonSilvaPageManager.getIntroDestaques();
				itemDestaque = itemsDestaque[ Math.floor( Math.random() * itemsDestaque.length ) ];
			}

			pag_internaGraphic.destaque.gotoAndPlay( itemDestaque );
			pag_internaGraphic.destaque.mouseChildren = false;
			pag_internaGraphic.destaque.mouseEnabled = false;
		}
		
		private function voltarOverHandler(e:MouseEvent):void 
		{
			pag_internaGraphic.voltar.arrow.play();
		}
		private function voltarOutHandler(e:MouseEvent):void 
		{
			pag_internaGraphic.voltar.arrow.gotoAndStop(1);
		}
		
		public function animateOut(dispatch:Boolean=true):void 
		{
			
			var delay:Number = .5;
			var featureItem:FeatureItem;
			for( var i:int = 0; i < featuresContainer.numChildren; i++)
			{
				
				featureItem   = featuresContainer.getChildAt( i ) as FeatureItem;
				TweenMax.to(featureItem, .3, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut, delay: delay });
				
				delay += i / 50;
			}
			
			pag_internaGraphic.gotoAndPlay( 51 );
			pag_internaGraphic.destaque.play();
			TweenMax.to( prod_detalhe, .3, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut, delay: ( .4) });
			TweenMax.to(picture, .3, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut, delay: ( .6) });
			if(dispatch)
				TweenMax.to(productTitleTF, .3, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut, delay: ( .8), onComplete: completeAnimateOut });
			else
				TweenMax.to(productTitleTF, .3, { autoAlpha: 0, y: "30", blurFilter: {blurX: 10, blurY: 10, quality: 1}, ease: Back.easeOut, delay: ( .8) });
			
			
			
		}
		
		private function completeAnimateOut():void 
		{
			for( var i:int = 0; i < featuresContainer.numChildren; i++)
			{
				featuresContainer.removeChildAt( i );
			}
			removeChild( pag_internaGraphic );
			//removeChild( picture );
			removeChild( prod_detalhe );
			removeChild( productTitleTF );
			
			dispatchEvent( new Event(Event.COMPLETE ));
			
		}
		
		private function voltarClickHandler(e:MouseEvent):void 
		{
			animateOut();
			dispatchEvent( new Event(Event.CHANGE)); 
			
		}
		
		private function comprarClickHandler(e:MouseEvent):void 
		{
			navigateToURL( new URLRequest( data.comprar_link.text() ) , data.comprar_link.@target );
			trace("comprar: " + data.comprar_link.text() + " target: " + data.comprar_link.@target );
		}
		
		private function showFeature( data:XMLList , item:FeatureItem ):void 
		{
			item.create( data );
		}
		
		
		
	}
}