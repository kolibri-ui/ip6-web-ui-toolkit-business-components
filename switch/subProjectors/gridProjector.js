export { gridProjector }

const gridProjector = (switchModel, switchLabel, state) => {

    const showGridButton = document.createElement('button');
    showGridButton.type = 'button';
    showGridButton.setAttribute('class', 'showGrid');
    showGridButton.textContent = "Show possible states";
    showGridButton.style.margin = '3rem';

    showGridButton.onclick = function() {
        switchModel.isGridActive.setValue(true);
    };

    switch(state) {
     case 'activeOff':
        switchLabel.querySelector('input').checked = false;
         break;
     case 'activeIndet':

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

 return [showGridButton, switchLabel];

}