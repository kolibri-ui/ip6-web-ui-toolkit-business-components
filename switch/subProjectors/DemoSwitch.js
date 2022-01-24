import {Switch} from "./Switch.js";

export {DemoSwitch}


const DemoSwitch = (observable,
                    slim = false,
                    defaultState = null,
                    isThreeState = false,
                    required = false,
                    hover = false,
                    readOnly = false,
                    disabled = false) => {

    let demoSwitch = Switch(observable, defaultState, isThreeState);


    const showArrows = _ => {
        const arrDemoSwitch = demoSwitch.querySelectorAll('span.arrow');
        arrDemoSwitch.forEach(a => {
            a.style.display = 'block';
        });
    }

    if (slim) {
        demoSwitch = Switch(observable, defaultState, isThreeState, null, ['switch-slim'], true);
    }

    const checkboxElement = demoSwitch.querySelector('input');

    if (required) {
        checkboxElement.required = true;
        demoSwitch.classList.add('required');
        showArrows();
    }

    if (hover) {
        demoSwitch.classList.add('hover');
        if (isThreeState && defaultState === null) {
            showArrows()
        }
    }

    if(readOnly) {
        demoSwitch.classList.add('read-only');
        checkboxElement.readOnly = true;

    }

    if(disabled){
        checkboxElement.disabled = true;
        demoSwitch.classList.add('disabled');
    }


    return demoSwitch;


}