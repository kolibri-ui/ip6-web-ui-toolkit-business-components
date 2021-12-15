import {cardProjector} from "./global-projectors/cardProjector.js";
import {TwoStateSwitchLabelProjector} from "./switch/subProjectors/TwoStateSwitchLabelProjector.js";
import {ThreeStateSwitchLabelProjector} from "./switch/subProjectors/ThreeStateSwitchLabelProjector.js";
import {hProjector} from "./global-projectors/hProjector.js";
import {spanProjector} from "./global-projectors/spanProjector.js";
import {divProjector} from "./global-projectors/divProjector.js";
import {buttonProjector} from "./global-projectors/buttonProjector.js";
import {monologListProjector} from "./monolog/subProjectors/monologListProjector.js";


export {mainProjector}

const mainProjector = (controller, rootElement, model) => {

    const monologList = monologListProjector();

    const switchTheme = _ => {
        if (model.isDark.getValue()) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    const title = hProjector(1, "Midterm Demo Application")

    // Two State
    const twoStateSwitch = TwoStateSwitchLabelProjector(model, model.isDark);

    model.isDark.onChange(_ => {
        switchTheme();
    });


    const twoStateCardBody = [];
    twoStateCardBody.push(twoStateSwitch);
    const twoStateCard = cardProjector("Settings - Dark Mode", twoStateCardBody);

    // Meeting Form
    const threeStateSwitch = ThreeStateSwitchLabelProjector(model, model.attendance, true, ["demo-three-state"]);
    const attendanceLabelSpan = spanProjector("Attendance", ["form-label", "switch-label"]);
    const attendanceValueSpan = spanProjector("", ["form-value"]);
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


    const submitButton = buttonProjector("save", ["button-info"], [], () => {
        const attendance = model.attendance.getValue();

        if (attendance === null) {
            controller.notification(monologList,
                "Error",
                false,
                false,
                true,
                false,
                "Oh snap",
                "You need to set your attendance", 1000
            );

        } else {
            controller.notification(monologList,
                "Success",
                false,
                false,
                true,
                false,
                "Saved",
                "", 1000
            );
        }

    });
    const submitLine = divProjector(["form-inline", "right"]);
    submitLine.appendChild(submitButton);


    const meetingFormBody = [];

    meetingFormBody.push(attendanceLine);
    meetingFormBody.push(organizerLine);
    meetingFormBody.push(timeLine);
    meetingFormBody.push(locationLine);
    meetingFormBody.push(submitLine);


    const meetingForm = cardProjector("Mid Term Demo Meeting", meetingFormBody);


    rootElement.appendChild(title);
    rootElement.appendChild(twoStateCard);
    rootElement.appendChild(meetingForm);
    rootElement.appendChild(monologList);


}


