export { featureToggleProjector }

const featureToggleProjector = (switchLabel) => {
    console.log(switchLabel);


    const twoStateOn = switchLabel.querySelector(".on");
    const twoStateOff = switchLabel.querySelector(".off");

    const toggleLabelElement = document.createElement('label');
    toggleLabelElement.htmlFor = 'featureToggle';
    toggleLabelElement.classList.add('featureToggle');
    toggleLabelElement.textContent = 'Dark Mode Toggle';

    const toggleInputElement = document.createElement('input');
    toggleInputElement.id = 'featureToggle';
    toggleInputElement.type = 'checkbox';


    toggleInputElement.onchange = (e) => {
        if (e.target.checked) {
            twoStateOn.src = 'assets/kolibri/icons/moon.svg';
            twoStateOff.src = 'assets/kolibri/icons/sun.svg';
        } else {
            twoStateOn.src = 'assets/kolibri/icons/checkmark.svg';
            twoStateOff.src = 'assets/kolibri/icons/cross.svg';
        }
    }

/*    const switchTheme = state => {

        if (toggleInputElement.checked) {
            if (state) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark'); //add this
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light'); //add this
            }
        }
    }*/

    toggleLabelElement.appendChild(toggleInputElement);

    // console.log(switchTheme);
    return toggleLabelElement;

}