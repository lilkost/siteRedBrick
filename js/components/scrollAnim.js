export const scrollAnim = () =>{
    if(!document.querySelector(".scroll-parent") || !document.querySelector(".scroll-wrapper")) return;
    
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    if (ScrollTrigger.isTouch !== 1) {

        ScrollSmoother.create({
            wrapper: '.scroll-parent',
            content: '.scroll-wrapper',
            smooth: 1.7,
            effects: true
        })
    }
    
    new WOW().init();
}