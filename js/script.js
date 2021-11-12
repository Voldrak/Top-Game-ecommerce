import {products} from "./products.js"; 

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



const list = document.querySelector(".wrapper__products")
render(list, products);

const cartBtn = document.querySelector(".cartBtn");

cartBtn.addEventListener('click', () => {
  document.getElementsByClassName("product").classname += " productAct";
  console.log(cartBtn, 'ciao');
 });