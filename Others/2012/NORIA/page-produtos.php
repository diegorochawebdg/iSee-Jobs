<?php get_header(); ?>
<style>body{background:#0A345C url(<?php bloginfo('template_directory');?>/images/bg-body.png) repeat-x center top !important}</style>
<div id="conteudo">
    <h2>Produtos</h2>
    <p>Confira abaixo nossa relação de produtos:</p>
    
    <?php 
		
		$produtos_arr = get_group('produtos_galeria');
		$count = 0;
		foreach($produtos_arr as $produto) {
			
			$imagem = $produto['produtos_galeria_imagem'][1]['original'];
			$titulo = ( $produto['produtos_galeria_titulo'][1] );
			$subtitulo = $produto['produtos_galeria_subtitulo'][1];
			
		?>	
                <div class="produto">
                    <?php echo "<img src='$imagem' />" ?>
                    <div class="produto-txt">
                        <h3><?php echo $titulo; ?></h3>
                        <span><?php echo $subtitulo; ?></span>
                    </div>
                </div>
                
                
        <?php 
			
			if((($count%3)==0) && ($count != 0)) echo "<div class='clear'></div>";	
			
			$count++;
			}
			
		?>        
                
    
    <div class="produto">
        <span class="dvds"><?php echo get('texto_dvds'); ?></span>
    </div>
    
    <div class="clear"></div>
    
    <?php
		include("form.php");
	?>
  
    
</div>
<?php get_footer(); ?>