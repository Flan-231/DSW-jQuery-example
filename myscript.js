$(document).ready(function() {
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	
	$("#hide").click(function(){
  $("p").hide(2);
});

$("#show").click(function(){
  $("p").show(1);
});
	
});
