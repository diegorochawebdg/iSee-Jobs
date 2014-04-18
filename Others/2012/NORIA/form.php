<link href="<?php bloginfo('template_directory') ?>/css/formulario.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?php bloginfo('template_directory') ?>/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_directory') ?>/js/form.js"></script>
<div id="formulario">
  <div class="form-header">
    <h3>
		<?php 
			if(is_page('produtos'))
			{
            	echo 'Solicite informações sobre estes produtos:';
			}
			elseif(is_page('contato'))
			{
				echo 'Entre em contato conosco:';
			}
			else
			{
				echo 'Solicite informações sobre este serviço:';
			}
		?>
    </h3>
  </div>
  <div class="envelope"></div>
  <div class="form-body">
  	<input name="assunto" id="assunto" type="hidden" value="<?php single_post_title() ?>" />
    <fieldset>
      <div class="form-left">
        <label>
          <input type="text" name="nome" id="nome" value="NOME:"  onfocus="if (this.value == 'NOME:') {this.value='';}" onblur="if (this.value == '') {this.value='NOME:';}" tabindex="1" />
        </label>
        <label>
          <input type="text" name="email" id="email" value="E-MAIL:"  onfocus="if (this.value == 'E-MAIL:') {this.value='';}" onblur="if (this.value == '') {this.value='E-MAIL:';}" tabindex="2" class="mtop" />
        </label>
        <div class="tel">
          <label>
            <input type="text" name="ddd" value="DDD:" class="ddd-size mtop" id="ddd" onfocus="if (this.value == 'DDD:'){this.value = '';}" onblur="if(this.value == ''){this.value = 'DDD:'};" maxlength="2" tabindex="3" />
          </label>
        </div>
        <div class="traco"></div>
        <div class="tel">
          <label>
            <input type="text" name="telefone" id="telefone" maxlength="9" class="tel-size mtop" value="TELEFONE:" onfocus="if(this.value =='TELEFONE:'){this.value = '';}" onblur="if(this.value == ''){this.value = 'TELEFONE:';}" tabindex="4" />
          </label>
        </div>
        <div class="clear"></div>
      </div>
      <div class="form-right">
        <label style="text-align:">
          <textarea id="mensagem" name="mensagem" cols="1" rows="" onfocus="if(this.value == 'MENSAGEM:'){this.value = '';}" onblur="if(this.value == ''){this.value = 'MENSAGEM:';}" tabindex="5" style="overflow:auto; resize:none;">MENSAGEM:</textarea>
        </label>
      </div>
      <div class="enviar">
        <label> <a href="#" id="envia" title="enviar">Enviar</a> </label>
      </div>
      <div class="clear"></div>
    </fieldset>
  </div>
</div>
<div class="clear"></div>
