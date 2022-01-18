export {PolymorphProjector}


const PolymorphProjector = (model, obs, indeterminate = null, classList = []) => {

    const PolymorphSwitchLabelElement = document.createElement('label');
    PolymorphSwitchLabelElement.classList.add('switch', 'three-state');
    classList.forEach(c => PolymorphSwitchLabelElement.classList.add(c));

    /* Click interaction on switch */
    PolymorphSwitchLabelElement.onclick = e => {
        e.preventDefault();
        PolymorphSwitchLabelElement.focus();

        let center = PolymorphSwitchLabelElement.offsetWidth / 2;
        if (e.offsetX >= center) {
            console.log('clicked right');
            setSwitchOn();

        } else if(e.offsetX < center){
            console.log('clicked left');
            setSwitchOff();

        }
    }

    function setSwitchOn(){
        PolymorphSwitchLabelElement.classList.remove("required");
        checkBoxElement.checked = true;
        checkBoxElement.setAttribute("checked", "true");
        checkBoxElement.indeterminate = false;
        obs.setValue(true);

        hideArrows();
        thumbElement.classList.remove("indeterminate");
        thumbElement.classList.remove("off");
        thumbElement.classList.add("on");
    }

    function setSwitchOff(){
        PolymorphSwitchLabelElement.classList.remove("required");
        checkBoxElement.checked = false;
        checkBoxElement.setAttribute("checked", "false");
        checkBoxElement.indeterminate = false;
        obs.setValue(false);

        hideArrows();
        thumbElement.classList.remove("indeterminate");
        thumbElement.classList.remove("on");
        thumbElement.classList.add("off");
    }


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


    PolymorphSwitchLabelElement.appendChild(checkBoxElement);
    PolymorphSwitchLabelElement.appendChild(thumbElement);


    if (indeterminate !== null) {
        checkBoxElement.indeterminate = indeterminate;
    }


    function hideArrows(){
        arrowLeftElement.style.display = 'none';
        arrowRightElement.style.display = 'none';
    }

/*    thumbElement.onclick = _ => {
       console.log( checkBoxElement.checked );
    }*/

    if(checkBoxElement.indeterminate === true) {
        obs.setValue(null);
        thumbElement.classList.add("indeterminate");
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
              /*  arrowLeftElement.style.display = 'none';
                arrowRightElement.style.display = 'none';*/
                arrowLeftElement.style.display = 'block';
                arrowRightElement.style.display = 'block';

            }
        }
    }

    PolymorphSwitchLabelElement.onmouseout = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            PolymorphSwitchLabelElement.classList.remove("hover");

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
                //}
            }
        }
    };


    return PolymorphSwitchLabelElement;
}