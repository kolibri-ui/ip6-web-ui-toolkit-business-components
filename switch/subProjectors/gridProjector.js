import {gridOverlayProjector} from "./gridOverlayProjector.js";
import {ThreeStateSwitchLabelProjector} from "./ThreeStateSwitchLabelProjector.js";

export {gridProjector}

const gridProjector = (switchModel, switchLabel, state, switchTitle, stateName) => {

    const gridOverlayDivElement = document.createElement('div');
    gridOverlayDivElement.classList.add('grid-div-overlay');
    gridOverlayDivElement.style.pointerEvents = 'none';

/*    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Switch Component';*/

/*    const title2StateElement = document.createElement('h3');
    title2StateElement.textContent = '2 State';*/

    const title3StateElement = document.createElement('h3');
    title3StateElement.textContent = 'All Switch States';

 //   gridOverlayDivElement.appendChild(h1Element);
//    gridOverlayDivElement.appendChild(title2StateElement);
    gridOverlayDivElement.appendChild(title3StateElement);


    const showGridButton = document.createElement('button');
    showGridButton.type = 'button';
    showGridButton.setAttribute('class', 'showGrid');
    showGridButton.textContent = "Show possible states";
    showGridButton.style.margin = '3rem';

    const closeOverlayElement = document.createElement('img');
    closeOverlayElement.classList.add('closeOverlay-icon');
    closeOverlayElement.src = '../styles/kolibri/icons/cross.svg';
    closeOverlayElement.style.pointerEvents = 'auto';

    switch (state) {
        case 'activeOff':
            switchLabel.querySelector('input').checked = false;
            break;
        case 'activeIndet':
            switchLabel.querySelector('input').indeterminate = true;
            break;

        case 'activeOn':
            switchLabel.querySelector('input').checked = true;
            break;
        case 'focusedOff':
           switchLabel.classList.add("focus");
            break;
        case 'focusIndet':
            switchLabel.classList.add("focus");
            switchLabel.querySelector('input').indeterminate = true;
            break;

        case 'focusOn':
            switchLabel.classList.add("focus");
            switchLabel.querySelector('input').checked = true;
            break;

        case 'disabledOff':
            switchLabel.classList.add("disabled");
            break;

        case 'disabledIndet':
            switchLabel.classList.add("disabled");
            switchLabel.querySelector('input').indeterminate = true;
            break;
        case 'disabledOn':
            switchLabel.classList.add("disabled");
            switchLabel.querySelector('input').checked = true;
            break;

        case 'readonlyOff':
            switchLabel.classList.add("read-only");
            break;
        case 'readonlyIndet':
            switchLabel.classList.add("read-only");
            switchLabel.querySelector('input').indeterminate = true;
            break;
        case 'readonlyOn':
            switchLabel.classList.add("read-only");
            switchLabel.querySelector('input').checked = true;
            break;
        case 'requiredInvalid':
            switchLabel.classList.add("required");
            switchLabel.querySelector('input').indeterminate = true;
            break;
        case 'requiredFocused':
            switchLabel.classList.add("required");
            switchLabel.classList.add("focus");
            switchLabel.querySelector('input').indeterminate = true;
            break;
    }

    return [showGridButton, gridOverlayDivElement, switchLabel, closeOverlayElement];

}