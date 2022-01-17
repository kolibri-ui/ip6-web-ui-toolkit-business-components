export {PolymorphProjector}


const PolymorphProjector = (model, obs, indeterminate = null, classList = []) => {

    const PolymorphSwitchLabelElement = document.createElement('label');
    PolymorphSwitchLabelElement.classList.add('switch', 'three-state');
    classList.forEach(c => PolymorphSwitchLabelElement.classList.add(c));
    PolymorphSwitchLabelElement.onclick = e => {
        e.preventDefault();
        PolymorphSwitchLabelElement.focus();
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


    PolymorphSwitchLabelElement.appendChild(checkBoxElement);
    PolymorphSwitchLabelElement.appendChild(thumbElement);



    if (indeterminate !== null) {
        checkBoxElement.indeterminate = indeterminate;
    }



    function hideArrows(){
        arrowLeftElement.style.display = 'none';
        arrowRightElement.style.display = 'none';
        arrowIndeterminateLeftElement.style.display = 'none';
        arrowIndeterminateRightElement.style.display = 'none';
    }


    /* On Focus */
    checkBoxElement.onfocus = _ => {
        PolymorphSwitchLabelElement.classList.add("focus");
        PolymorphSwitchLabelElement.focus();
    }


    /* On Blur */
    checkBoxElement.onblur = _ => {
        PolymorphSwitchLabelElement.classList.remove("focus");
        PolymorphSwitchLabelElement.blur();
    }


    PolymorphSwitchLabelElement.onmouseout = () => {
        hideArrows();
    }

    PolymorphSwitchLabelElement.onmouseover = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
                PolymorphSwitchLabelElement.classList.add("hover");

            if (checkBoxElement.indeterminate) {
                arrowLeftElement.style.display = 'none';
                arrowRightElement.style.display = 'none';
                arrowIndeterminateLeftElement.style.display = 'block';
                arrowIndeterminateRightElement.style.display = 'block';

            }
        }
    }

    PolymorphSwitchLabelElement.onmouseout = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            PolymorphSwitchLabelElement.classList.remove("hover");

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


    PolymorphSwitchLabelElement.onmousedown = e => mousePos = e.x;

    const calcMovement = (ex) => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }
    PolymorphSwitchLabelElement.onmouseup = (e) => {
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


    return PolymorphSwitchLabelElement;
}