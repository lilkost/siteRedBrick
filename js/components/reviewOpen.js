export const reviewsOpen = () =>{
    const items = document.querySelectorAll(".reviews__item");

    if(!items) return;

    items.forEach(item=>{
        const link = item.querySelector(".reviews__item-content-open");

        if(link){
            link.addEventListener("click", ()=>{
                item.classList.toggle("is-all-text");
                
                if(item.classList.contains("is-all-text")) {
                    link.innerHTML = "Скрыть";
                }else{{
                    link.innerHTML = "Читать дальше";
                }}
            })
        }
    })
}