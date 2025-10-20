export const advantagesEl = () => {
    const elements = document.querySelectorAll(".advanteges__slide");

    if (!elements) return;

    elements.forEach(el => {
        const textNodes = el.querySelectorAll(".advanteges__slide-text");
        if (textNodes.length > 1) {
            const setHei = () => {
                setTimeout(() => {
                    let hei = 0;

                    textNodes.forEach((t, key) => {
                        if (key > 0) {
                            const element = t;
                            const rect = window.getComputedStyle(element);
                            const height = Number(rect.height.replaceAll("px", ""));
                            const margin = Number(rect.marginBottom.replaceAll("px", ""));
                            hei += height + margin;
                        }

                    });

                    el.style.cssText += `--hei: ${hei}px`;
                }, 200);
            }

            setHei();
            
            window.addEventListener("resize",()=>{
                setHei();
            })
        }
    })
}