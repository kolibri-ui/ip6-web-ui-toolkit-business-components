import {Observable} from "../../src/Kolibri/docs/src/kolibri/observable.js";

export {WorkingHoursController}

const WorkingHoursController = (dayController, monolog) => {


    const {amStartCtrl, amEndCtrl, pmStartCtrl, pmEndCtrl} = dayController;
    const hourCtrls = [amStartCtrl, amEndCtrl, pmStartCtrl, pmEndCtrl];

    const formValid = Observable(false);
    const dark = Observable(false);

    window.onload = () => {

        formValid.onChange(c => {
            if (c === true) {
                monolog.success({title: "Success", message: "Working Hours saved."});
            }
        })


        hourCtrls.forEach(ctrl => {
            ctrl.onValidChanged(c => {
                if (c === false) {
                    monolog.error({title: "Error", message: "Business Rules violated", sticky: true});
                }
                formValid.setValue(c);
            });
        });

        dark.onChange(c => {
            if (c === true) {
                document.querySelector("html").classList.add("darkTheme");
                monolog.info({title: "Now Dark"});
            } else {
                document.querySelector("html").classList.remove("darkTheme");
                monolog.info({title: "Now Light"});
            }
        });
    }
    return dark;
}