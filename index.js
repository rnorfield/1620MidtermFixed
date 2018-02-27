document.getElementById("bg1").addEventListener("click", function(){
	gears = 1;
	document.getElementById("main").style.display = "block";
	document.getElementById("menutext").innerHTML = "Head Gear";
	document.getElementById("img1").style.backgroundImage = ("url(imgs/gears/h1.png)");
	document.getElementById("img2").style.backgroundImage = ("url(imgs/gears/h2.png)");
	document.getElementById("img3").style.backgroundImage = ("url(imgs/gears/h3.png)");
});
document.getElementById("bg2").addEventListener("click", function(){
	gears = 2;
	document.getElementById("main").style.display = "block";
	document.getElementById("menutext").innerHTML = "Body Gear";
	document.getElementById("img1").style.backgroundImage = ("url(imgs/gears/b1.png)");
	document.getElementById("img2").style.backgroundImage = ("url(imgs/gears/b2.png)");
	document.getElementById("img3").style.backgroundImage = ("url(imgs/gears/b3.png)");
});
document.getElementById("bg3").addEventListener("click", function(){
	gears = 3;
	document.getElementById("main").style.display = "block";
	document.getElementById("menutext").innerHTML = "Leg Gear";
	document.getElementById("img1").style.backgroundImage = ("url(imgs/gears/l1.png)");
	document.getElementById("img2").style.backgroundImage = ("url(imgs/gears/l2.png)");
	document.getElementById("img3").style.backgroundImage = ("url(imgs/gears/l3.png)");
});
document.getElementById("bg4").addEventListener("click", function(){
	gears = 4;
	document.getElementById("main").style.display = "block";
	document.getElementById("menutext").innerHTML = "Foot Gear";
	document.getElementById("img1").style.backgroundImage = ("url(imgs/gears/f1.png)");
	document.getElementById("img2").style.backgroundImage = ("url(imgs/gears/f2.png)");
	document.getElementById("img3").style.backgroundImage = ("url(imgs/gears/f3.png)");
});
document.getElementById("main").addEventListener("click", function(){
	document.getElementById("main").style.display = "none";
});