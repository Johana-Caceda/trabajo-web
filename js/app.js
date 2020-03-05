$('.animate').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  fade: true,
});

//----------------------------------------------------------//



var enlaces = document.querySelectorAll(".menu_link");

enlaces.forEach(function(ele){
	ele.addEventListener("click", cambiarcolor);
})

function cambiarcolor(){
	despintar();
	this.classList.add("verde");
}

function despintar (){
	enlaces.forEach(function(ele){
		ele.classList.remove("verde");
	})
}

//---------------------------------//

var item = document.querySelector(".main_item");
var group = document.querySelector(".main_group");

item.addEventListener("click", function(){
	group.classList.toggle("main_group--visible");
})

var itemtwo = document.querySelector(".main_item_two");
var grouptwo = document.querySelector(".main_group_two");

itemtwo.addEventListener("click", function(){
	grouptwo.classList.toggle("main_group--visible");
})

var itemthree = document.querySelector(".main_item_three");
var groupthree = document.querySelector(".main_group_three");

itemthree.addEventListener("click", function(){
	groupthree.classList.toggle("main_group--visible");
})

var itemfour = document.querySelector(".main_item_four");
var groupfour = document.querySelector(".main_group_four");

itemfour.addEventListener("click", function(){
	groupfour.classList.toggle("main_group--visible");
})

var itemfive = document.querySelector(".main_item_five");
var groupfive = document.querySelector(".main_group_five");

itemfive.addEventListener("click", function(){
	groupfive.classList.toggle("main_group--visible");
})

//----------------------------------------------------------//

//var botton = document.querySelectorAll(".box");
//var box_text = document.querySelectorAll(".box_text");

//box.forEach(function(ele){
	//ele.addEventListener("click", activarcajatexto);
//});

//function activarcajatexto(){
	//var abrirCaja = this.getAttribute(".more");
	//console.log(abrirCaja);
	//cerrarotrascajas();
	//this.classList.add(".more");
	//mostrarLoSeleccionado(abrirCaja);
//}

//function cerrarotrascajas(){
	//group.forEach(function(ele){
	//ele.classList.remove(".more");
	//});
//}

//function mostrarLoSeleccionado(parametro){
	//var seccion = document.querySelector(parametro);
	//seccion.classList.add("box_text--visible");
//}


//---------------------------------//


var contenido = document.querySelector(".adidas_contenido");
var boton = document.querySelector(".more");

contenido.addEventListener("click", function(){
	boton.classList.toggle("adidas_contenido--visible");
})

//----------------------------------------------------------//


var hnav = document.querySelector(".header_ok");
var but = document.querySelector(".boton_adidas");

but.addEventListener("click", abrirmenu);

function abrirmenu(){
	hnav.classList.toggle("header--visible");
}


//---------------------------------//