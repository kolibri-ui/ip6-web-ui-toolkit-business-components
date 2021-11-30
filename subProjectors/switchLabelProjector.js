export {switchLabelProjector}


const switchLabelProjector = (switchObject, label) => {

    /*
        <label class="switch">
            <input type="checkbox" id="two-state" data-type="switch">
            <span class="thumb">
            <span class="arrow arrow-left" id="arrow-right-two-state"></span>
            <span class="arrow arrow-right" id="arrow-left-two-state"></span>
        </span>
            <img alt="off" class="switch-icon off" id="two-state-off" src="assets/kolibri/icons/cross.svg"
                 draggable="false">
            <img alt="on" class="switch-icon on" id="two-state-on" src="assets/kolibri/icons/checkmark.svg"
                 draggable="false">
        </label>

     */

    const labelElement = document.createElement('label');
    labelElement.classList.add('switch');

    const checkBoxElement = document.createElement('input');
    //checkBoxElement.id = 'two-state';
    checkBoxElement.type = 'checkbox';
    checkBoxElement.setAttribute('data-type', 'switch');

    const thumbElement = document.createElement('span');
    thumbElement.classList.add('thumb');

    const arrowLeftElement = document.createElement('span');
    //arrowLeftElement.id = 'arrow-left-two-state';
    arrowLeftElement.classList.add('arrow', 'arrow-left');

    const arrowRightElement = document.createElement('span');
    //arrowRightElement.id = 'arrow-right-two-state';
    arrowRightElement.classList.add('arrow', 'arrow-right');

    thumbElement.appendChild(arrowLeftElement);
    thumbElement.appendChild(arrowRightElement);

    const crossImgElement = document.createElement('img');
    //crossImgElement.id = 'two-state-off';
    crossImgElement.alt = 'off';
    crossImgElement.classList.add('switch-icon', 'off');
    crossImgElement.src = 'assets/kolibri/icons/cross.svg';
    crossImgElement.draggable = false;

    const checkmarkImgElement = document.createElement('img');
    //crossImgElement.id = 'two-state-on';
    checkmarkImgElement.alt = 'on';
    checkmarkImgElement.classList.add('switch-icon', 'on');
    checkmarkImgElement.src = 'assets/kolibri/icons/checkmark.svg';
    checkmarkImgElement.draggable = false;

    labelElement.appendChild(checkBoxElement);
    labelElement.appendChild(thumbElement);
    labelElement.appendChild(crossImgElement);
    labelElement.appendChild(checkmarkImgElement);

/*    const inputElement = document.createElement('input')
    inputElement.type = 'email'
    inputElement.id = label.toLowerCase()
    inputElement.placeholder = 'example@mail.com'


    inputElement.onchange = () => switchObject.setEmail(inputElement.value)

    inputElement.addEventListener('change', () => {

        if (switchObject.getEmailValidity()) {
            inputElement.classList.add('valid')
            inputElement.classList.remove('invalid')
        } else {
            inputElement.classList.remove('valid')
            inputElement.classList.add('invalid')
        }

        // Reset classes when input field is empty
        if (!switchObject.getEmail()) {
            inputElement.classList.remove('valid')
            inputElement.classList.remove('invalid')
        }
    })

    switchObject.onEmailChanged(() => inputElement.value = switchObject.getEmail())*/

    return labelElement
}