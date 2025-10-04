import { headerFixed } from "./components/headerFixed.js";
import { scrollAnim } from "./components/scrollAnim.js";

import { sliderCreate } from "./components/slider.js";
import { createStars } from "./components/stars.js";
import { fillterBtn } from "./components/filter-btn.js";
import { formtInput } from "./components/input-form.js";
import { steps } from "./components/step.js";
import { headerMenu } from "./components/headerMenu.js";

import { useDynamicAdapt } from './dynamicAdapt.js'

useDynamicAdapt()
headerFixed();
scrollAnim();

sliderCreate();
createStars();
fillterBtn();
formtInput();
steps();
headerMenu();