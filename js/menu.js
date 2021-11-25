// Menù
const openNav = document.querySelector(".openNav");
const btnMenu = document.querySelector(".btnMenu");

btnMenu.addEventListener('click', () => {
    openNav.classList.toggle("menuTog");
    btnMenu.classList.toggle("btnMenuClose");
        
});


export {openNav, btnMenu}