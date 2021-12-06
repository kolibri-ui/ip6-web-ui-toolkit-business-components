import {gridOverlayProjector} from "./gridOverlayProjector.js";
import {ThreeStateSwitchLabelProjector} from "./ThreeStateSwitchLabelProjector.js";

export { gridProjector }

const gridProjector = (switchModel, switchLabel, state) => {

    const gridOverlayDivElement = document.createElement('div');
    gridOverlayDivElement.classList.add('grid-div-overlay');

    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Switch Component';

    const title2StateElement = document.createElement('h3');
    title2StateElement.textContent = '2 State';

    const title3StateElement = document.createElement('h3');
    title3StateElement.textContent = '3 State';

    gridOverlayDivElement.appendChild(h1Element);
    gridOverlayDivElement.appendChild(title2StateElement);
    gridOverlayDivElement.appendChild(title3StateElement);

    //return gridOverlayDivElement;



    const showGridButton = document.createElement('button');
    showGridButton.type = 'button';
    showGridButton.setAttribute('class', 'showGrid');
    showGridButton.textContent = "Show possible states";
    showGridButton.style.margin = '3rem';


    switch(state) {
     case 'activeOff':
         switchLabel.querySelector('input').checked = false;
         break;
     case 'activeIndet':
         switchLabel.querySelector('input').indeterminate = true;
         break;

     case 'activeOn':
         switchLabel.querySelector('input').checked = true;
         break;
     case 'disabledOff':

         break;

     case 'disabledIndet':

         break;
     case 'disabledOn':

         break;

     case 'focusedOff':

         break;
     case 'focusIndet':

         break;

     case 'focusOn':

         break;
     case 'readonlyOff':

         break;
     case 'readonlyIndet':

         break;
     case 'readonlyOn':

         break;
     case 'requiredInvalid':

         break;
     case 'requiredFocused':

         break;
 }

 return [showGridButton, gridOverlayDivElement, switchLabel];

}