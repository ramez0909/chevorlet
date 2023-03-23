let img = document.querySelector('.img');
let container = document.querySelector('.container');
let content = document.querySelector('.content');
const toggle_btn = document.querySelector(".toggle_btn");
const togglebtnicon = document.querySelector(".toggle_btn i");
const dropdown_menu = document.querySelector(".dropdown_menu");

// dropdown menu function
toggle_btn.onclick = function (){
    dropdown_menu.classList.toggle('open')
    const isOpen = dropdown_menu.classList.contains('open')

    toggle_btn.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
 }



// car changer function
function cars(cars){
    img.src = cars;
}
function colors(colors){
    content.style.background = colors;
}
