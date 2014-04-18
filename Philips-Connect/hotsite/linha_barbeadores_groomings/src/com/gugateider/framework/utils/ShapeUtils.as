package com.gugateider.framework.utils
{
	import flash.display.Shape;

	/**
	 * @author Gustavo Teider Rodrigues * http://www.gugateider.com
	 * Class responsible to create shape graphics as ...
	 */
	public class ShapeUtils 
	{
		/**
		 * Creates and returns a simple rectangle
		 * 
		 * @param		s				The string to add to the textfield
		 * @param		autoSize		Whether the field resizes automatically
		 * @param		width			If it doesn't, set the width
		 * @param		height			and height
		 * @param		stylesheet		If you want to use a different stylesheet other than the default one set it here
		 * 
		 * @return		TextField
		 * 
	     * // to create and return a simple textfield saying 'hello world'
		 * TextUtils.createTf("Hello world", true);
		 * 
		 */
		/**
		 * Creates and returns a simple rectangle
		 * 
		 * 
		 * @param	x			Horizontal position of the graphic
		 * @param	y			Vertical position of the graphic
		 * @param	width		Width position of the rectangle in pixels
		 * @param	height		Height position of the rectangle in pixels
		 * @param	color		Color of the rectangle in hexadecimal
		 * @param	line		Line thickness of the rectangle	
		 * @param	lineColor	Colour of the line
		 * @param	lineAlpha	Transparency of the colour of the line
		 * @return
		 */
		public static function drawRect(x:Number, y:Number, width:Number = 20, height:Number = 20, color:uint = 0xFF0000,  line:Number = 1, lineColor:Number=0xFFFFFF, lineAlpha:Number=0 ):Shape {
			
			var shape	:Shape = new Shape();
			shape.graphics.lineStyle( line, lineColor );
			shape.graphics.beginFill( color );
			shape.graphics.drawRect( x, y, width, height );
			shape.graphics.endFill();
			return shape
		}
	}
}
