var pop=true;
function showPopInfo(event){
	document.getElementById("pop_info").left=event.clientX;
	document.getElementById("pop_info").top=event.clientY;
	alert(document.getElementById("pop_info").left+'   '+document.getElementById("pop_info").top);
}
function addToShoppingCart(product){
	document.getElementById("result").innerHTML = product+' is putted into shopping chart';
}

$(document).ready(function(){
  $(".cartBut").click(function(){
    $("#result").slideDown("slow");
  });
  $("#result").click(function(){
    $("#result").slideUp("slow");
  });
});