export const steps = () =>{
    const steps = document.querySelectorAll(".configurator__step"),
        btnSteps = document.querySelectorAll(".configurator-btn-step");

    if(!steps && btnSteps) return;

    btnSteps.forEach(btn => {
        btn.addEventListener("click", ()=>{
            let currentStep;

            steps.forEach(step=>{
                if(step.classList.contains("is-active")) currentStep = step;
            });

            if(currentStep){
                let currentCount = currentStep.getAttribute("data-step").trim();
                const nextStep = document.querySelector(`.configurator__step[data-step="${++currentCount}"`);
                
                if(nextStep){
                    currentStep.classList.remove("is-active");
                    nextStep.classList.add("is-active");
                }
            }
        });
    });
}