var focus_pic;
function focusPic1()
//check thumbnail1 to show picture1
{
	if (!focus_pic.src.match("1.jpg")){
		focus_pic.src="1.jpg";
	}
}
function focusPic2()
//check thumbnail2 to show picture2
{
	if (!focus_pic.src.match("2.jpg")){
		focus_pic.src="2.jpg";
	}
}
function focusPic3()
//check thumbnail3 to show picture3
{
	if (!focus_pic.src.match("3.jpg")){
		focus_pic.src="3.jpg";
	}
}
function PicTimer()
//show next picture every 5 second
{
	focus_pic=document.getElementById("focus_pic");
	setInterval(function(){nextPics()},5000);
}
function nextPics()
//show next picture
{
	if (focus_pic.src.match("1.jpg")){
		focusPic2();
	}
	else if (focus_pic.src.match("2.jpg")){
		focusPic3();
	}
	else if (focus_pic.src.match("3.jpg")){
		focusPic1();
	}
}