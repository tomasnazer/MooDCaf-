import data from "../data/cafe.json" assert {type: "json"};

const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");


btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});

//Coffe Section

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

//Capuccinos and Lattes section

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

//Combos section

data.Combos.forEach(Combos => {
    if(Combos.stock === "true"){ if(Combos.img != "") {
    document.getElementById('Combos').insertAdjacentHTML('beforeend',
    `
     
    <picture>
        <img class="img-box" src="${Combos.img}" alt="Combos-pic">
    </picture>
    <span class="product">${Combos.nombre} $${Combos.precio}</span>
    <span class="description">${Combos.descripcion}</span>
    `
    )} else  {document.getElementById('Combos').insertAdjacentHTML('beforeend',
        `<span class="product">${Combos.nombre} $${Combos.precio}</span>
        <span class="description">${Combos.descripcion}</span>`
)}} else { if(Combos.img !=""){
        document.getElementById('Combos').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${Combos.img}" alt="Combos-pic">
        </picture>
        <span class="product">${Combos.nombre} $${Combos.precio}</span>
        `
        )} else{ if(Combos.stock === "false"){
            document.getElementById('Combos').insertAdjacentHTML('beforeend',
            `<span class="product">${Combos.nombre} $${Combos.precio}</span>
            <span class="description">SIN STOCK!</span>`
)}}}
        
});


//Frios section

data.Frios.forEach(Frios => {
    if(Frios.stock === "true"){ if(Frios.img != "") {
    document.getElementById('Frios').insertAdjacentHTML('beforeend',
    `
     
    <picture>
        <img class="img-box" src="${Frios.img}" alt="Frios-pic">
    </picture>
    <span class="product">${Frios.nombre} $${Frios.precio}</span>
    <span class="description">${Frios.descripcion}</span>
    `
    )} else  {document.getElementById('Frios').insertAdjacentHTML('beforeend',
        `<span class="product">${Frios.nombre} $${Frios.precio}</span>
        <span class="description">${Frios.descripcion}</span>`
)}} else { if(Frios.img !=""){
        document.getElementById('Combos').insertAdjacentHTML('beforeend',
        `
        <picture>
            <img class="img-box" src="${Frios.img}" alt="Frios-pic">
        </picture>
        <span class="product">${Frios.nombre} $${Frios.precio}</span>
        `
        )} else{ if(Frios.stock === "false"){
            document.getElementById('Frios').insertAdjacentHTML('beforeend',
            `<span class="product">${Frios.nombre} $${Frios.precio}</span>
            <span class="description">SIN STOCK!</span>`
)}}}
        
});