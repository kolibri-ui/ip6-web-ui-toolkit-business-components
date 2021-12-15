export {ThreeStateSwitchLabelProjector}


const ThreeStateSwitchLabelProjector = (model, obs, indeterminate = null, classList = []) => {

    const ThreeStateSwitchLabelElement = document.createElement('label');
    ThreeStateSwitchLabelElement.classList.add('switch', 'three-state');
    classList.forEach(c => ThreeStateSwitchLabelElement.classList.add(c));
    ThreeStateSwitchLabelElement.onclick = e => {
        e.preventDefault();
        ThreeStateSwitchLabelElement.focus();
    }


    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.setAttribute('data-type', 'switch');
    checkBoxElement.setAttribute('data-threestate', 'true');

    const thumbElement = document.createElement('span');
    thumbElement.classList.add('thumb');

    const arrowLeftElement = document.createElement('span');
    arrowLeftElement.classList.add('arrow', 'arrow-left');

    const arrowRightElement = document.createElement('span');
    arrowRightElement.classList.add('arrow', 'arrow-right');

    const arrowIndeterminateLeftElement = document.createElement('span');
    arrowIndeterminateLeftElement.classList.add('arrow', 'arrow-indeterminate-left');

    const arrowIndeterminateRightElement = document.createElement('span');
    arrowIndeterminateRightElement.classList.add('arrow', 'arrow-indeterminate-right');

    thumbElement.appendChild(arrowLeftElement);
    thumbElement.appendChild(arrowRightElement);
    thumbElement.appendChild(arrowIndeterminateLeftElement);
    thumbElement.appendChild(arrowIndeterminateRightElement);


    const crossImgElement = document.createElement('img');
    crossImgElement.alt = 'off';
    crossImgElement.classList.add('switch-icon', 'off');
    crossImgElement.src = '../styles/kolibri/icons/cross.svg';
    crossImgElement.draggable = false;

    const dotImgElement = document.createElement('img');
    dotImgElement.alt = 'indeterminate';
    dotImgElement.classList.add('switch-icon', 'indeterminate');
    dotImgElement.src = '../styles/kolibri/icons/dot.svg';
    dotImgElement.draggable = false;

    const checkmarkImgElement = document.createElement('img');
    checkmarkImgElement.alt = 'on';
    checkmarkImgElement.classList.add('switch-icon', 'on');
    checkmarkImgElement.src = '../styles/kolibri/icons/checkmark.svg';
    checkmarkImgElement.draggable = false;

    ThreeStateSwitchLabelElement.appendChild(checkBoxElement);
    ThreeStateSwitchLabelElement.appendChild(thumbElement);
    ThreeStateSwitchLabelElement.appendChild(crossImgElement);
    ThreeStateSwitchLabelElement.appendChild(dotImgElement);
    ThreeStateSwitchLabelElement.appendChild(checkmarkImgElement);


    if (indeterminate !== null) {
        checkBoxElement.indeterminate = indeterminate;
    }


    checkmarkImgElement.onclick = _ => {
        ThreeStateSwitchLabelElement.classList.remove("required");
        checkBoxElement.checked = true;
        checkBoxElement.setAttribute("checked", "true");
        checkBoxElement.indeterminate = false;
        obs.setValue(true);
    }

    dotImgElement.onclick = _ => {
        checkBoxElement.indeterminate = true;
        obs.setValue(null);
    }


    crossImgElement.onclick = _ => {
        ThreeStateSwitchLabelElement.classList.remove("required");
        checkBoxElement.checked = false;
        checkBoxElement.setAttribute("checked", "false");
        checkBoxElement.indeterminate = false;
        obs.setValue(false);
    }


    /* On Focus */
    checkBoxElement.onfocus = _ => {
        ThreeStateSwitchLabelElement.classList.add("focus");
        ThreeStateSwitchLabelElement.focus();
    }

    /* On Blur */
    checkBoxElement.onblur = _ => {
        ThreeStateSwitchLabelElement.classList.remove("focus");
        ThreeStateSwitchLabelElement.blur();
    }


    ThreeStateSwitchLabelElement.onmouseout = () => {
        arrowLeftElement.style.display = 'none';
        arrowRightElement.style.display = 'none';
        arrowIndeterminateLeftElement.style.display = 'none';
        arrowIndeterminateRightElement.style.display = 'none';
    }

    ThreeStateSwitchLabelElement.onmouseover = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            if (checkBoxElement.checked) {
                arrowLeftElement.style.display = 'block';
                arrowRightElement.style.display = 'none';
            } else {
                arrowRightElement.style.display = 'block';
                arrowLeftElement.style.display = 'none';
            }

            if (checkBoxElement.indeterminate) {
                arrowLeftElement.style.display = 'none';
                arrowRightElement.style.display = 'none';
                arrowIndeterminateLeftElement.style.display = 'block';
                arrowIndeterminateRightElement.style.display = 'block';

            }
        }
    }

    let mousePos = 0;
    let mouseOffset = 20;


    ThreeStateSwitchLabelElement.onmousedown = e => mousePos = e.x;

    const calcMovement = (ex) => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }
    ThreeStateSwitchLabelElement.onmouseup = (e) => {
        let calc_movement = calcMovement(e.x);
        checkBoxElement.setAttribute('checked', `${calc_movement}`);
        checkBoxElement.checked = calc_movement;
    };


    //Keyboard Control
    document.onkeydown = (e) => {



        if (document.activeElement.dataset.type === "switch") {

            if (e.key === "ArrowRight") {
                document.activeElement.indeterminate = false;
                document.activeElement.checked = true;
            } else if (e.key === "ArrowLeft") {
                document.activeElement.indeterminate = false;
                document.activeElement.checked = false;
            }
            if (e.key === "Delete") {
                if (document.activeElement.dataset.threestate === "true") {
                    document.activeElement.indeterminate = true;
                }
            }
        }
    };


    return ThreeStateSwitchLabelElement;
}