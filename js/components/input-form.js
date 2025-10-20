export const formtInput = () => {
    const inputs = document.querySelectorAll(".focus-input"),
        phoneInputs = document.querySelectorAll(".phone-mask")

    if(inputs){
        inputs.forEach(input=>{
            const label = input.parentElement;

            input.onblur = function(e) {
                // console.log("потеря фокуса")
                if(e.target.value.length <= 0) {
                    label.classList.remove("is-focus")
                    label.classList.add("is-error")
                }else {
                    label.classList.add("is-focus")
                    label.classList.remove("is-error")
                }

                if(input.classList.contains("phone-mask")) {
                    if(e.target.value.length < 16) {
                        label.classList.add("is-focus")
                        label.classList.add("is-error")
                    }else {
                        label.classList.add("is-focus")
                        label.classList.remove("is-error")
                    }
                    if(e.target.value.length ===0) {
                        label.classList.remove("is-focus")
                    }
                }
            };

            input.onfocus = function() {
                // console.log("фокус");
                label?.classList?.add("is-focus")
            };
        });
    }

    if(phoneInputs){
        const createMask = (el) => {
            const element = el;
            const maskOptions = {
                mask: '+{7}(000)000-00-00'
            };
            const mask = IMask(element, maskOptions);
        }

        phoneInputs.forEach(node=> createMask(node));
    }
    

}