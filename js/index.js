let navBar = document.querySelector("nav");

window.onscroll = function(){
	if(document.documentElement.scrollTop > 50){
		navBar.classList.add("stikey");
	}else{
		navBar.classList.remove("stikey");
	}
}


let burger_btn = document.getElementById("burger_btn");
let menuItem = document.getElementById("navbarMenu"); 
burger_btn.addEventListener("click",function(){
	menuItem.classList.toggle("showMenu");
})