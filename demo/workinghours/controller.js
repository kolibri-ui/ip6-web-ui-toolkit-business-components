import { Observable } from "../../src/Kolibri/docs/src/kolibri/observable.js";

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


    const maxHoursRule = total => {
        if (total > 12 * 60) {
            monolog.error({
                title  : "Business Rule violated",
                message: "Total time must not exceed 12 hours.",
                sticky : true
            });
        }
    };

    formValid.onChange(form => {
        if (form === true) {
            monolog.success({title: "Form valid", message: "All business rules are valid."});
        }
    })

    amStartCtrl.onValueChanged(amStart => {
        if (amStart < 4 * 60) {

            formValid.setValue(false);

            monolog.error({
                title  : "Business Rule violated",
                message: "Start can not be earlier than 04:00",
                sticky: true
            });
        } else {
            formValid.setValue(true);
        }

    });

    pmEndCtrl.onValueChanged(pmEnd => {
        (pmEnd > 22 * 60)
            ? monolog.error({
                title  : "Business Rule violated",
                message: "End can not be later than 22:00",
                sticky : true
            })
            : "";
    });


    hourCtrls.forEach(ctrl => {
        ctrl.onValueChanged(() => maxHoursRule(getTotal()));
    });

    darkTheme.onChange(c => {
        if (c === true) {
            document.querySelector("html").classList.add("darkTheme");
            monolog.info({title: "Changed to Dark Mode"});
        } else {
            document.querySelector("html").classList.remove("darkTheme");
            monolog.info({title: "Changed to Light Mode"});
        }
    });

    disabled.onChange(() => {
        disabled.getValue()
            ? workingHoursInput.setAttribute("disabled", "on")                  // one can disable a fieldset
            : workingHoursInput.removeAttribute("disabled");
    });

    readOnly.onChange(() => {
        readOnly.getValue()
            ? inputs().forEach(input => input.setAttribute("readonly", true))     // only inputs can be set to readonly
            : inputs().forEach(input => input.removeAttribute("readonly"));
    });

    required.onChange(() => {

        required.getValue()
            ? monolog.warning({title: "Toggled required", message: "All Inputs are now required for submiting"})
            : ""

        required.getValue()
            ? inputs().forEach(input => input.setAttribute("required", true))
            : inputs().forEach(input => input.removeAttribute("required"));
    });

    return {
        disabled, readOnly, required, darkTheme
    }
}
