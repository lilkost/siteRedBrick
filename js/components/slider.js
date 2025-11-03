export const sliderCreate = () => {
    // массив всех слайдеров
    // для создания простых слайдеров без сложной логики
    const sliders = [
        // marque-slider
        [
            document.querySelector(".marque-slider"),
            {
                slidesPerView: "auto",
                spaceBetween: 0,
                speed: 5000,
                loop: true,
                touchRatio: false,
                allowTouchMove: false,
                touchMove: false,
                //allowTouchMove: false, // можно ещё отключить свайп
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
                }
            }
        ],
        [
            document.querySelector(".advanteges__slider"),
            {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 3,
                spaceBetween: 18,
                scrollbar: {
                    el: ".advanteges-scrollbar",
                    hide: false,
                    draggable: true,
                },
                breakpoints: {
                    993:{
                        slidesPerView: 3,
                        spaceBetween: 18,
                    },
                    481:{
                        slidesPerView: 2,
                        spaceBetween: 18,
                    },
                    280:{
                        slidesPerView: 1.08,
                        spaceBetween: 12,
                    }
                },
                navigation: {
                    nextEl: '.advanteges__btn-next',
                    prevEl: '.advanteges__btn-prev',
                },
            }
        ],
        [
            document.querySelector(".nadzor__slider"),
            {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 1,
                spaceBetween: 18,
                pagination: {
                    el: '.nadzor__slider-pagination',
                    // type: 'bullets',
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
            }
        ],
                [
            document.querySelector(".comand__slider"),
            {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 4,
                spaceBetween: 20,
                scrollbar: {
                    el: ".comand-scrollbar",
                    hide: false,
                },
                breakpoints: {
                    993:{
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    481:{
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    280:{
                        slidesPerView: 1,
                        spaceBetween: 12,
                    }
                },
                navigation: {
                    nextEl: '.advanteges__btn-next',
                    prevEl: '.advanteges__btn-prev',
                },
            }
        ],
    ]
    // функция конструктор для создания сладеров
    const createSlider = (node, options) => {
        if (node && options) {
            const swiper = new Swiper(node, options);
        }
        else {
            // console.error("Ошибка генерации слайдера");
        }
    }
    // вызов конструктора для слайдеров
    if (sliders && sliders.length) {
        sliders.forEach(slider => {
            const sliderNode = slider[0];
            const sliderOptions = slider[1];

            if (sliderNode && sliderOptions) {
                createSlider(sliderNode, sliderOptions);
            }
            else { // опционально лучще выключить при окончании разработки чтобы в консоли не было лишних сообщений
                // console.error(`Ошибка генерации, нету одной из двух частей слайдера: slider - ${sliderNode}, список опций - ${sliderOptions}`)
            }
        });
    }
}