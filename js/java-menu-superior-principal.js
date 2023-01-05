
const nav=document.getElementsByTagName("nav")[0];
const banner=document.getElementsByClassName("manual-navigation")[0];
//const container=document.getElementsByClassName("container")[0];
const slider=document.getElementsByClassName("slider")[0];
let bloco = document.getElementById('bloco');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');
let a5 = document.getElementById('a5');
let logo = document.getElementById('logo');
let logo1 = document.getElementById('logo1');
let auto1 = document.getElementById('auto1');
let auto2 = document.getElementById('auto2');
let auto3 = document.getElementById('auto3');
let auto4 = document.getElementById('auto4');
let radio1 = document.getElementById('r1');
let radio2 = document.getElementById('r2');
let radio3 = document.getElementById('r3');
let radio4 = document.getElementById('r4');
//let container = document.getElementByClassName("container");
const topoNav=nav.offsetTop;
const topoBanner=banner.offsetTop;


window.onscroll=function(){
	fixarMenuNoTopo();
}

function fixarMenuNoTopo(){
	if(window.pageYOffset >= topoNav){
		nav.classList.add("FixoNoTopo");
		a1.classList.add("amenor");
		a2.classList.add("amenor");
		a3.classList.add("amenor");
		a4.classList.add("amenor");
		a5.classList.add("amenor");
		logo.classList.add("logotipo-menor");
		logo.classList.remove("logotipo");
		//container.classList.add("relative-cont");
		//slider.classList.add("slider-fix");
		//bloco.classList.add("relative-cont");	

	}else{
		nav.classList.remove("FixoNoTopo");
		a1.classList.remove("amenor");	
		a2.classList.remove("amenor");	
		a3.classList.remove("amenor");
		a4.classList.remove("amenor");
		a5.classList.remove("amenor");
		logo.classList.remove("logotipo-menor");	
		logo.classList.add("logotipo");
		//container.classList.remove("relative-cont");
		//slider.classList.remove("slider-fix");
		//bloco.classList.remove("relative-cont");		
			
	}

	if(window.pageYOffset >= 260){


		auto1.classList.add("sumir");
		auto2.classList.add("sumir");
		auto3.classList.add("sumir");
		auto4.classList.add("sumir");
		radio1.classList.add("sumir");
		radio2.classList.add("sumir");
		radio3.classList.add("sumir");
		radio4.classList.add("sumir");
		

	}else{

		auto1.classList.remove("sumir");
		auto2.classList.remove("sumir");
		auto3.classList.remove("sumir");
		auto4.classList.remove("sumir");
		radio1.classList.remove("sumir");
		radio2.classList.remove("sumir");
		radio3.classList.remove("sumir");
		radio4.classList.remove("sumir");
					
	}


	/*if(window.pageYOffset >= 0){

		slider.classList.add("slider-fix");
		bloco.classList.add("relative-cont");	
		

	}else{

		slider.classList.remove("slider-fix");
		bloco.classList.remove("relative-cont");	
					
	}*/
}




//let container = document.getElementByClassName('container');
// alterando uma propriedade
//container.style.position = 'relative';
// varias propriedades
//el.style.cssText =
  //  'color: blue;' +
   // 'background-color: yellow;' +
    //'border: 1px solid magenta';