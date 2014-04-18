<?php get_header(); ?>
<link href="<?php bloginfo('template_directory');?>/css/servicos-treinamentos.css" rel="stylesheet" type="text/css" />
<div id="conteudo">

	<?php 
		if( is_category('servicos')) { ?>
        <style>
			#servicos{background-color:#125A9C !important}
		</style>
        <!--MENU LATERAL-->
        <div class="menu-lateral">
            <div class="titulo">
                <h3>Serviços</h3>
            </div>
            <div class="lista-servicos">
                <ul>
                    <?php
                    
                    $args = array( 'numberposts' => 50, 'offset'=> 0, 'category' => 3 );
                    $myposts = get_posts( $args );
                    
                    if(count($myposts) > 0) 
                    { 	
                    
                    foreach( $myposts as $post ) :	setup_postdata($post); 
                        
                        
                    ?>	
                        <li><a href="<?php the_permalink(); ?>"><?php the_title() ?></a></li>
                        
                    <?php 
                    endforeach;
                    } else { 
                    echo "<li>Nenhum serviço encontrado.</li>";
                    }
                    ?>
                </ul>
            </div>
        </div>
        
        <div class="servicos-txt">
             <?php
			$post_id = 464;
			$queried_post = get_post($post_id);
			echo $queried_post->post_content;
			?>
        </div>
        
        <?php } else if( is_category('treinamentos') ) { ?>
       	<style>
			#treinamentos{background-color:#125A9C !important}
		</style>
        <!--MENU LATERAL-->
        <div class="menu-lateral">
            <div class="titulo">
                <h3>Treinamentos</h3>
            </div>
            <div class="lista-servicos">
                <ul>
                    <?php
                    
                    $args = array( 'numberposts' => 50, 'offset'=> 0, 'category' => 4 );
                    $myposts = get_posts( $args );
                    
                    if(count($myposts) > 0) 
                    { 	
                    
                    foreach( $myposts as $post ) :	setup_postdata($post); 
                        
                        
                    ?>	
                        <li><a href="<?php the_permalink(); ?>"><?php the_title() ?></a></li>
                        
                    <?php 
                    endforeach;
                    } else { 
                    echo "<li>Nenhum treinamento encontrado.</li>";
                    }
                    ?>
                </ul>
            </div>
        </div>
        
        <div class="servicos-txt">
        	 <?php
				$group = get_group("calendario_home" , $post_id );
				$link_pdf = $group[1]["pdf_do_calendario"][1];
			?>
			 <?php
			$post_id = 467;
			$queried_post = get_post($post_id);
			echo $queried_post->post_content;
			?>
        </div>
        
   <?php } ?>  
    <div class="clear"></div>
</div>
<?php get_footer(); ?>