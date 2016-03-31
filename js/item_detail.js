function calculate_amount(){
	var amount=document.getElementById("order_amount").value;
	var priceString=document.getElementById("price").innerHTML;
	var price=parseInt(priceString.substring(1));
	var price=amount*price;
	document.getElementById("total_price").innerHTML='$'+price;
}
function addToShoppingCart(product){
	document.getElementById("result").innerHTML=product+" "+document.getElementById("order_amount").value+" packs is putted into shopping cart"
}
$(document).ready(function(){
  $("#buy").click(function(){
    $("#result").slideDown("slow");
  });
  $("#result").click(function(){
    $("#result").slideUp("slow");
  });
});