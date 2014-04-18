<?php get_header(); ?>
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory')?>/css/home.css" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory')?>css/iehack.css" />
<div id="conteudo">
    <div class="img-home">
        <img src="http://www.noria.com.br/wp-content/themes/noria/images/engrenagens.jpg" alt="Diversas engrenagens com ilustrações que demonstram os serviçoes prestados pela Noria" width="548" height="565" border="0" usemap="#Map" />
        <map name="Map" id="Map">
          <area shape="rect" coords="362,4,549,184" title="Treinamento e alinhamento cultural em lubrificação" />
          <area shape="rect" coords="191,13,341,173" title="Redenho de sala de lubrificação" />
          <area shape="rect" coords="44,151,162,264" title="Recomendações de acessórios para óleos limpos" />
          <area shape="rect" coords="164,175,358,367" title="Melhores práticas de descontaminação" />
          <area shape="rect" coords="377,219,531,365" title="Redesenho de comboios para melhores práticas de lubrificação" />
          <area shape="rect" coords="3,278,163,409" title="Racionalização e identificação de lubrificantes" />
          <area shape="rect" coords="116,390,284,558" title="Desenvolvimento de procedimentos e melhores práticas em campo" />
          <area shape="rect" coords="290,369,448,519" title="Reengenharia da lubrificação de equipamentos industriais e máquinas móveis" />
        </map>
    </div>
    <div class="clear"></div>
    <!--TEXTOS E TÍTULOS-->
    <div class="txts">
        <?php
		$post_id = 458;
		$queried_post = get_post($post_id);
		echo $queried_post->post_content;
		?>
		<?php
			$group = get_group("calendario_home" , $post_id );
			$link_pdf = $group[1]["pdf_do_calendario"][1];
        ?>
        
        
  </div>
    
    <div class="relative">
        <!--BOXES DE TREINAMENTOS E SERVIÇOS-->
        <div class="treinamentos">
            <div class="titulo">
                <h3>Treinamentos</h3>
            </div>
            <div class="txt">
                <ul>
					<?php
                    
                    $args = array( 'numberposts' => 6, 'offset'=> 0, 'category' => 4 );
                    $myposts = get_posts( $args );
                    
                    if(count($myposts) > 0) 
                    { 	
                        foreach( $myposts as $post ) :	setup_postdata($post); ?>
                            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
                     <?php 
                        endforeach;
                    } else { 
                        echo "<li>Nenhum treinamento encontrado.</li>";
                    }
                      ?>
                </ul>
            </div>
            <div class="seta"></div>
        </div>
        
        <div class="servicos-container">
            <div class="relative">
                <div class="chave-front"></div>
                <div class="servicos">
                    <div class="titulo">
                        <h3>Serviços</h3>
                    </div>
                    <div class="txt">
                        <ul>
							<?php
                    
						$args = array( 'numberposts' => 5, 'offset'=> 0, 'category' => 3 );
						$myposts = get_posts( $args );
						
						if(count($myposts) > 0) 
						{ 	
							foreach( $myposts as $post ) :	setup_postdata($post); ?>
								<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
						 <?php 
							endforeach;
						} else { 
							echo "<li>Nenhum treinamento encontrado.</li>";
						}
						  ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="calendario">
          <h4><a href="<?php echo $link_pdf ?>" target="_blank">CALENDÁRIO DE TREINAMENTOS</a></h4>
            <a href="<?php echo $link_pdf; ?>" target="_blank"><img src="<?php bloginfo('template_directory')?>/images/calendario.png" alt="ícone do calendário de treinamentos" width="121" height="123" title="Calendário de Treinamentos" /></a>
            <div class="clear"></div>
        </div>
        <div class="clear"></div>
    </div>
</div>
<?php get_footer(); ?>