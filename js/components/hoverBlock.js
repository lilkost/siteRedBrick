export const hoveringBlock = () =>{
const element = document.querySelector('.footer__project-link');
    
if(!element) return;

// Инициализация стилей
element.style.transition = 'transform 0.3s ease-out';
element.style.willChange = 'transform';

let isHovering = false;
let animationFrameId = null;

element.addEventListener('mouseenter', () => {
    isHovering = true;
});

element.addEventListener('mouseleave', () => {
    isHovering = false;
    
    // Плавное возвращение с красивым easing
    element.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    element.style.transform = 'translate(0, 0) scale(1)';
    
    // Отмена анимации если она была запланирована
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
});

element.addEventListener('mousemove', (e) => {
    if (!isHovering) return;
    
    // Используем requestAnimationFrame для плавности
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    
    animationFrameId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        
        // Быстрая реакция на движение мыши
        element.style.transition = 'transform 0.15s ease-out';
        element.style.transform = `translate(${-deltaX}px, ${-deltaY}px) scale(1.1)`;
    });
});
}