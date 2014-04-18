$(document).ready(function() {
	 loadHash(window.location.hash);	
});
$(window).on('hashchange', function() {
	 loadHash(location.hash);	
});


function loadHash(hash){
	$('.submenu-selected').removeClass('submenu-selected'); 
	$('.images').hide();
	$('.item').hide();
	$('.videos').hide();
	 switch(hash){
	 	case '#imagens':			
			$('.imagens-submenu').addClass('submenu-selected');
			displayFiles('.images' , '.imagem');
		break;
		case '#videos' : 
			$('.videos-submenu').addClass('submenu-selected');
			displayFiles('.videos', '.video');
		break;
		case '#selos'  : 
			$('.selos-submenu').addClass('submenu-selected');
			displayFiles('.images', '.selo');
		break;
		case '#documentos': 
			$('.documentos-submenu').addClass('submenu-selected');			
			displayFiles('.images','.documento');
		break;

		case '#banners-tabloides': 
			$('.banners-tabloides-submenu').addClass('submenu-selected');
			displayFiles('.images', '.banner-tabloide');
		break;
		
		default:
			$('.imagens-submenu').addClass('submenu-selected');
			displayFiles('.images' , '.imagem');
		break;
	 }
}

function displayFiles(category, type){	
	$(type).show();
	$(category).fadeIn(800);
}

