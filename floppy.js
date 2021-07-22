var hei;
var wid;

function start(){
	hei = parseInt(window.getComputedStyle(document.getElementById("box")).getPropertyValue("height"))/2;
	wid = parseInt(window.getComputedStyle(document.getElementById("box")).getPropertyValue("width"))*(5/6);
	// hei = hei/2;
	// wid = wid/2;
	document.getElementById("box").style.height = (hei).toString().concat("px");
	document.getElementById("box").style.width = (wid).toString().concat("px");
	console.log(hei/2);
	var x = document.createElement("button");
	x.setAttribute("onclick","declareVar()");
	x.setAttribute("id","bu");
	document.getElementById("play").append(x);
	document.getElementById("bu").innerHTML = "Start game";

}
var y = document.getElementById("bird");
y = parseInt(window.getComputedStyle(y).getPropertyValue("margin-top"));
var y2 = y+hei/10;
var l = wid - wid/5;
var r = wid + wid/5;
var p = 1 ;
var stopvar;
function declareVar(){
	stopvar = window.setInterval(game,100);
	document.getElementById("bu").setAttribute("onclick","");
}
function game(){
	
	y = fun(y);
	y2 = y+hei/10;
	if(y<0||y2>hei){
		 clearInterval(stopvar);
		 if(y2>hei) y=hei-hei/10;
		 else y = 0;
	   	 document.getElementById("bird").style.setProperty("margin-top",(y.toString()).concat("px"));
	   	 document.getElementById("box").innerHTML = "Game over!!!";
		 document.getElementById("bu").innerHTML = "Restart the game";
	     document.getElementById("bu").setAttribute("onclick","location.reload()");
	   	 return;
	}
	document.getElementById("bird").style.setProperty("margin-top",(y.toString()).concat("px"));
}

function fun(t){
	if(p>0) t = t+p*p;
	else t-=p*p;
	p += 0.25;
	return t;
}
function ip(){
	p = -3;
}