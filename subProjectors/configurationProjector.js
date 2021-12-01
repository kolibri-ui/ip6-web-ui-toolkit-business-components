import {switchLabelProjector} from "./switchLabelProjector.js";

export {configurationProjector}

const configurationProjector = (switchLabel) => {

    const statesDivElement = document.createElement('div');

    const h4Element = document.createElement('h4');
    h4Element.textContent = 'States';


    const labelForDisableElement = document.createElement('label');
    labelForDisableElement.id = 'disable-two-state';

    const inputDisableElement = document.createElement('input');
    inputDisableElement.id = 'disable-two-state';
    inputDisableElement.type = 'checkbox';
    inputDisableElement.textContent = 'Disabled';


    const labelForReadonlyElement = document.createElement('label');
    labelForReadonlyElement.id = 'readonly-two-state';

    const inputReadonlyElement = document.createElement('input');
    inputReadonlyElement.id = 'readonly-two-state';
    inputReadonlyElement.type = 'checkbox';
    inputReadonlyElement.textContent = 'Read-Only';

    statesDivElement.appendChild(h4Element);
    statesDivElement.appendChild(labelForDisableElement);
    labelForDisableElement.appendChild(inputDisableElement);
    statesDivElement.appendChild(labelForReadonlyElement);
    statesDivElement.appendChild(inputReadonlyElement);


    /* Disabled State */
    inputDisableElement.onchange = e => {
        //console.log(switchLabel);
        switchLabel.querySelector('input').disabled = e.target.checked;
        if (e.target.checked) {
            switchLabel.classList.add("disabled");

            inputReadonlyElement.checked = false;
            switchLabel.classList.remove("read-only");
        } else {
            switchLabel.classList.remove("disabled");
        }

    }

    /* Read Only State */
    inputReadonlyElement.onchange = e => {
        switchLabel.querySelector('input').readOnly = e.target.checked;
        if (e.target.checked) {
            switchLabel.classList.add("read-only");
            inputDisableElement.checked = false;
            switchLabel.classList.remove("disabled");
        } else {
            switchLabel.classList.remove("read-only");
        }
    }

    return statesDivElement;
}