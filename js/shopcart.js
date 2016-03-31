function deamount(amount) {
	if(document.getElementById(amount).value >0 ){
		document.getElementById(amount).value --;
	}
}

function addamount(amount) {
	document.getElementById(amount).value ++;
}

function checkAll(field)
{
for (i = 0; i < field.length; i++)
	field[i].checked = true ;
}

function uncheckAll(field)
{
for (i = 0; i < field.length; i++)
	field[i].checked = false ;
}

function disp_confirm(){
	var r=confirm("Before shopping Tips:\nPlease check you shopping cart and the cost is correct\nThe color of goods may impact in shooting lighting effects, so please don't use the photo for judging.")
	if (r==true){
		window.open('./payment.html','case','status = 1, height = 650, width = 600, resizable = 0');
		window.open('https://docs.google.com/forms/d/1YnbL3cmIIV7fBPwxt3oUFj_I1012PbgbrpE8gKNYo_c/viewform?pli=1');
	}
}