import {Switch} from "./Switch.js";

export {DemoSwitch}


const DemoSwitch = (observable,
                    isSlim = false,
                    defaultState = null,
                    isThreeState = false,
                    required = false,
                    hover = false,
                    readOnly = false,
                    disabled = false) => {


    const options = {
        state: defaultState,
        threeState: isThreeState,
        slim: isSlim,
        classlist: []
    }

    let demoSwitch = Switch(observable, options);


    const showArrows = _ => {
        const arrDemoSwitch = demoSwitch.querySelectorAll('span.arrow');
        arrDemoSwitch.forEach(a => {
            a.style.display = 'block';
        });
    }


    const checkboxElement = demoSwitch.querySelector('input');

    if (required) {
        checkboxElement.required = true;
        demoSwitch.classList.add('required');
        demoSwitch.onmouseout = e => e.preventDefault();
        showArrows();
    }

    if (hover) {
        demoSwitch.classList.add('hover');
        demoSwitch.onmouseout = e => e.preventDefault();
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