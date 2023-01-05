
const nav=document.getElementsByTagName("nav")[0];
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');
let a5 = document.getElementById('a5');
let logo = document.getElementById('logo');
let logo1 = document.getElementById('logo1');
const topoNav=nav.offsetTop;



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
	

	}else{
		nav.classList.remove("FixoNoTopo");
		a1.classList.remove("amenor");	
		a2.classList.remove("amenor");	
		a3.classList.remove("amenor");
		a4.classList.remove("amenor");
		a5.classList.remove("amenor");
		logo.classList.remove("logotipo-menor");	
		logo.classList.add("logotipo");
			
	}
}




