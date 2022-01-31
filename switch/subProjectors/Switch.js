export {Switch}


const Switch = (observable, options) => {

    const slimClassName = 'switch-slim';

    /**
     * Create ID and Name if they are not set by developer on init
     */
    const randomId = () => Math.random().toString(36).substring(2) || "0";
    const idName = 'switch-' + randomId().padEnd(12, 'a').slice(0, 19);

    (options.id === undefined) ? options.id = idName : "";
    (options.name === undefined) ? options.name = idName : "";

    /**
     * Create all Elements needed for a Switch
     */
    const labelElement = document.createElement('label');
    labelElement.classList.add('switch');
    labelElement.htmlFor = options.id;

    const checkBoxElement = document.createElement('input');
    checkBoxElement.setAttribute('data-type', 'switch');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.id = options.id;
    checkBoxElement.name = options.name;

    const thumbElement = document.createElement('span');
    thumbElement.classList.add('thumb');

    const arrowLeftElement = document.createElement('span');
    arrowLeftElement.classList.add('arrow', 'arrow-left');

    const arrowRightElement = document.createElement('span');
    arrowRightElement.classList.add('arrow', 'arrow-right');

    /**
     * Append Elements to each other
     */
    thumbElement.appendChild(arrowLeftElement);
    thumbElement.appendChild(arrowRightElement);

    labelElement.appendChild(checkBoxElement);
    labelElement.appendChild(thumbElement);


    /**
     * Check if it is a Slim Switch, if so, add the corresponding class and elements
     */

    if (options.slim) {
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

        checkmarkImgElement.classList.add(slimClassName);
        crossImgElement.classList.add(slimClassName);

        labelElement.appendChild(crossImgElement);
        labelElement.appendChild(checkmarkImgElement);

        labelElement.classList.add(slimClassName);
        checkBoxElement.classList.add(slimClassName);
        thumbElement.classList.add(slimClassName);
        arrowLeftElement.classList.add(slimClassName);
        arrowRightElement.classList.add(slimClassName);
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

        checkBoxElement.removeAttribute("checked");

        checkBoxElement.indeterminate = false;
        checkBoxElement.checked = false;
        observable.setValue(false);
        hideArrows();
    }

    const setSwitchIndeterminate = _ => {
        thumbElement.classList.remove("off", "on");
        thumbElement.classList.add("indeterminate");
        checkBoxElement.removeAttribute("checked");
        checkBoxElement.indeterminate = true;
        checkBoxElement.checked = undefined;
        observable.setValue(undefined);
    }

    const hideArrows = _ => {
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
    checkBoxElement.value = options.state;
    observable.setValue(options.state);

    /**
     * Set visual State based on initialisation
     */
    if (options.threeState) {
        switch (options.state) {
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
        switch (options.state) {
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
        if (!checkBoxElement.readOnly) {
            if (e.key === "ArrowRight") {
                setSwitchOn();
            } else if (e.key === "ArrowLeft") {
                setSwitchOff();
            }

            if (options.threeState) {
                if (e.key === "Delete") {
                    setSwitchIndeterminate();
                }
            }
        }
    };

    return labelElement;
}