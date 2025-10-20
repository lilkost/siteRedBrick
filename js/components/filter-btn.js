export const fillterBtn = () =>{
    const btns = document.querySelectorAll(".filter__item-btn");

    if(!btns) return;

    btns.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            btns.forEach(b=>b.classList.remove("is-active"));
            btn.classList.add("is-active");
        });
    })
}