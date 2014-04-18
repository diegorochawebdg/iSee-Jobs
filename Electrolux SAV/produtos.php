<script type="text/javascript">
produtos = true;
</script>
<?php include 'header.php' ?>
<style>
#header .produtos-menu{display:block !important; border:solid 2px #F4F2F1; background-color:#F4F2F1; z-index:0;}
#main-menu .produtos .indicator{display:block !important;}
#container .content-center{height:100%;}
</style>

<div class="page-margin">

	<!--Navigation-->
    <div class="navigation">
        <a href="#" title="Tela Inicial">Tela inicial</a>
        <span class="separator">/</span>
        <a href="#" title="Aspirador de pó">Aspirador de pó</a>
        <span class="separator">/</span>
        <a href="#" title="2013">2013</a>
        <div class="clear"></div>
    </div>
    <!--End of Navigation-->

</div>

<?php include 'footer.php' ?>

<!--Scripts-->
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {
	$("#main-menu .produtos").addClass("selected2");
});
</script>
<!--End of Scripts-->