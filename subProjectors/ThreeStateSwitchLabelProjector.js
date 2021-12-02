export { ThreeStateSwitchLabelProjector }


const ThreeStateSwitchLabelProjector = switchModel => {

    const ThreeStateSwitchLabelElement = document.createElement('label');
    ThreeStateSwitchLabelElement.classList.add('switch', 'three-state');
    ThreeStateSwitchLabelElement.onclick= e => {
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
    arrowRightElement.classList.add('arrow', 'arrow-indeterminate-left');

    const arrowIndeterminateRightElement = document.createElement('span');
    arrowRightElement.classList.add('arrow', 'arrow-indeterminate-right');

    thumbElement.appendChild(arrowLeftElement);
    thumbElement.appendChild(arrowRightElement);
    thumbElement.appendChild(arrowIndeterminateLeftElement);
    thumbElement.appendChild(arrowIndeterminateRightElement);


    const crossImgElement = document.createElement('img');
    crossImgElement.alt = 'off';
    crossImgElement.classList.add('switch-icon', 'off');
    crossImgElement.src = 'assets/kolibri/icons/cross.svg';
    crossImgElement.draggable = false;

    const dotImgElement = document.createElement('img');
    dotImgElement.alt = 'indeterminate';
    dotImgElement.classList.add('switch-icon', 'indeterminate');
    dotImgElement.src = 'assets/kolibri/icons/dot.svg';
    dotImgElement.draggable = false;

    const checkmarkImgElement = document.createElement('img');
    checkmarkImgElement.alt = 'on';
    checkmarkImgElement.classList.add('switch-icon', 'on');
    checkmarkImgElement.src = 'assets/kolibri/icons/checkmark.svg';
    checkmarkImgElement.draggable = false;

    ThreeStateSwitchLabelElement.appendChild(checkBoxElement);
    ThreeStateSwitchLabelElement.appendChild(thumbElement);
    ThreeStateSwitchLabelElement.appendChild(crossImgElement);
    ThreeStateSwitchLabelElement.appendChild(dotImgElement);
    ThreeStateSwitchLabelElement.appendChild(checkmarkImgElement);


    checkmarkImgElement.onclick = _ => {
        ThreeStateSwitchLabelElement.classList.remove("required");
        checkBoxElement.checked  = true;
        checkBoxElement.setAttribute("checked", "true");
        checkBoxElement.indeterminate = false;
    }

    dotImgElement.onclick = _ => {
        checkBoxElement.indeterminate = true;
    }


    crossImgElement.onclick = _ => {
        ThreeStateSwitchLabelElement.classList.remove("required");
        checkBoxElement.checked = false;
        checkBoxElement.setAttribute("checked", "false");
        checkBoxElement.indeterminate = false;
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
        }
    }

    let mousePos = 0;
    let mouseOffset = 20;


    ThreeStateSwitchLabelElement.onmousedown = e => mousePos = e.x;
    ThreeStateSwitchLabelElement.onmouseup = (e) => {
        let cmove = calcMovement(e.x);
        checkBoxElement.setAttribute('checked', `${cmove}`);
        checkBoxElement.checked = cmove;
    };

    const calcMovement = (ex) => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }


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