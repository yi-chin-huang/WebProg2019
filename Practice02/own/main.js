
var pic_arr = ["images/doggo1.JPG", "images/doggo2.JPG", "images/doggo3.JPG", "images/doggo4.JPG", "images/doggo5.JPG", "images/doggo6.JPG", "images/doggo7.JPG"];
var name_arr = ["多多", "丸子", "小黑(?)", "いちご", "多多(他也是多多)", "Nicki", "阿肥"];

var click_bottom = document.getElementsByClassName("image-viewer__button");

var image = document.getElementById("display");

var pic_cnt = 0;

function init()
{
	showLoading();
	document.getElementsByClassName("image-viewer__button")[0].classList.add("disabled")
}

function previousImage() {

	if(pic_cnt != 0) //able to click buttom
	{
		pic_cnt -= 1;
		showLoading();
		document.getElementsByClassName("image-viewer__button")[1].classList.remove("disabled")
		if(pic_cnt == 0) // disable the buttom
		{
			document.getElementsByClassName("image-viewer__button")[0].classList.add("disabled")			
		}
		else
		{
			document.getElementsByClassName("image-viewer__button")[0].classList.remove("disabled")
		}
		document.getElementById("display").src = pic_arr[pic_cnt]; //chane the picture
		document.getElementById("source").innerHTML = "Doggo's name: "+ name_arr[pic_cnt];
		
	}
}


function nextImage() {


	if(pic_cnt != pic_arr.length-1) //able to click buttom
	{
		showLoading();
		pic_cnt += 1;
		document.getElementsByClassName("image-viewer__button")[0].classList.remove("disabled")
		if(pic_cnt == pic_arr.length-1) // disable the buttom
		{
			document.getElementsByClassName("image-viewer__button")[1].classList.add("disabled")			
		}
		else
		{
			document.getElementsByClassName("image-viewer__button")[1].classList.remove("disabled")
		}

		document.getElementById("display").src = pic_arr[pic_cnt]; //chane the picture
		document.getElementById("source").innerHTML = "Doggo's name: "+ name_arr[pic_cnt];		
	}
}

function showLoading() {

	document.getElementById("loading").style.display = "block";
	document.getElementById("display").style.display = "none";
    setTimeout("hide()", 300);  // 1 second
}

function hide(){
    document.getElementById("loading").style.display = "none" ;
    document.getElementById("display").style.display = "block";
}
