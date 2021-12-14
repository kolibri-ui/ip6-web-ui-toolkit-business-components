import {cardProjector} from "./global-projectors/cardProjector.js";
import {TwoStateSwitchLabelProjector} from "./switch/subProjectors/TwoStateSwitchLabelProjector.js";
import {ThreeStateSwitchLabelProjector} from "./switch/subProjectors/ThreeStateSwitchLabelProjector.js";
import {switchProjector} from "./switch/mainProjector/switchProjector.js";
import {hProjector} from "./global-projectors/hProjector.js";
import {spanProjector} from "./global-projectors/spanProjector.js";
import {divProjector} from "./global-projectors/divProjector.js";


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
    const twoStateSwitch = TwoStateSwitchLabelProjector(model, () => alert("hello"));


    const twoStateCardBody = [];
    twoStateCardBody.push(twoStateSwitch);
    const twoStateCard = cardProjector("Settings", twoStateCardBody);

    // Meeting Form
    const threeStateSwitch = ThreeStateSwitchLabelProjector(model, true, ["demo-three-state"]);
    const attendanceLabelSpan = spanProjector("Attendance", ["form-label", "switch-label"]);
    const attendanceValueSpan = spanProjector("",["form-value"]);
    attendanceValueSpan.appendChild(threeStateSwitch);

    const attendanceLine = divProjector(["form-inline"]);
    attendanceLine.appendChild(attendanceLabelSpan);
    attendanceLine.appendChild(attendanceValueSpan);


    const organizerLabelSpan = spanProjector("Organizer", ["form-label"]);
    const organizerValueSpan = spanProjector("Jane Doe", ["form-value"]);
    const organizerLine = divProjector(["form-inline"]);

    organizerLine.appendChild(organizerLabelSpan);
    organizerLine.appendChild(organizerValueSpan);


    const timeLabelSpan = spanProjector("Time", ["form-label"]);
    const timeValueSpan = spanProjector("16 December, 2021 09:00 AM-12:00 PM", ["form-value"])
    const timeLine = divProjector(["form-inline"]);
    timeLine.appendChild(timeLabelSpan);
    timeLine.appendChild(timeValueSpan);

    const locationLabelSpan = spanProjector("Location", ["form-label"]);
    const locationValueSpan = spanProjector("online", ["form-value"])
    const locationLine = divProjector(["form-inline"]);
    locationLine.appendChild(locationLabelSpan);
    locationLine.appendChild(locationValueSpan);


    const meetingFormBody = [];

    meetingFormBody.push(attendanceLine);
    meetingFormBody.push(organizerLine);
    meetingFormBody.push(timeLine);
    meetingFormBody.push(locationLine);


    const meetingForm = cardProjector("Mid Term Demo Meeting", meetingFormBody);


    rootElement.appendChild(title);
    rootElement.appendChild(twoStateCard);
    rootElement.appendChild(meetingForm);


}


