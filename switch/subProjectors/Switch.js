export {Switch}


const Switch = (observable, defaultState = null, isThreeState = false, id = null, classlist = [], showIcons = false) => {

    /**
     * Create ID if not set by developer on init
     */
    (id === null) ? id = 'switch-' + Math.random().toString(36).substring(2) || "0" : "";

    /**
     * Create all ELements needed for a Switch
     */
    const labelElement = document.createElement('label');
    labelElement.classList.add('switch');
    labelElement.htmlFor = id;

    const checkBoxElement = document.createElement('input');
    checkBoxElement.setAttribute('data-type', 'switch');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.id = id;


    const thumbElement = document.createElement('span');
    thumbElement.classList.add('thumb');

    const arrowLeftElement = document.createElement('span');
    arrowLeftElement.classList.add('arrow', 'arrow-left');

    const arrowRightElement = document.createElement('span');
    arrowRightElement.classList.add('arrow', 'arrow-right');

    /**
     * Add Custom Classes to Elements
     */
    classlist.forEach(c => {
        labelElement.classList.add(c);
        checkBoxElement.classList.add(c);
        thumbElement.classList.add(c);
        arrowLeftElement.classList.add(c);
        arrowRightElement.classList.add(c);
    });

    /**
     * Append Elements to each other
     */
    thumbElement.appendChild(arrowLeftElement);
    thumbElement.appendChild(arrowRightElement);

    labelElement.appendChild(checkBoxElement);
    labelElement.appendChild(thumbElement);


    /**
     * Show Icons if set to True
     */

    if (showIcons) {
        const crossImgElement = document.createElement('img');
        crossImgElement.alt = 'off';
        crossImgElement.classList.add('switch-icon', 'off');
        crossImgElement.src = '../styles/kolibri/icons/cross-light-black.svg';
        crossImgElement.draggable = false;

        const checkmarkImgElement = document.createElement('img');
        checkmarkImgElement.alt = 'on';
        checkmarkImgElement.classList.add('switch-icon', 'on');
        checkmarkImgElement.src = '../styles/kolibri/icons/checkmark-light-black.svg';
        checkmarkImgElement.draggable = false;

        classlist.forEach(c => {
            checkmarkImgElement.classList.add(c);
            crossImgElement.classList.add(c);
        });

        labelElement.appendChild(crossImgElement);
        labelElement.appendChild(checkmarkImgElement);
    }


    /**
     * Define Functions
     */
    const setSwitchOn = _ => {
        labelElement.classList.remove("required");
        thumbElement.classList.remove("indeterminate", "off");
        thumbElement.classList.add("on");
        checkBoxElement.setAttribute("checked", "true");
        checkBoxElement.indeterminate = false;
        checkBoxElement.checked = true;
        observable.setValue(true);
        hideArrows();
    }

    const setSwitchOff = _ => {
        labelElement.classList.remove("required");
        thumbElement.classList.remove("indeterminate", "on");
        thumbElement.classList.add("off");
        checkBoxElement.setAttribute("checked", "false");
        checkBoxElement.indeterminate = false;
        checkBoxElement.checked = false;
        observable.setValue(false);
        hideArrows();
    }

    const setSwitchIndeterminate = _ => {
        thumbElement.classList.remove("off", "on");
        thumbElement.classList.add("indeterminate");
        checkBoxElement.setAttribute("checked", "undefined");
        checkBoxElement.indeterminate = true;
        checkBoxElement.checked = undefined;
        observable.setValue(undefined);
    }

    const hideArrows = _ => {
        arrowLeftElement.style.display = 'none';
        arrowRightElement.style.display = 'none';
    }

    const calcMovement = ex => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }

    /**
     * Set values based on initialisation
     */
    checkBoxElement.value = defaultState;
    observable.setValue(defaultState);

    /**
     * Set visual State based on initialisation
     */
    if (isThreeState) {
        switch (defaultState) {
            case true:
                setSwitchOn();
                checkBoxElement.indeterminate = false;
                break;
            case false:
                checkBoxElement.indeterminate = false;
                setSwitchOff();
                break;
            default:
                checkBoxElement.indeterminate = true;
                thumbElement.classList.add("indeterminate");
        }
    } else {
        switch (defaultState) {
            case true:
                setSwitchOn();
                break;
            default:
                setSwitchOff();
        }
    }


    /**
     * Event Listener
     */

    /**
     * Click Listener on Element
     * @param e
     */
    labelElement.onclick = e => {
        e.preventDefault();
        labelElement.focus();
        let center = labelElement.offsetWidth / 2;
        if (e.offsetX >= center) {
            setSwitchOn();
        } else if (e.offsetX < center) {
            setSwitchOff();
        }
    }

    /**
     * Focus Listener
     * @param _
     */
    checkBoxElement.onfocus = _ => {
        labelElement.classList.add("focus");
        labelElement.focus();
    }


    /**
     * Blur Listener
     * @param _
     */
    checkBoxElement.onblur = _ => {
        labelElement.classList.remove("focus");
        labelElement.blur();
    }

    /**
     * MouseOver Listener
     */
    labelElement.onmouseover = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            labelElement.classList.add("hover");

            if (checkBoxElement.indeterminate) {
                arrowLeftElement.style.display = 'block';
                arrowRightElement.style.display = 'block';
            }
        }
    }

    /**
     * MouseOut Listener
     */
    labelElement.onmouseout = () => {
        hideArrows();

        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            labelElement.classList.remove("hover");

            if (checkBoxElement.indeterminate) {
                arrowLeftElement.style.display = 'none';
                arrowRightElement.style.display = 'none';
            }
        }
    }

    /**
     * Calculate & Execute Drag Interaction
     * @type {number}
     */
    let mousePos = 0;
    let mouseOffset = 20;

    labelElement.onmousedown = e => mousePos = e.x;
    labelElement.onmouseup = (e) => {
        let calc_movement = calcMovement(e.x);
        checkBoxElement.setAttribute('checked', `${calc_movement}`);
        checkBoxElement.checked = calc_movement;
    };


    /**
     * KeyBoard Control
     * @param e
     */
    labelElement.onkeyup = e => {

        if (e.key === "ArrowRight") {
            setSwitchOn();
        } else if (e.key === "ArrowLeft") {
            setSwitchOff();
        }

        if (isThreeState) {
            if (e.key === "Delete") {
                setSwitchIndeterminate();
            }
        }
    };

    return labelElement;
}