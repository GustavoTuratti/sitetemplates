
let count = 1;
let tempo = 8000;
let countvideo = 10;



document.getElementById("radio1").checked = true;


setInterval( function (){
	nextImage();
}, tempo)

function nextImage(){
	document.getElementById("iframe-v"+count).style.opacity = 0;
	count++;
	//countvideo = countvideo -100;
	if(count>4){count = 1;
		document.getElementById("iframe-v3").style.opacity = 0; 
		document.getElementById("iframe-v2").style.opacity = 0; 
		document.getElementById("iframe-v4").style.opacity = 0; 
	//	countvideo = 50;
	}

document.getElementById("radio"+count).checked = true;

document.getElementById("iframe-v"+count).style.opacity = 1;

}


function prevImage(){
	document.getElementById("iframe-v"+count).style.opacity = 0;
	count--;
	//countvideo = countvideo -100;
	if(count<1){count = 4;
		document.getElementById("iframe-v2").style.opacity = 0; 
		document.getElementById("iframe-v3").style.opacity = 0; 
		document.getElementById("iframe-v1").style.opacity = 0; 
	//	countvideo = 50;
	}

document.getElementById("radio"+count).checked = true;

document.getElementById("iframe-v"+count).style.opacity = 1;

}


function banner1() {
	document.getElementById("iframe-v1").style.opacity = 1;
	document.getElementById("load").style.display = "none";
}


function avancar(){
	count++;
	if(count>4){count = 1;}

document.getElementById("radio"+count).checked = true;

}


function voltar(){
	count--;
	if(count<1){count = 4;}

document.getElementById("radio"+count).checked = true;

}

