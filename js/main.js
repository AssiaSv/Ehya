$(document).ready(function(){
var burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  console.log("клик по кнопке меню");
  document.querySelector(".navbar-right").classList.toggle("navbar-right--visible");
});
});