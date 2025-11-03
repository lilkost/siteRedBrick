export const headerFixed = () =>{
    const header = document.querySelector(".header"),
        mainNode = document.querySelector(".main");

    // проверка достиг ли header footer'a
    if(!mainNode) return;
    mainNode.style.setProperty("--hei", `${header.clientHeight}px`);

    window.addEventListener("resize", ()=>{
        mainNode.style.setProperty("--hei", `${header.clientHeight}px`);
    });

    if(document.querySelectorAll(".link-scroll-top")){
        document.querySelectorAll(".link-scroll-top").forEach(link=>{
            link.addEventListener("click", ()=>{
                scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            })
        })
    }

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 100){
            header.classList.add("is-color");
        } else{
            header.classList.remove("is-color");
        }
    });
}
