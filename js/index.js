import { headerFixed } from "./components/headerFn.js";
import { scrollAnim } from "./components/scrollAnim.js";
import { useDynamicAdapt } from './dynamicAdapt.js'

import { sliderCreate } from "./components/slider.js";
import { fillterBtn } from "./components/filter-btn.js";
import { formtInput } from "./components/input-form.js";
import { steps } from "./components/step.js";
import { headerMenu } from "./components/headerMenu.js";
import { hoveringBlock } from "./components/hoverBlock.js";
import { observerFn } from "./components/observerHTML.js";
import { advantagesEl } from "./components/advantagesEl.js";
import { reviewsOpen } from "./components/reviewOpen.js";
import { createModal } from "./components/createModal.js";

useDynamicAdapt()
headerFixed();
scrollAnim();
advantagesEl();
sliderCreate();

fillterBtn();
formtInput();
steps();
headerMenu();
hoveringBlock();
observerFn();
reviewsOpen();
createModal();