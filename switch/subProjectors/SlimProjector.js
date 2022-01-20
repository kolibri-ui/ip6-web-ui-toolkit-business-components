export {SlimProjector}


const SlimProjector = (model, obs, indeterminate = null, classList = []) => {

    const SlimSwitchLabelElement = document.createElement('label');
    SlimSwitchLabelElement.classList.add('switch', 'three-state');
    classList.forEach(c => SlimSwitchLabelElement.classList.add(c));

    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.setAttribute('data-type', 'switch');
    checkBoxElement.setAttribute('data-threestate', 'true');

    const thumbElement = document.createElement('span');
    thumbElement.classList.add('thumb');


    /*    const arrowLeftElement = document.createElement('span');
        arrowLeftElement.classList.add('arrow', 'arrow-left');

        const arrowRightElement = document.createElement('span');
        arrowRightElement.classList.add('arrow', 'arrow-right');*/

    const arrowLeftElement = document.createElement('span');
    arrowLeftElement.classList.add('arrow', 'arrow-left');

    const arrowRightElement = document.createElement('span');
    arrowRightElement.classList.add('arrow', 'arrow-right');

    /* thumbElement.appendChild(arrowLeftElement);
     thumbElement.appendChild(arrowRightElement);*/
    thumbElement.appendChild(arrowLeftElement);
    thumbElement.appendChild(arrowRightElement);


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

    SlimSwitchLabelElement.appendChild(checkBoxElement);
    SlimSwitchLabelElement.appendChild(thumbElement);
    SlimSwitchLabelElement.appendChild(crossImgElement);
    SlimSwitchLabelElement.appendChild(checkmarkImgElement);



    if (indeterminate !== null) {
        checkBoxElement.indeterminate = indeterminate;
    }

    /* Click interaction on switch */
    SlimSwitchLabelElement.onclick = e => {
        e.preventDefault();
        SlimSwitchLabelElement.focus();

        let center = SlimSwitchLabelElement.offsetWidth / 2;
        if (e.offsetX >= center) {
            console.log('clicked right');
            setSwitchOn();

        } else if (e.offsetX < center) {
            console.log('clicked left');
            setSwitchOff();
        }
    }

    function setSwitchOn() {
        SlimSwitchLabelElement.classList.remove("required");
        checkBoxElement.checked = true;
        checkBoxElement.setAttribute("checked", "true");
        checkBoxElement.indeterminate = false;
        obs.setValue(true);

        crossImgElement.src = '../styles/kolibri/icons/cross-light-black.svg';
        checkmarkImgElement.src = '../styles/kolibri/icons/checkmark-light-blue.svg';

        hideArrows();
        thumbElement.classList.remove("indeterminate", "off");
        thumbElement.classList.add("on");
    }

    function setSwitchOff() {
        SlimSwitchLabelElement.classList.remove("required");
        checkBoxElement.checked = false;
        checkBoxElement.setAttribute("checked", "false");
        checkBoxElement.indeterminate = false;
        obs.setValue(false);

        crossImgElement.src = '../styles/kolibri/icons/cross-light-blue.svg';
        checkmarkImgElement.src = '../styles/kolibri/icons/checkmark-light-black.svg';

        hideArrows();
        thumbElement.classList.remove("indeterminate", "on");
        thumbElement.classList.add("off");
    }


    function hideArrows() {
        arrowLeftElement.style.display = 'none';
        arrowRightElement.style.display = 'none';
    }

    /*    thumbElement.onclick = _ => {
           console.log( checkBoxElement.checked );
        }*/

    if (checkBoxElement.indeterminate === true) {
        obs.setValue(null);
        thumbElement.classList.add("indeterminate");
    }


    /* On Focus */
    checkBoxElement.onfocus = _ => {
        SlimSwitchLabelElement.classList.add("focus");
        SlimSwitchLabelElement.focus();
    }


    /* On Blur */
    checkBoxElement.onblur = _ => {
        SlimSwitchLabelElement.classList.remove("focus");
        SlimSwitchLabelElement.blur();
    }


    SlimSwitchLabelElement.onmouseout = () => {
        hideArrows();
    }

    SlimSwitchLabelElement.onmouseover = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            SlimSwitchLabelElement.classList.add("hover");

            if (checkBoxElement.indeterminate) {
                /*  arrowLeftElement.style.display = 'none';
                  arrowRightElement.style.display = 'none';*/
                arrowLeftElement.style.display = 'block';
                arrowRightElement.style.display = 'block';

            }
        }
    }

    SlimSwitchLabelElement.onmouseout = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            SlimSwitchLabelElement.classList.remove("hover");

            if (checkBoxElement.indeterminate) {
                arrowLeftElement.style.display = 'none';
                arrowRightElement.style.display = 'none';
                /*  arrowLeftElement.style.display = 'block';
                  arrowRightElement.style.display = 'block';*/

            }
        }
    }


    let mousePos = 0;
    let mouseOffset = 20;

    SlimSwitchLabelElement.onmousedown = e => mousePos = e.x;

    const calcMovement = (ex) => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }
    SlimSwitchLabelElement.onmouseup = (e) => {
        let calc_movement = calcMovement(e.x);
        checkBoxElement.setAttribute('checked', `${calc_movement}`);
        checkBoxElement.checked = calc_movement;
    };


    //Keyboard Control
    document.onkeydown = (e) => {

        if (document.activeElement.dataset.type === "switch") {

            if (e.key === "ArrowRight") {
                setSwitchOn();
                /*thumbElement.classList.add("on");
                document.activeElement.indeterminate = false;
                document.activeElement.checked = true;*/
            } else if (e.key === "ArrowLeft") {
                setSwitchOff();
                /*thumbElement.classList.add("off");
                document.activeElement.indeterminate = false;
                document.activeElement.checked = false;*/
            }
            if (e.key === "Delete") {
                //if (document.activeElement.dataset.threestate === "true") {
                obs.setValue(null);
                thumbElement.classList.add("indeterminate");
                document.activeElement.indeterminate = true;
                crossImgElement.src = '../styles/kolibri/icons/cross-light-black.svg';
                checkmarkImgElement.src = '../styles/kolibri/icons/checkmark-light-black.svg';
                //}
            }
        }
    };


    return SlimSwitchLabelElement;
}