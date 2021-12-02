export {TwoStateConfigurationProjector}

const TwoStateConfigurationProjector = (switchLabel) => {

    const statesDivElement = document.createElement('div');

    const h4Element = document.createElement('h4');
    h4Element.textContent = 'States';


    const labelForDisableElement = document.createElement('label');
    labelForDisableElement.htmlFor = 'disable-two-state';
    labelForDisableElement.textContent = 'Disabled ';

    const inputDisableElement = document.createElement('input');
    inputDisableElement.id = 'disable-two-state';
    inputDisableElement.type = 'checkbox';

    const brElement = document.createElement('br');

    const labelForReadonlyElement = document.createElement('label');
    labelForReadonlyElement.htmlFor = 'readonly-two-state';
    labelForReadonlyElement.textContent = 'Read-Only ';

    const inputReadonlyElement = document.createElement('input');
    inputReadonlyElement.id = 'readonly-two-state';
    inputReadonlyElement.type = 'checkbox';


    statesDivElement.appendChild(h4Element);
    statesDivElement.appendChild(labelForDisableElement);
    labelForDisableElement.appendChild(inputDisableElement);
    labelForDisableElement.appendChild(brElement);
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