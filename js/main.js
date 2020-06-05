/*==============================header scripts==============================*/
let burger = document.getElementById("burger");
let burger_menu = document.getElementsByClassName("header__overlay")[0];
let burger_close = document.getElementsByClassName("close")[0];
burger.addEventListener("click", function() {
    burger_menu.classList.toggle("show");
});
burger_close.addEventListener("click", function() {
    burger_menu.classList.remove("show");
});


