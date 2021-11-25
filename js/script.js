import {products} from "./products.js"; 
import {openNav, btnMenu} from "./menu.js";

const render = (container, items) => {
  const elements = items.map((element) => 
    `<div class="product">
      <img class="icona" src="${element.image}" alt="">
      <h3>${element.title}</h3>
      <p class="descTxt">${element.description}<p>
      <a href="#"><button type="button" class="cartBtn">
      <img class="cartImg" src="https://img.icons8.com/nolan/64/fast-cart.png"/>
      </button></a> 
      <p class="priceP"><strong>${element.price} €</strong></p>
    </div>`
  );
  

  const content = elements.join('');

  container.innerHTML = content;

}

const input = document.querySelector('#cercaC input');


const list = document.querySelector(".wrapper__products")
render(list, products);

const localStorageTot = localStorage.getItem("totCartitems");
const cartProductsNum = document.querySelector(".cartProductsNum")
const productsElements = document.querySelectorAll(".product");
// const divProdotti = document.querySelector(".wrapper__products")

let carrello = [];


// cartProductsNum.textContent = `prezzo prodotti: ${localStorageTot}`

// cerca gioco
input.addEventListener('keyup', (event) => {
  const value = input.value.toLowerCase();

  const results = products.filter((element) => 
  element.title.toLowerCase().search(value) > -1
);
render(list, results)

productsElements.forEach((el) =>
  el.addEventListener("click", () => {
    el.classList.toggle("productAct");
    
      carrello.push(el);
      
    localStorage.setItem("totCartitems", carrello.length);
    console.log(carrello);

    setTimeout(() => {
    el.remove();
    },3000);
     })
);


});


productsElements.forEach((el) =>
  el.addEventListener("click", () => {
    el.classList.toggle("productAct");
    
      carrello.push(el);
      
    localStorage.setItem("totCartitems", carrello.length);
    console.log(carrello);

    setTimeout(() => {
    el.remove();
    },3000);
     })
);

