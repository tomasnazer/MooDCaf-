import data from "../data/drinks.json" assert {type: "json"};

const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");


btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});



data.bebidas.forEach(bebidas => {

    if(bebidas.Titulo != ""){
        document.getElementById('Product').insertAdjacentHTML('beforeend',
        `<h1>${bebidas.Titulo}</h1)`)
    }


    if(bebidas.stock === "true"){ if(bebidas.img != "") {
    document.getElementById('Product').insertAdjacentHTML('beforeend',
    `
     
    <picture>
        <img class="img-box" src="${bebidas.img}" alt="bebidas-pic">
    </picture>
    <span class="product">${bebidas.nombre} $${bebidas.precio}</span>
    <span class="description">${bebidas.descripcion}</span>
    `
    )} else  {document.getElementById('Product').insertAdjacentHTML('beforeend',
        `<span class="product">${bebidas.nombre} $${bebidas.precio}</span>
        <span class="description">${bebidas.descripcion}</span>`
)}} else { if(bebidas.img !=""){
        document.getElementById('Product').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${bebidas.img}" alt="Product-pic">
        </picture>
        <span class="product">${bebidas.nombre} $${bebidas.precio}</span>
        `
        )} else{ if(bebidas.stock === "false"){
            document.getElementById('Product').insertAdjacentHTML('beforeend',
            `<span class="product">${bebidas.nombre} $${bebidas.precio}</span>
            <span class="description">SIN STOCK!</span>`
)}}}
        
});
