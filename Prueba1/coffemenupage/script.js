import data from "../data/cafe.json" assert {type: "json"};

const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");


btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});


data.cafe.forEach(cafe => {
    if(cafe.stock === "true"){ if(cafe.img != "") {
    document.getElementById('cafeteria').insertAdjacentHTML('beforeend',
    `
     
    <picture>
        <img class="img-box" src="${cafe.img}" alt="coffe-pic">
    </picture>
    <span class="product">${cafe.nombre} $${cafe.precio}</span>
    <span class="description">${cafe.descripcion}</span>
    `
    )} else  {document.getElementById('cafeteria').insertAdjacentHTML('beforeend',
        `<span class="product">${cafe.nombre} $${cafe.precio}</span>
        <span class="description">${cafe.descripcion}</span>`
)}} else { if(cafe.img !=""){
        document.getElementById('cafeteria').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${cafe.img}" alt="coffe-pic">
        </picture>
        <span class="product">${cafe.nombre} $${cafe.precio}</span>
        `
        )} else{ if(cafe.stock === "false"){
            document.getElementById('cafeteria').insertAdjacentHTML('beforeend',
            `<span class="product">${cafe.nombre} $${cafe.precio}</span>
            <span class="description">SIN STOCK!</span>`
)}}}
        
});

//document.getElementById('cafeteria').appendChild('<ol><li>html data</li></ol>');


data.Capuccinos.forEach(Capuccinos => {
    if(Capuccinos.stock === "true"){ if(Capuccinos.img != "") {
    document.getElementById('Capuccinos').insertAdjacentHTML('beforeend',
    `
     
    <picture>
        <img class="img-box" src="${Capuccinos.img}" alt="Capuccinos-pic">
    </picture>
    <span class="product">${Capuccinos.nombre} $${Capuccinos.precio}</span>
    <span class="description">${Capuccinos.descripcion}</span>
    `
    )} else  {document.getElementById('Capuccinos').insertAdjacentHTML('beforeend',
        `<span class="product">${Capuccinos.nombre} $${Capuccinos.precio}</span>
        <span class="description">${Capuccinos.descripcion}</span>`
)}} else { if(Capuccinos.img !=""){
        document.getElementById('Capuccinos').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${Capuccinos.img}" alt="Capuccinos-pic">
        </picture>
        <span class="product">${Capuccinos.nombre} $${Capuccinos.precio}</span>
        `
        )} else{ if(Capuccinos.stock === "false"){
            document.getElementById('Capuccinos').insertAdjacentHTML('beforeend',
            `<span class="product">${Capuccinos.nombre} $${Capuccinos.precio}</span>
            <span class="description">SIN STOCK!</span>`
)}}}
        
});