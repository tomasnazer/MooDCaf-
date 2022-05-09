import data from "../data/cafe.json" assert {type: "json"};

const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");

console.log(data)

btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});


data.cafe.forEach(cafe => {
    if(cafe.stock === "true"){
    document.getElementById('cafeteria').insertAdjacentHTML('beforeend',
    `
     
    <picture>
        <img class="img-box" src="${cafe.img}" alt="coffe-pic">
    </picture>
    <span class="product">${cafe.nombre} $${cafe.precio}</span>
    <span class="description">${cafe.descripcion}</span>
    `
    )} else {
        document.getElementById('cafeteria').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${cafe.img}" alt="coffe-pic">
        </picture>
        <span class="product">${cafe.nombre} $${cafe.precio}</span>
        <span class="description">SIN STOCK!</span>`
        )}
});

//document.getElementById('cafeteria').appendChild('<ol><li>html data</li></ol>');