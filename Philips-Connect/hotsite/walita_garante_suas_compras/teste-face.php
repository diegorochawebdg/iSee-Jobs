<?php
include ('config.php');

require ROOT_DIR  . 'facebook/facebook.php';

// Create our Application instance (replace this with your appId and secret).
$facebook = new Facebook(array(
  'appId'  => '602685646435981',
  'secret' => 'd2c73c9fafaf3e6e9f6d2d2556d43b67',
));

// Get User ID
$user = $facebook->getUser();


$params = array(
  'scope' => 'user_status,publish_stream,user_photos',
  'redirect_uri' => SITE_URL . 'redirect-facebook.php'
);

$facebook_loginUrl = $facebook->getLoginUrl($params);


//die('{"result":"success","msg":"Cadastro efetuado com sucesso","redirect":"'.SITE_URL .'meus_numeros","facebook_url":"'.$facebook_loginUrl.'"}');

?>


<a href="<?=$facebook_loginUrl?>"> Publicar </a>

