import data from "../data/food.json" assert {type: "json"};

const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");


btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});

//Entradas

data.Entradas.forEach(Entradas => {
    if(Entradas.stock === "true"){ if(Entradas.img != "") {
    document.getElementById('Entradas').insertAdjacentHTML('beforeend',
    `
     
    <picture>
        <img class="img-box" src="${Entradas.img}" alt="Entradas-pic">
    </picture>
    <span class="product">${Entradas.nombre} $${Entradas.precio}</span>
    <span class="description">${Entradas.descripcion}</span>
    `
    )} else  {document.getElementById('Entradas').insertAdjacentHTML('beforeend',
        `<span class="product">${Entradas.nombre} $${Entradas.precio}</span>
        <span class="description">${Entradas.descripcion}</span>`
)}} else { if(Entradas.img !=""){
        document.getElementById('Entradas').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${Entradas.img}" alt="Entradas-pic">
        </picture>
        <span class="product">${Entradas.nombre} $${Entradas.precio}</span>
        `
        )} else{ if(Entradas.stock === "false"){
            document.getElementById('Entradas').insertAdjacentHTML('beforeend',
            `<span class="product">${Entradas.nombre} $${Entradas.precio}</span>
            <span class="description">SIN STOCK!</span>`
)}}}
        
});


