export const headerMenu = () =>{
    const btn = document.querySelector(".header__btn-burger"),
        headerMenu = document.querySelector(".header-menu"),
        btnClose = document.querySelector(".header-menu__btn-close");

    btn.addEventListener("click",()=>{
        headerMenu.classList.add("is-open");
    });
    btnClose.addEventListener("click",()=>{
        headerMenu.classList.remove("is-open");
    });
}