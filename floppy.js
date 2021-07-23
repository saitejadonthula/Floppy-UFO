var hei;
var wid;
var a ;
var ani;
var bol;
function start(){
	hei = parseInt(window.getComputedStyle(document.getElementById("box")).getPropertyValue("height"))/2;
	wid = parseInt(window.getComputedStyle(document.getElementById("box")).getPropertyValue("width"));
	var actualWidth = wid;
	wid = wid*(5/6);
	bol = (parseInt(window.getComputedStyle(document.getElementById("one")).getPropertyValue("width")));
	document.getElementById("box").style.height = (hei).toString().concat("px");
	document.getElementById("box").style.width = (wid).toString().concat("px");
	var x = document.createElement("button");
	x.setAttribute("onclick","declareVar()");
	x.setAttribute("id","bu");
	document.getElementById("play").append(x);
	document.getElementById("bu").innerHTML = "Start game";
	document.getElementById("play").append(document.createElement("br"));
	document.getElementById("play").append("Tap anywhere or press any KEY to let the box jump.")
	a = 5*(hei/300);
	ani = (wid/63);
	y2 = y+hei/10;
	l = wid-parseInt(window.getComputedStyle(document.getElementById("bird")).getPropertyValue("margin-left"));
	r = l-actualWidth/10;
	oh = hei*(1/5);
}
var y = document.getElementById("bird");
y = parseInt(window.getComputedStyle(y).getPropertyValue("margin-top"));
var y2 = y+hei/10;
var l = wid-parseInt(window.getComputedStyle(document.getElementById("bird")).getPropertyValue("margin-left"));
var r ;
var p = 10*(hei/500) ;
var tme = 0.5;
var stopvar;
var stopeni,stoptrans;
var t;
count =0;
function declareVar(){
	stopvar = window.setInterval(game,100);
	document.getElementById("bu").innerHTML="jump";
	document.getElementById("bu").setAttribute("onclick","ip()");
	stopeni = window.setInterval(enemy,3500);
	stoptrans = window.setInterval(animate,60);
}
function game(){
	
	if(y!=0) y = fun(y);
	y2 = y+hei/10;
	if(y<=0||y2>hei){
		 clearInterval(stopvar);
		 clearInterval(stoptrans);
		 clearInterval(stopeni);
		 alert("Your score is"+ count);
		 if(y2>hei) y=hei-hei/10;
		 else y = 0;
	   	 document.getElementById("bird").style.setProperty("margin-top",(y.toString()).concat("px"));
	   	 document.getElementById("box").innerHTML = "Game over!!!";
		 document.getElementById("bu").innerHTML = "Restart the game";
	     document.getElementById("bu").setAttribute("onclick","location.reload()");
	   	 return;
	}
	document.getElementById("flame").style.setProperty("border-top","  15px solid yellow");
	document.getElementById("flame").style.setProperty("margin-top",((y+hei/10).toString().concat("px")));
	document.getElementById("bird").style.setProperty("margin-top",(y.toString()).concat("px"));
}

function fun(t){
	if(p>0) t = t+(tme*p+a*tme);
	else t= t-(-tme*p+a*tme);
	p = p+a*tme;
	return t;
}
function ip(){
	document.getElementById("flame").style.setProperty("border-top" ," 25px solid orange");
	p = -30*(hei/500);
}
var coun = 1;
var oh = hei*(2/5);
function enemy(){
	let w = document.getElementById("one");
	oh = Math.random()*70;
	w.style.setProperty("right","0px");
	clearInterval(stoptrans);
	document.getElementById("two").style.setProperty("right","0px");
	stoptrans = window.setInterval(animate,60);
	w.style.setProperty("height",oh.toString().concat("px"));
	document.getElementById("two").style.setProperty("height",(hei-oh-hei/2).toString().concat("px"));
	++count;
}

function animate() {

	var u = parseInt(window.getComputedStyle(document.getElementById("one")).getPropertyValue("right"));
	if(u+bol>=wid) return;
	document.getElementById("one").style.right = (u+ani).toString().concat("px"); 
	var u2 = parseInt(window.getComputedStyle(document.getElementById("two")).getPropertyValue("right"));
	document.getElementById("two").style.right = (u2+ani).toString().concat("px");
	if((u+ani+bol<=l&&u+ani+bol>=r)||(u+ani<=l&&u+ani>=r)) {
		if(y<=oh||y2>=oh+hei/2) {
			y=0;
			document.getElementById("bird").style.setProperty("background-color","yellow");
			game();
		}
	}
}
