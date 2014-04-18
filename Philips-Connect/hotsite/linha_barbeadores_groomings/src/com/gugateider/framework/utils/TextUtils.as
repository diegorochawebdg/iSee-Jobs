package com.gugateider.framework.utils
{
	import flash.text.Font;
	import flash.text.AntiAliasType;
	import flash.text.StyleSheet;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.text.TextFieldType;
	import flash.text.TextFormat;

	/**
	 * @author Gustavo Teider Rodrigues * http://www.gugateider.com
	 * To create a simple textfield and input field
	 */
	public class TextUtils 
	{
		private static var sheet:StyleSheet;
		private static var tf:TextField;
		private static var format:TextFormat;

		/**
		 * Creates and returns a simple text field.
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
		public static function createTf(s:String, autoSize:Boolean = true, width:uint = 100, height:uint = 100, stylesheet:StyleSheet = null):TextField 
		{
			tf = new TextField();
			tf.autoSize = TextFieldAutoSize.LEFT;
			tf.antiAliasType = AntiAliasType.ADVANCED;
			tf.embedFonts = true;
			tf.selectable = false;
					
			tf.styleSheet = stylesheet;
			if (stylesheet == null)
				tf.styleSheet = sheet;
           	
			if (!autoSize)
			{
				tf.wordWrap = true;
				tf.multiline = true;
				tf.height = height;
				tf.width = width;
			}

			tf.htmlText = s;	
           	
			return tf;
		}

		/**
		 * Creates and returns a input text field. Due to input fields not being allowed to have css data assigned to them we also pass in the formating params.
		 * 
		 * @param		s			The string to add to the textfield
		 * @param		width		Width of the input field
		 * @param		height		Height of the input field
		 * @param		fontName	Name of the font
		 * @param		fontSize	Size of the font
		 * @param		fontColor	The color of the font
		 * @param		maxChar		The maximun amount of characters you can enter into the input field
		 * 
		 * @return		TextField
		 * 
	     * // to create and return a simple input textfield saying 'hello world'
		 * TextUtils.createInputTf("Hello world", 200, 200, "helvetica", 0x000000);
		 * 
		 */
		public static function createInputTf(s:String, width:uint = 100, height:uint = 100, fontName:String = null, fontColor:uint = 0x000000, fontSize:uint = 20, maxChar:uint = 50):TextField 
		{	
			format = new TextFormat();
			format.font = fontName;
			format.color = fontColor;
			format.size = fontSize;

			tf = new TextField();
			tf.type = TextFieldType.INPUT;
			tf.border = false;
			tf.maxChars = maxChar;
			tf.width = width;				
			tf.height = height;		
			tf.multiline = false;
			tf.wordWrap = true;
			tf.defaultTextFormat = format;
			tf.htmlText = s;
			return tf;			
		}

		/**
		 * Sets the default stylesheet to the TextUtils class
		 * 
		 * @param		value		The default stylesheet
		 * 
		 * @example usage: <listing version="3.0">
		 * 
	     * // sets the default stylesheet to the class
		 * TextUtils.setCss = stylesheet;
		 * 
		 * </listing>
		 */
		public static function set setCss(value:StyleSheet):void
		{
			sheet = value;
		}

		/**
		 * Gets the default stylesheet from the TextUtils class
		 * 
		 * @return		StyleSheet
		 * 
		 * @example usage: <listing version="3.0">
	     *
	     * // gets the default stylesheet from the class
		 * stylesheet = TextUtils._sheet;
		 * 
		 * </listing>
		 */
		public static function get _sheet():StyleSheet
		{
			return sheet;
		}
	}
}
