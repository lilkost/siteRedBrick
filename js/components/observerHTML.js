export const observerFn = () => {
    const targetBlocks = [
        { 
            node: document.querySelector('.footer'), 
            isInViewport: false, 
            fn: function() {
                const header = document.querySelector(".header");
                if (header) {
                    if (this.isInViewport) {
                        header.classList.add("is-hidden");
                    } else {
                        header.classList.remove("is-hidden");
                    }
                }
            }
        },
        { 
            node: document.querySelector('.footer'), 
            isInViewport: false, 
            fn: function() {
                const footer = document.querySelector('.footer');
                if (footer && this.isInViewport) {
                    footer.classList.add("is-animate-text");
                }
            }
        },

    ];

    const observerChangeStateBlock = () => {
        targetBlocks.forEach(block => {
            if (!block.node || (block.node instanceof NodeList && block.node.length === 0)) {
                console.warn('Element not found for block:', block);
                return;
            }

            const callback = (entries) => {
                entries.forEach(entry => {
                    const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.1;

                    if (isVisible !== block.isInViewport) {
                        block.isInViewport = isVisible;
                        
                        if (block.node instanceof NodeList) {
                            block.fn(entries);
                        } else {
                            block.fn();
                        }
                    }
                });
            };

            const observer = new IntersectionObserver(callback, { threshold: 0.8 });
            
            if (block.node instanceof NodeList) {
                block.node.forEach(node => {
                    observer.observe(node);
                });
            } else {
                observer.observe(block.node);
            }
        });
    };

    observerChangeStateBlock();
};