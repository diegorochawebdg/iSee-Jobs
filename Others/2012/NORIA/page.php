<?php get_header(); ?>
<div id="conteudo">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
        <?php if(is_page('contato')){?>
            <?php
                include("form.php");
            ?>
        <?php } ?>
        
        <?php endwhile; else: ?>
        	<h2>Nada Encontrado</h2>
            <p>Erro 404</p>
            <p>Lamentamos mas não foram encontrados resultados.</p>
        
    <?php endif; ?>
</div>
<?php get_footer(); ?>