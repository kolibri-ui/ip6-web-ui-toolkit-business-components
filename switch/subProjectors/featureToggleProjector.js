export { featureToggleProjector }

const featureToggleProjector = (switchLabel, switchModel) => {

    const twoStateOn = switchLabel.querySelector(".on");
    const twoStateOff = switchLabel.querySelector(".off");

    const toggleLabelElement = document.createElement('label');
    toggleLabelElement.htmlFor = 'featureToggle';
    toggleLabelElement.classList.add('featureToggle');
    toggleLabelElement.textContent = 'Dark Mode Toggle';

    const toggleInputElement = document.createElement('input');
    toggleInputElement.id = 'featureToggle';
    toggleInputElement.type = 'checkbox';
    toggleInputElement.setAttribute('checked', 'false');
    toggleInputElement.checked = false;

    toggleInputElement.onchange = (e) => {
     //   switchModel.isDark.setValue(e.target.checked);
        if (e.target.checked) {
            twoStateOn.src = '../styles/kolibri/icons/moon.svg';
            twoStateOff.src = '../styles/kolibri/icons/sun.svg';
            toggleInputElement.setAttribute('checked', 'true');
        } else {
            twoStateOn.src = '../styles/kolibri/icons/checkmark.svg';
            twoStateOff.src = '../styles/kolibri/icons/cross.svg';
            toggleInputElement.setAttribute('checked', 'false');
        }
    }


    toggleLabelElement.appendChild(toggleInputElement);

    return toggleLabelElement;

}