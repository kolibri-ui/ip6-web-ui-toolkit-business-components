export {SwitchConfigurationProjector}

const SwitchConfigurationProjector = switchElement => {

    const statesDivElement = document.createElement('div');

    const h4Element = document.createElement('h4');
    h4Element.textContent = 'States';
    h4Element.classList.add('states-header');

    /* <br> Element */
    const brElement = document.createElement('br');
    const brElement2 = document.createElement('br');


    /* Label Disable */
    const labelForDisableElement = document.createElement('label');
    labelForDisableElement.htmlFor = 'disable-three-state';


    /* Input Disable */
    const inputDisableElement = document.createElement('input');
    inputDisableElement.id = 'disable-three-state';
    inputDisableElement.type = 'checkbox';


    /* Text for Disable Element */
    const spanDisableElement = document.createElement('span');
    spanDisableElement.classList.add('states-label-text')
    spanDisableElement.textContent = 'Disabled';


    /* Label Read-Only */
    const labelForReadonlyElement = document.createElement('label');
    labelForReadonlyElement.htmlFor = 'readonly-three-state';


    /* Input Read-Only */
    const inputReadonlyElement = document.createElement('input');
    inputReadonlyElement.id = 'readonly-three-state';
    inputReadonlyElement.type = 'checkbox';


    /* Text for Read-Only Element*/
    const spanReadonlyElement = document.createElement('span');
    spanReadonlyElement.classList.add('states-label-text')
    spanReadonlyElement.textContent = 'Read-Only';

    /* Label Required */
    const labelForRequiredElement = document.createElement('label');
    labelForRequiredElement.htmlFor = 'required-three-state';

    /* Input Required */
    const inputRequiredElement = document.createElement('input');
    inputRequiredElement.id = 'required-three-state';
    inputRequiredElement.type = 'checkbox';

    /* Text for Required Element */
    const spanRequiredElement = document.createElement('span');
    spanRequiredElement.classList.add('states-label-text')
    spanRequiredElement.textContent = 'Required';


    statesDivElement.appendChild(h4Element);

    statesDivElement.appendChild(labelForDisableElement);
    labelForDisableElement.appendChild(inputDisableElement);
    labelForDisableElement.appendChild(spanDisableElement);

    statesDivElement.appendChild(brElement);

    statesDivElement.appendChild(labelForReadonlyElement);
    labelForReadonlyElement.appendChild(inputReadonlyElement);
    labelForReadonlyElement.appendChild(spanReadonlyElement);


    statesDivElement.appendChild(brElement2);

    labelForRequiredElement.appendChild(inputRequiredElement);
    statesDivElement.appendChild(labelForRequiredElement);
    labelForRequiredElement.appendChild(spanRequiredElement);

    /* Disabled State */
    inputDisableElement.onchange = e => {
        switchElement.querySelector('input').disabled = e.target.checked;

        if (e.target.checked) {
            switchElement.classList.add("disabled");

            inputReadonlyElement.checked = false;
            switchElement.classList.remove("read-only");
        } else {
            switchElement.classList.remove("disabled");
        }
    }

    /* Read Only State */
    inputReadonlyElement.onchange = e => {
        switchElement.querySelector('input').readOnly = e.target.checked;
        if (e.target.checked) {
            switchElement.classList.add("read-only");
            inputDisableElement.checked = false;
            switchElement.classList.remove("disabled");
        } else {
            switchElement.classList.remove("read-only");
        }
    }

    /* Required State */
    inputRequiredElement.onchange = e => {
        switchElement.querySelector('input').required = e.target.checked;
        switchElement.querySelector('input').indeterminate = true;

        if (e.target.checked) {
            switchElement.classList.add("required");
            inputReadonlyElement.checked = false;
            switchElement.classList.remove("read-only");
            inputDisableElement.checked = false;
            switchElement.classList.remove("disabled");
        } else {
            switchElement.classList.remove("required");
        }
    }

    return statesDivElement;
}