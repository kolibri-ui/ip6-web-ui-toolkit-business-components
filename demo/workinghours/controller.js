import { Observable } from "../../src/Kolibri/docs/src/kolibri/observable.js";
import { Attribute, VALUE } from "../../src/Kolibri/docs/src/kolibri/presentationModel.js";

export { WorkingHoursController }

const WorkingHoursController = (dayController, monolog, workingHoursInput) => {


    const {amStartCtrl, amEndCtrl, pmStartCtrl, pmEndCtrl, onTotalChanged, getTotal} = dayController;
    const hourCtrls                                                                  = [amStartCtrl, amEndCtrl, pmStartCtrl, pmEndCtrl];
    const inputs                                                                     = () => workingHoursInput.querySelectorAll("input");

    const formValid = Observable(false);
    const darkTheme = Observable(false);
    const required  = Observable(false);
    const readOnly  = Observable(false);
    const disabled  = Observable(false);


    // Check for not earlier than 04:00 Start Rule
    amStartCtrl.onValueChanged(amStart => {
        if (amStart < 4 * 60) {

            formValid.setValue(false);

            monolog.error({
                title  : "Business Rule violated",
                message: "Start can not be earlier than 04:00",
                sticky : true
            });
        } else {
            formValid.setValue(true);
        }

    });

    // Check for no later than 22:00 Rule
    pmEndCtrl.onValueChanged(pmEnd => {
        (pmEnd > 22 * 60)
            ? monolog.error({
                title  : "Business Rule violated",
                message: "End can not be later than 22:00",
                sticky : true
            })
            : "";
    });


    // Check for max of 12 hours Rule
    onTotalChanged(() => {
        if (getTotal() > 12 * 60) {
            monolog.error({
                title  : "Business Rule violated",
                message: "Total time must not exceed 12 hours.",
                sticky : true
            });
        }
    });


    // Switch to light or to darkMode
    darkTheme.onChange(() => {
        if (darkTheme.getValue()) {
            document.querySelector("html").classList.add("darkTheme");
        } else {
            document.querySelector("html").classList.remove("darkTheme");
        }
    });


    // Disable all Elements
    disabled.onChange(() => {
        if (disabled.getValue()) {
            workingHoursInput.setAttribute("disabled", "on");
            monolog.warning({title: "Form is now disabled"});
        } else {
            workingHoursInput.removeAttribute("disabled");
            monolog.info({title: "Form is now enabled"});
        }
    });

    // Change readOnly State
    readOnly.onChange(() => {
        if (readOnly.getValue()) {
            inputs().forEach(input => input.setAttribute("readonly", true));
            monolog.warning({title: "Form is now read only"});
        } else {
            inputs().forEach(input => input.removeAttribute("readonly"));
            monolog.info({title: "Form is now editable"});
        }
    });

    // Change Required State
    required.onChange(() => {
        if (required.getValue()) {
            inputs().forEach(input => input.setAttribute("required", true));
            monolog.warning({title: "Inputs are now required for submitting"});
        } else {
            inputs().forEach(input => input.removeAttribute("required"));
            monolog.info({title: "Inputs are now not required for submitting"});
        }
    });


    return {
        disabled,
        readOnly,
        required,
        darkTheme
    }
}
