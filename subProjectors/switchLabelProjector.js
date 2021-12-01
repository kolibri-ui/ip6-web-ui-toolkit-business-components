export { switchLabelProjector }


const switchLabelProjector = () => {

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


    const switchLabelElement = document.createElement('label');
    switchLabelElement.classList.add('switch');

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

    switchLabelElement.appendChild(checkBoxElement);
    switchLabelElement.appendChild(thumbElement);
    switchLabelElement.appendChild(crossImgElement);
    switchLabelElement.appendChild(checkmarkImgElement);

    //console.log(switchLabelElement);

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







/*    /!* Dark-/Light-Mode Toggle *!/
    const switchTheme = state => {

        if (switchModel.FeatureToggle.checked) {
            if (state) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark'); //add this
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light'); //add this
            }
        }
    }*/


    checkmarkImgElement.onclick = _ => {
        checkBoxElement.checked  = true;
        //switchTheme(checkbox.checked);
    }


    crossImgElement.onclick = _ => {
        switchLabelElement.classList.add("focus");
        switchLabelElement.focus();
        checkBoxElement.checked = false;
        //switchTheme(switchModel.TwoState.checked);
    }



    /* On Focus */
    checkBoxElement.onfocus = _ => {
        switchLabelElement.classList.add("focus");
        switchLabelElement.focus();
    }

    /* On Blur */
    checkBoxElement.onblur = _ => {
        switchLabelElement.classList.remove("focus");
        switchLabelElement.blur();
    }


    switchLabelElement.onmouseout = () => {
        arrowLeftElement.style.display = 'none';
        arrowRightElement.style.display = 'none';
    }

    switchLabelElement.onmouseover = () => {
        if (!checkBoxElement.disabled && !checkBoxElement.readOnly) {
            if (checkBoxElement.checked) {
                arrowLeftElement.style.display = 'none';
                arrowRightElement.style.display = 'block';
            } else {
                arrowRightElement.style.display = 'none';
                arrowLeftElement.style.display = 'block';
            }
        }
    }

    let mousePos = 0;
    let mouseOffset = 20;


    switchLabelElement.onmousedown = e => mousePos = e.x;
    switchLabelElement.onmouseup = (e) => {
        let cmove = calcMovement(e.x);
        checkBoxElement.setAttribute('checked', `${cmove}`);
        checkBoxElement.checked = cmove;
        //switchTheme(cmove);
    };

    const calcMovement = (ex) => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }


    //Keyboard Control
/*    document.onkeydown = (e) => {
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
            switchTheme(switchModel.TwoState.checked);
        }
    };*/

    /* Needs to be in projector */

    //console.log(switchLabelElement);
    return switchLabelElement
}