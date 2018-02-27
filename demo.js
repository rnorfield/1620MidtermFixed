var headcount = 1;
var bodycount = 1;
var legcount = 1;
var footcount = 1;

var rand = 0;

var himg = document.getElementById("head");
var bimg = document.getElementById("body");
var limg = document.getElementById("leg");
var fimg = document.getElementById("foot");

var hr = document.getElementById("headradio");
var br = document.getElementById("bodyradio");
var lr = document.getElementById("legradio");
var fr = document.getElementById("footradio");

document.getElementById("prev").addEventListener("click", function(){

	console.log(hr.checked, br.checked, lr.checked, fr.checked);

	if(hr.checked == true) {
		headcount--;
		if(headcount <= 0){
			headcount = 3;
		}
		himg.src = "imgs/gears/h"+ headcount + ".png";
	}
	else if(br.checked) {
		bodycount--;
		if(bodycount <= 0){
			bodycount = 3;
		}
		bimg.src = "imgs/gears/b"+ bodycount + ".png";
	}
	else if(lr.checked) {
		legcount--;
		if(legcount <= 0){
			legcount = 3;
		}
		limg.src = "imgs/gears/l"+ legcount + ".png";
	}
	else if(fr.checked) {
		footcount--;
		if(footcount <= 0){
			footcount = 3;
		}
		fimg.src = "imgs/gears/l"+ footcount + ".png";
	}else{
			alert("Choose an option");
	}
});

document.getElementById("next").addEventListener("click", function(){

	console.log(hr.checked, br.checked, lr.checked, fr.checked);

	if(hr.checked == true) {
		headcount++;
		if(headcount >= 4){
			headcount = 1;
		}
		himg.src = "imgs/gears/h"+ headcount + ".png";
	}
	else if(br.checked) {
		bodycount++;
		if(bodycount >= 4){
			bodycount = 1;
		}
		bimg.src = "imgs/gears/b"+ bodycount + ".png";
	}
	else if(lr.checked) {
		legcount++;
		if(legcount >= 4){
			legcount = 1;
		}
		limg.src = "imgs/gears/l"+ legcount + ".png";
	}
	else if(fr.checked) {
		footcount++;
		if(footcount >= 4){
			footcount = 1;
		}
		fimg.src = "imgs/gears/l"+ footcount + ".png";
	}else{
			alert("Choose an option");
	}
});

document.getElementById("textbox").addEventListener("keyup", function(ev){

	randh = Math.floor(Math.random()*3)+1;
	randb = Math.floor(Math.random()*3)+1;
	randl = Math.floor(Math.random()*3)+1;
	randf = Math.floor(Math.random()*3)+1;

	if(ev.keyCode == 13){
		if (textbox.value == "combo1"){
				himg.src = "imgs/gears/h1.png";
				bimg.src = "imgs/gears/b1.png";
				limg.src = "imgs/gears/l1.png";
				fimg.src = "imgs/gears/f1.png";
		} else if (textbox.value == "combo2"){
				himg.src = "imgs/gears/h2.png";
				bimg.src = "imgs/gears/b2.png";
				limg.src = "imgs/gears/l2.png";
				fimg.src = "imgs/gears/f2.png";
		} else if (textbox.value == "combo3"){
				himg.src = "imgs/gears/h3.png";
				bimg.src = "imgs/gears/b3.png";
				limg.src = "imgs/gears/l3.png";
				fimg.src = "imgs/gears/f3.png";
		} if (textbox.value == "random"){
				himg.src = "imgs/gears/h"+randh+".png";
				bimg.src = "imgs/gears/b"+randb+".png";
				limg.src = "imgs/gears/l"+randl+".png";
				fimg.src = "imgs/gears/f"+randf+".png";
		}
	}
})