// **************************** Fonction pour le menu deroulant lorque la taille est inférieure à 820px **************************
function showmenu(){
	document.getElementById("menu-deroulant").style.width = "200px";
	document.getElementById("menu-deroulant").style.display ="block";
	document.getElementById("close-menu").style.display ="block";
	document.getElementById("show-menu").style.display ="none";
}
function closemenu(){
	document.getElementById("menu-deroulant").style.display ="none";
	document.getElementById("show-menu").style.display ="block";
	document.getElementById("close-menu").style.display ="none";
}
// *************************** Fonctions pour afficher et fermer les sous-menus *********************************************
function show_sub_menu1(){
	document.getElementById("sous-menu1").style.width = "175px";
	document.getElementById("sous-menu1").style.display ="block";
	document.getElementById("sous-menu2").style.display ="none";
	document.getElementById("hide-icon1").style.display = "none";
	document.getElementById("show-icon1").style.display = "inline-block";
	document.getElementById("show-icon2").style.display = "none";
	document.getElementById("hide-icon2").style.display = "inline-block";
}
function close_sub_menu1(){
	document.getElementById("sous-menu1").style.display ="none";
	document.getElementById("show-icon1").style.display = "none";
	document.getElementById("hide-icon1").style.display = "inline-block";
}
function show_sub_menu2(){
	document.getElementById("sous-menu2").style.width = "175px";
	document.getElementById("sous-menu2").style.display ="block";
	document.getElementById("sous-menu1").style.display ="none";
	document.getElementById("hide-icon2").style.display = "none";
	document.getElementById("show-icon2").style.display = "inline-block";
	document.getElementById("show-icon1").style.display = "none";
	document.getElementById("hide-icon1").style.display = "inline-block";
}
function close_sub_menu2(){
	document.getElementById("sous-menu2").style.display ="none";
	document.getElementById("show-icon2").style.display = "none";
	document.getElementById("hide-icon2").style.display = "inline-block";
}
// *************************** Fonctions pour afficher et fermer la barre de recherche ***************************************
function showbar(){
	document.getElementById("mySearch").style.display ="inline-block";
	document.getElementById("hidden").style.display ="none";
}
function hide_search(){
	document.getElementById("mySearch").style.display ="none";
	document.getElementById("hidden").style.display ="inline-block";
}
// **************************** Fonctions pour afficher et masquer les solutions (au niveau des exercices) *****************************
function solution1(){
	document.getElementById("solution1").style.display = "block";
	document.getElementById("solution2").style.display = "none";
	document.getElementById("solution3").style.display = "none";
	document.getElementById("solution4").style.display = "none";
	document.getElementById("solution5").style.display = "none";
	document.getElementById("solution6").style.display = "none";
	document.getElementById("solution7").style.display = "none";
	document.getElementById("solution8").style.display = "none";
	document.getElementById("solution9").style.display = "none";
}
function code1(){
	document.getElementById("solution1").style.display ="none";
}
function solution2(){
	document.getElementById("solution1").style.display = "none";
	document.getElementById("solution2").style.display = "block";
	document.getElementById("solution3").style.display = "none";
	document.getElementById("solution4").style.display = "none";
	document.getElementById("solution5").style.display = "none";
	document.getElementById("solution6").style.display = "none";
	document.getElementById("solution7").style.display = "none";
	document.getElementById("solution8").style.display = "none";
	document.getElementById("solution9").style.display = "none";
}
function code2(){
	document.getElementById("solution2").style.display ="none";
}
function solution3(){
	document.getElementById("solution1").style.display = "none";
	document.getElementById("solution2").style.display = "none";
	document.getElementById("solution3").style.display = "block";
	document.getElementById("solution4").style.display = "none";
	document.getElementById("solution5").style.display = "none";
	document.getElementById("solution6").style.display = "none";
	document.getElementById("solution7").style.display = "none";
	document.getElementById("solution8").style.display = "none";
	document.getElementById("solution9").style.display = "none";
}
function code3(){
	document.getElementById("solution3").style.display ="none";
}
function solution4(){
	document.getElementById("solution1").style.display = "none";
	document.getElementById("solution2").style.display = "none";
	document.getElementById("solution3").style.display = "none";
	document.getElementById("solution4").style.display = "block";
	document.getElementById("solution5").style.display = "none";
	document.getElementById("solution6").style.display = "none";
	document.getElementById("solution7").style.display = "none";
	document.getElementById("solution8").style.display = "none";
	document.getElementById("solution9").style.display = "none";
}
function code4(){
	document.getElementById("solution4").style.display ="none";
}
function solution5(){
	document.getElementById("solution1").style.display = "none";
	document.getElementById("solution2").style.display = "none";
	document.getElementById("solution3").style.display = "none";
	document.getElementById("solution4").style.display = "none";
	document.getElementById("solution5").style.display = "block";
	document.getElementById("solution6").style.display = "none";
	document.getElementById("solution7").style.display = "none";
	document.getElementById("solution8").style.display = "none";
	document.getElementById("solution9").style.display = "none";
}
function code5(){
	document.getElementById("solution5").style.display ="none";
}
function solution6(){
	document.getElementById("solution1").style.display = "none";
	document.getElementById("solution2").style.display = "none";
	document.getElementById("solution3").style.display = "none";
	document.getElementById("solution4").style.display = "none";
	document.getElementById("solution5").style.display = "none";
	document.getElementById("solution6").style.display = "block";
	document.getElementById("solution7").style.display = "none";
	document.getElementById("solution8").style.display = "none";
	document.getElementById("solution9").style.display = "none";
}
function code6(){
	document.getElementById("solution6").style.display ="none";
}
function solution7(){
	document.getElementById("solution1").style.display = "none";
	document.getElementById("solution2").style.display = "none";
	document.getElementById("solution3").style.display = "none";
	document.getElementById("solution4").style.display = "none";
	document.getElementById("solution5").style.display = "none";
	document.getElementById("solution6").style.display = "none";
	document.getElementById("solution7").style.display = "block";
	document.getElementById("solution8").style.display = "none";
	document.getElementById("solution9").style.display = "none";
}
function code7(){
	document.getElementById("solution7").style.display ="none";
}
function solution8(){
	document.getElementById("solution1").style.display = "none";
	document.getElementById("solution2").style.display = "none";
	document.getElementById("solution3").style.display = "none";
	document.getElementById("solution4").style.display = "none";
	document.getElementById("solution5").style.display = "none";
	document.getElementById("solution6").style.display = "none";
	document.getElementById("solution7").style.display = "none";
	document.getElementById("solution8").style.display = "block";
	document.getElementById("solution9").style.display = "none";
}
function code8(){
	document.getElementById("solution8").style.display ="none";
}
function solution9(){
	document.getElementById("solution1").style.display = "none";
	document.getElementById("solution2").style.display = "none";
	document.getElementById("solution3").style.display = "none";
	document.getElementById("solution4").style.display = "none";
	document.getElementById("solution5").style.display = "none";
	document.getElementById("solution6").style.display = "none";
	document.getElementById("solution7").style.display = "none";
	document.getElementById("solution8").style.display = "none";
	document.getElementById("solution9").style.display = "block";
}
function code9(){
	document.getElementById("solution9").style.display ="none";
}