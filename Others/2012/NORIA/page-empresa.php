<?php get_header(); ?>
<style>
body {
background:#0A345C url(<?php bloginfo('template_directory');
?>/images/bg-body.png) repeat-x center top !important
}
</style>
<div id="conteudo">
  <h2>A Empresa</h2>
  <div class="coluna-esquerda">
  	<?php echo get('empresa_coluna_esquerda'); ?>
  </div>
  <div class="coluna-direita">
  	<?php echo get('empresa_coluna_direita'); ?>
  </div>
  <div class="clear" style="text-align: justify;"></div>
  <div class="instrutores">
    <div class="titulo">
      <h2>Consultores</h2>
    </div>
    <div class="marcello">
      <?php echo get('empresa_consultores_esquerda'); ?>
    </div>
    <div class="alejandro">
      <?php echo get('empresa_consultores_direita'); ?>
    </div>
    <div class="clear"></div>
  </div>
</div>
<?php get_footer(); ?>
