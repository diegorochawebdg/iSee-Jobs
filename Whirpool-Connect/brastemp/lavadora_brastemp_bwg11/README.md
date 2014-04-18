iSee Connect Special Content
=================

Página especial para o produto iSee Connect usando Connect Framework.

<strong>Estrutura de páginas</strong>

<ul>
<li>index.html - Arquivo onde será carregado o framework e suas páginas (Não necessita de alteração)</li>
<li>caracteristica1/4.html - Páginas relacionadas as características do produto.</li>
<li>especificacoes.html - Página relacionada as especificações do produto</li>
<li>fotos.html - Fotos do produto</li>
<li>videos.html - Página de vídeos</li>
<li>saiba-mais.html - Mais informações sobre o produto</li>
</ul>

<strong>Estrutura de pastas:</strong>
<ul>
<li>/caracteristicas - Pasta onde deve ser inserido os assets relacionados a todas as páginas de caracteristicas. Sendo assim, colocando tudo o que for para todas as páginas dentro da raíz e o que for relacionado a páginas avulsas dentro de page1,2,3 e assim por diante.</li>
<li>/cliente - Aqui dentro deve ser inserido assets relacionados ao cliente, tais como: Logo, imagens de especificações, manual de instruções e página para impressão (print.jpg)</li>
<li>/galeria - Pasta relacionada a galeria de imagens, na raíz devem ser colocadas as fotos nomeadas como: foto0x.jpg e as miniaturas dentro da pasta /galeria/thumbs. As miniaturas de vídeos devem ser colocadas na pasta /galeria/videos</li>
<li>/config - Pasta responsável pela configuração do projeto</li>
</ul>

<strong>Configurações</strong>
<ul>
<li><strong>config.js: </strong>Arquivo de configuração geral do projeto contendo.<br/><ul><li>Nome do produto</li><li>Pasta no servidor</li><li>Caminho e informações para as páginas de características</li><li>ID's dos vídeos no youtube</li></ul>
<li><strong>google-analytics.js:</strong> Arquivo de configuração da ID do google analytics<br /><span style='color: #FF0000;'><strong>( Muito importante não esquecer de alterar esse arquivo! )</strong></span></li>
</ul>
