<?php get_header(); ?>
<link href="<?php bloginfo('template_directory');?>/css/servicos-treinamentos.css" rel="stylesheet" type="text/css" />
<link href="<?php bloginfo('template_directory');?>/js/shadowbox-3.0.3/shadowbox.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/shadowbox-3.0.3/shadowbox.js"></script>
<script type="text/javascript">
	var options = { 
        overlayColor: '#000' 
      , overlayOpacity: 0.8 
      }; 
    Shadowbox.init(options);  
</script>
<div id="conteudo">
		<!--<style>
			#servicos{background-color:#125A9C !important}
		</style>-->
        <!--CHECAR CATEGORIA E ATRIBUIR O HOVER NO MENU CORRESPONDENTE-->
        <?php 
			$category = get_the_category();
			if ( $category[0]->cat_ID == 3 )
			{
				echo "<style>#servicos{background-color:#125A9C !important}</style>";
			}
			else
			{
				echo"<style>#treinamentos{background-color:#125A9C !important}</style>";
			}
		?>
    	<!--MENU LATERAL-->
        <div class="menu-lateral">
            <div class="titulo">
                <h3>
                	<?php 
						$category = get_the_category();
						if ( $category[0]->cat_ID == 3 )
						{
							echo "Serviços";
						}
						else
						{
							echo"Treinamentos";
						}
					?>
                </h3>
            </div>
            <div class="lista-servicos">
                <ul>
                   <?php foreach(get_the_category() as $category) $thecat = $category -> cat_ID;
						
                        $result   = "";
                        $catposts = get_posts('numberposts=50&category='.$thecat);
                        foreach($catposts as $single):
							
							$class = "";
							if(($single -> ID) ==  get_the_ID()) $class = "hover";
                            $result .= "<li class='$class'><a href='";
                            $result .=get_permalink($single->ID)."'>".$single->post_title."</a></li>";
                        
						endforeach;
                        echo $result;
                    ?>
                   </ul> 
                </div>
        </div>
       
        <div class="servicos-txt">
            <h2><?php echo single_post_title(); ?></h2>
            <?php the_post(); ?>
            <div class="folder-img">
            	
                <?php 
					
					$servicos_imagem = get('servicos_imagem');
					if($servicos_imagem == "") $servicos_imagem = "http://www.noria.com.br/site/wp-content/uploads/2012/10/imagem-do-folder.jpg";
					
				?>
            
                <img src="<?php echo $servicos_imagem; ?>" style="max-width:222px; height:auto;" />
                <div class="clear"></div>
                <img src="<?php bloginfo('template_directory') ?>/images/pdf.jpg" alt="PDF" width="48" height="49" title="PDF" />
                <a href="<?php echo get('servicos_anexo'); ?>" target="_blank">Saiba mais sobre este serviço.</a>
            </div>
            
            <div class="sub-txt">
                <?php the_content(); ?>
            </div>
            <div class="clear"></div>
            <?php
				$category = get_the_category();
				if ( $category[0]->cat_ID == 4 ){
			?>
                <p>Quer este curso na sua planta? <a href="<?php bloginfo('template_directory') ?>/form-in-company.html" rel="shadowbox;width=810;height=700" class="orcamento" title="Solicite um orçamento sem compromisso">Clique aqui</a> e solicite um orçamento sem compromisso.</p>
			<?php
                }
            ?>
            <?php
                include("form.php");
            ?>
        </div>
    
    
    <div class="clear"></div>
</div>
<?php get_footer(); ?>