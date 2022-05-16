import data from "../data/food.json" assert {type: "json"};

const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");


btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});


data.product.forEach(product => {

    //Asking for the tittle of the section

    if(product.Titulo != ""){
        document.getElementById('product').insertAdjacentHTML('beforeend',
        `<h1>${product.Titulo}</h1)`)
    }

    //Showing the options of the menu
    
    if(product.stock === "true"){ if(product.img != "") {
    document.getElementById('product').insertAdjacentHTML('beforeend',
    `
    <picture>
        <img class="img-box" src="${product.img}" alt="product-pic">
    </picture>
    <span class="product">${product.nombre} $${product.precio}</span>
    <span class="description">${product.descripcion}</span>
    `
    )} else  {document.getElementById('product').insertAdjacentHTML('beforeend',
        `<span class="product">${product.nombre} $${product.precio}</span>
        <span class="description">${product.descripcion}</span>`
)}} else { if(product.img !=""){
        document.getElementById('product').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${product.img}" alt="product-pic">
        </picture>
        <span class="product">${product.nombre} $${product.precio}</span>
        `
        )} else{ if(product.stock === "false"){
            document.getElementById('product').insertAdjacentHTML('beforeend',
            `<span class="product">${product.nombre} $${product.precio}</span>
            <span class="description">SIN STOCK!</span>`
)}}}
        
});


