import data from "../data/cafe.json" assert {type: "json"};

const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");


btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});



data.Product.forEach(Product => {

    if(Product.Titulo != ""){
        document.getElementById('Product').insertAdjacentHTML('beforeend',
        `<h1>${Product.Titulo}</h1)`)
    }


    if(Product.stock === "true"){ if(Product.img != "") {
    document.getElementById('Product').insertAdjacentHTML('beforeend',
    `
     
    <picture>
        <img class="img-box" src="${Product.img}" alt="Product-pic">
    </picture>
    <span class="product">${Product.nombre} $${Product.precio}</span>
    <span class="description">${Product.descripcion}</span>
    `
    )} else  {document.getElementById('Product').insertAdjacentHTML('beforeend',
        `<span class="product">${Product.nombre} $${Product.precio}</span>
        <span class="description">${Product.descripcion}</span>`
)}} else { if(Product.img !=""){
        document.getElementById('Product').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${Product.img}" alt="Product-pic">
        </picture>
        <span class="product">${Product.nombre} $${Product.precio}</span>
        `
        )} else{ if(Product.stock === "false"){
            document.getElementById('Product').insertAdjacentHTML('beforeend',
            `<span class="product">${Product.nombre} $${Product.precio}</span>
            <span class="description">SIN STOCK!</span>`
)}}}
        
});


        
