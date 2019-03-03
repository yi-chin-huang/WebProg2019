var image = ['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg','image/5.jpg','image/6.jpg','image/7.jpg','image/8.jpg','image/9.jpg','image/10.jpg'];
var url = ['https://farm8.staticflickr.com/7872/40265067083_b66df7ce62_b.jpg',
'https://farm8.staticflickr.com/7914/46506629984_eabe12ddd8_b.jpg',
'https://farm8.staticflickr.com/7857/40265067223_5c7ceb1808_b.jpg',
'https://farm8.staticflickr.com/7881/46506630834_e3801f7084_b.jpg',
'https://farm8.staticflickr.com/7888/40265067513_d79951181a_b.jpg',
'https://farm8.staticflickr.com/7923/46506631334_d661c812bf_b.jpg',
'https://farm8.staticflickr.com/7883/46506632104_1a62364600_b.jpg',
'https://farm8.staticflickr.com/7852/47178054892_99725b24d2_b.jpg',
'https://farm8.staticflickr.com/7805/32288040317_8e6abff682_b.jpg',
'https://farm8.staticflickr.com/7879/40265066593_7bf8635e0a_b.jpg']
var num = 5 ;	
function left(){
	if(num !== 1){
		num = num-1;
		document.getElementById("display").src=image[num-1];
		document.getElementById('now').src = image[num-1];
		document.getElementById("next").src = image[num];
		document.getElementById("prev").src = image[num-2];
		document.getElementById("url").innerHTML = url[num-1];
		document.getElementById('right').classList.remove('disabled');
		document.getElementById('next').style.display = 'inline';
		if(num === 1 ){
			document.getElementById('left').classList.add('disabled');
			document.getElementById('prev').style.display = 'none';
		}
	}
}
function right(){
	if(num !== 10){
		num = num+1;
		document.getElementById('now').src = image[num-1];
		document.getElementById("next").src = image[num];
		document.getElementById("prev").src = image[num-2];
		document.getElementById("display").src=image[num-1];
		document.getElementById("url").innerHTML = url[num-1];
		document.getElementById('left').classList.remove('disabled');
		document.getElementById('prev').style.display = 'inline';
		if(num === 10){
			document.getElementById('right').classList.add('disabled');
			document.getElementById('next').style.display = 'none';
		}
	}
}