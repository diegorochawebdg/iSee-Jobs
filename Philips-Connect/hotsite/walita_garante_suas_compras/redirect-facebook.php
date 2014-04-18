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

if( $user ){
  $permissions = $facebook->api( '/me/permissions' );
  if( isset( $permissions[ 'data' ] ) && isset( $permissions[ 'data' ][0]['publish_actions']  ) ){
    // Viva voce tem permissao \o/
	
		$friends = $facebook->api( '/me/friends' );
		
		$mural = array(
			'message'     => 'Estou participando',
  			'name'        => 'Promoção - Não passe sem esse banho de loja | Philips Walita',
  			'caption'     => 'Promoção - Não passe sem esse banho de loja | Philips Walita',
  			'link'        => 'http://www.banhodelojaphilipswalita.com.br',
  			'description' => 'Estou participando da promoção bla bla bla',
  			'picture'     => 'http://www.banhodelojaphilipswalita.com.br/images/thumbnail.jpg',
  			'actions'     => array(
							 array(
			  					'name' => 'Teste',
			  					'link' => 'http://www.banhodelojaphilipswalita.com.br'
							))
		);
			
		$endpoint = '/me/feed';
		$facebook->api( $endpoint, 'POST', $mural );
  }
}

?>