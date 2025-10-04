export const createStars = () => {
    document.addEventListener("DOMContentLoaded", () => {
        // функция для закрашивания
        const setRating = (value, item) => {
            const fullStars = Math.floor(value);
            const remainder = value - fullStars;
            const stars = item.querySelectorAll(".stars-item__rating svg");

            stars.forEach((star, i) => {
                const rect = star.querySelector("clipPath rect");
                if (i < fullStars) {
                    rect.setAttribute("width", "100%");
                } else if (i === fullStars) {
                    rect.setAttribute("width", `${remainder * 100}%`);
                } else {
                    rect.setAttribute("width", "0%");
                }
            });
        }
        // проход по всем элементам (на всякий случай сделал через forEach вдруг из больше будет на транице)
        const items = document.querySelectorAll(".stars-item__rating");

        if (items) {
            items.forEach(item => {
                const count = Number(item.getAttribute("data-count").trim().replaceAll(" ", ""));
                setRating(count, item);
            });
        }
    });
}