export const headerFixed = () =>{
    const header = document.querySelector(".header"),
        mainNode = document.querySelector(".main");

    // проверка достиг ли header footer'a
    const targetBlocks = [
        { 
            node: document.querySelector('.footer'), 
            isInViewport: false, 
            fn: function() {
                const header = document.querySelector(".header");
                if (this.isInViewport) {
                    header.classList.add("is-hidden");
                    // document.querySelector(".header-menu").classList.remove("is-open");
                    // document.querySelector(".header__burger").classList.remove("is-active")
                } else {
                    header.classList.remove("is-hidden");
                }
            },
        },
        { 
            node: document.querySelector('.footer'), 
            isInViewport: false, 
            fn: function() {
                document.querySelector('.footer').classList.add("is-animate-text")
            },
        }
    ];
    const observerChangeStateBlock = () => {
        targetBlocks.forEach(block => {
            const callback = (entries) => {
                entries.forEach(entry => {
                    const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
                    
                    if (isVisible !== block.isInViewport) {
                        block.isInViewport = isVisible;
                        block.fn();
                    }
                });
            };

            const observer = new IntersectionObserver(callback, { threshold: 0.5 });
            if (block.node) {
                observer.observe(block.node);
            }
        });
    };
    observerChangeStateBlock();
    
    mainNode.style.setProperty("--hei", `${header.clientHeight}px`);
    window.addEventListener("resize", ()=>{
        mainNode.style.setProperty("--hei", `${header.clientHeight}px`);
    })

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
}
