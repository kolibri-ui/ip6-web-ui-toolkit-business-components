import {cardProjector} from "./global-projectors/cardProjector.js";
import {TwoStateSwitchLabelProjector} from "./switch/subProjectors/TwoStateSwitchLabelProjector.js";
import {ThreeStateSwitchLabelProjector} from "./switch/subProjectors/ThreeStateSwitchLabelProjector.js";
import {switchProjector} from "./switch/mainProjector/switchProjector.js";
import {hProjector} from "./global-projectors/hProjector.js";


export {mainProjector}

const mainProjector = (controller, rootElement, model) => {

    const switchTheme = state => {
        const themeName = state ? 'dark' : 'light';
        if (model.isDark.getValue()) {
            document.documentElement.setAttribute('data-theme', themeName);
            localStorage.setItem('theme', themeName);
        }
    }

    const title = hProjector(1, "Midterm Demo Application")

    // Two State
    const twoStateSwitch = TwoStateSwitchLabelProjector(model);

    twoStateSwitch.checkbox.onchange = e => alert(e.toString());

    const twoStateCardBody = [];
    twoStateCardBody.push(twoStateSwitch.label);
    const twoStateCard = cardProjector("Settings", twoStateCardBody);

    // Meeting Form
    const threeStateSwitch = ThreeStateSwitchLabelProjector(model);

    const meetingFormBody = [];
    meetingFormBody.push(threeStateSwitch);

    const meetingForm = cardProjector("Mid Term Demo Meeting", meetingFormBody);

    rootElement.appendChild(title);
    rootElement.appendChild(twoStateCard);
    rootElement.appendChild(meetingForm);


}


