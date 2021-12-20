export {TwoStateSwitchLabelProjector}


const TwoStateSwitchLabelProjector = (switchModel, obs) => {


    const TwoStateSwitchLabelElement = document.createElement('label');
    TwoStateSwitchLabelElement.classList.add('switch');
    TwoStateSwitchLabelElement.onclick = e => {
        e.preventDefault();
        TwoStateSwitchLabelElement.focus();
    }

    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.setAttribute('data-type', 'switch');

    const thumbElement = document.createElement('span');
    thumbElement.classList.add('thumb');

    const arrowLeftElement = document.createElement('span');
    arrowLeftElement.classList.add('arrow', 'arrow-left');

    const arrowRightElement = document.createElement('span');
    arrowRightElement.classList.add('arrow', 'arrow-right');

    thumbElement.appendChild(arrowLeftElement);
    thumbElement.appendChild(arrowRightElement);

    const crossImgElement = document.createElement('img');
    crossImgElement.alt = 'off';
    crossImgElement.classList.add('switch-icon', 'off');
    crossImgElement.src = '../styles/kolibri/icons/cross.svg';
    crossImgElement.draggable = false;

    const checkmarkImgElement = document.createElement('img');
    checkmarkImgElement.alt = 'on';
    checkmarkImgElement.classList.add('switch-icon', 'on');
    checkmarkImgElement.src = '../styles/kolibri/icons/checkmark.svg';
    checkmarkImgElement.draggable = false;

    TwoStateSwitchLabelElement.appendChild(checkBoxElement);
    TwoStateSwitchLabelElement.appendChild(thumbElement);
    TwoStateSwitchLabelElement.appendChild(crossImgElement);
    TwoStateSwitchLabelElement.appendChild(checkmarkImgElement);


    checkmarkImgElement.onclick = _ => {
        checkBoxElement.checked = true;
        checkBoxElement.setAttribute("checked", "true");
        obs.setValue(true);
    }


    crossImgElement.onclick = _ => {
        checkBoxElement.checked = false;
        checkBoxElement.setAttribute("checked", "false");
        obs.setValue(false);
    }

    function hideArrows(){
        arrowLeftElement.style.display = 'none';
        arrowRightElement.style.display = 'none';

    }


    /* On Focus */
    checkBoxElement.onfocus = _ => {
        TwoStateSwitchLabelElement.classList.add("focus");
        TwoStateSwitchLabelElement.focus();
    }

    /* On Blur */
    checkBoxElement.onblur = _ => {
        TwoStateSwitchLabelElement.classList.remove("focus");
        TwoStateSwitchLabelElement.blur();
    }


    TwoStateSwitchLabelElement.onmouseout = () => {
        hideArrows();
    }

    TwoStateSwitchLabelElement.onmouseover = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            if (checkBoxElement.checked) {
                arrowLeftElement.style.display = 'block';
                arrowRightElement.style.display = 'none';
            } else {
                arrowRightElement.style.display = 'block';
                arrowLeftElement.style.display = 'none';
            }
        }
    }

    let mousePos = 0;
    let mouseOffset = 20;


    TwoStateSwitchLabelElement.onmousedown = e => mousePos = e.x;

    const calcMovement = (ex) => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }

    TwoStateSwitchLabelElement.onmouseup = e => {
        let calc_movement = calcMovement(e.x);
        checkBoxElement.setAttribute('checked', `${calc_movement}`);
        checkBoxElement.checked = calc_movement;
        obs.setValue(calc_movement);
    };

    //Keyboard Control
    document.onkeydown = (e) => {

        if (document.activeElement.dataset.type === "switch") {

            if (e.key === "ArrowRight") {
                document.activeElement.checked = true;
            } else if (e.key === "ArrowLeft") {
                document.activeElement.checked = false;
            }
            
            obs.setValue(document.activeElement.checked);
        }
    };


    return TwoStateSwitchLabelElement;
}