/*Slider call*/
$(function(){
	$('.pix_diapo').diapo({fx: 'scrollLeft'});
});
/*End of Slider call*/

/*Insert a line-height onthe category*/
$(".ultimos-lancamentos span.category, .ultimos-produtos span.category").each(function(index, element) {
   if($(this).height() < 18){
		$(this).css("line-height","23px");
		console.log($(this).height());
	} 
});
/*End of Insert a line-height onthe category*/ 