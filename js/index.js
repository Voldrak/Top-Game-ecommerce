import {openNav, btnMenu} from "./menu.js";

    // Login


    const userAcc = document.querySelector('#username')
    const passAcc = document.querySelector('#passw')
    const loginBtn = document.querySelector('#loginBtn')

    const userStorage = localStorage.getItem("username");
    const passStorage = localStorage.getItem("password");
    

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
    if (userAcc.value != userStorage  || passAcc.value != passStorage) {
        alert('Username o/e password errate, riprova.')
    }
    else if (userAcc.value == userStorage  && passAcc.value == passStorage) {
        alert(`Bentornato ${userStorage}`)
    };
});



