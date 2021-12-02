export {ThreeStateConfigurationProjector}

const ThreeStateConfigurationProjector = (switchLabel) => {

    const statesDivElement = document.createElement('div');

    const h4Element = document.createElement('h4');
    h4Element.textContent = 'States';

    /* <br> Element */
    const brElement = document.createElement('br');

    /* Label Disable */
    const labelForDisableElement = document.createElement('label');
    labelForDisableElement.htmlFor = 'disable-three-state';
    labelForDisableElement.textContent = 'Disabled ';

    /* Input Disable */
    const inputDisableElement = document.createElement('input');
    inputDisableElement.id = 'disable-three-state';
    inputDisableElement.type = 'checkbox';

    /* Label Read-Only */
    const labelForReadonlyElement = document.createElement('label');
    labelForReadonlyElement.htmlFor = 'readonly-three-state';
    labelForReadonlyElement.textContent = 'Read-Only ';

    /* Input Read-Only */
    const inputReadonlyElement = document.createElement('input');
    inputReadonlyElement.id = 'readonly-three-state';
    inputReadonlyElement.type = 'checkbox';

    /* Label Required */
    const labelForRequiredElement = document.createElement('label');
    labelForRequiredElement.htmlFor = 'required-three-state';
    labelForRequiredElement.textContent = 'Required ';

    /* Input Required */
    const inputRequiredElement = document.createElement('input');
    inputRequiredElement.id = 'required-three-state';
    inputRequiredElement.type = 'checkbox';


    statesDivElement.appendChild(h4Element);

    statesDivElement.appendChild(labelForDisableElement);
    labelForDisableElement.appendChild(inputDisableElement);

    statesDivElement.appendChild(brElement);

    statesDivElement.appendChild(labelForReadonlyElement);
    labelForReadonlyElement.appendChild(inputReadonlyElement);


    labelForRequiredElement.appendChild(inputRequiredElement);
    statesDivElement.appendChild(labelForRequiredElement);



    /* Disabled State */
    inputDisableElement.onchange = e => {
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

    /* Required State */
    inputRequiredElement.onchange = e => {
        switchLabel.querySelector('input').required = e.target.checked;
        switchLabel.querySelector('input').indeterminate = true;
        if (e.target.checked) {
            switchLabel.classList.add("required");
            inputReadonlyElement.checked = false;
            switchLabel.classList.remove("read-only");
            inputDisableElement.checked = false;
            switchLabel.classList.remove("disabled");
        } else {
            switchLabel.classList.remove("required");
        }
    }

    return statesDivElement;
}