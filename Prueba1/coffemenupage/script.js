const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");

btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});
