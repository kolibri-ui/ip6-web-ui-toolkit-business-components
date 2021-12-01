export { switchLabelProjector }


const switchLabelProjector = switchModel => {

    const switchTheme = state => {
        if(switchModel.isDark.getValue()){
            if (state) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }
    }


    const switchLabelElement = document.createElement('label');
    switchLabelElement.classList.add('switch');
    switchLabelElement.onclick= e => e.preventDefault();


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
    crossImgElement.src = 'assets/kolibri/icons/cross.svg';
    crossImgElement.draggable = false;

    const checkmarkImgElement = document.createElement('img');
    checkmarkImgElement.alt = 'on';
    checkmarkImgElement.classList.add('switch-icon', 'on');
    checkmarkImgElement.src = 'assets/kolibri/icons/checkmark.svg';
    checkmarkImgElement.draggable = false;

    switchLabelElement.appendChild(checkBoxElement);
    switchLabelElement.appendChild(thumbElement);
    switchLabelElement.appendChild(crossImgElement);
    switchLabelElement.appendChild(checkmarkImgElement);


    checkmarkImgElement.onclick = _ => {
        checkBoxElement.checked  = true;
        checkBoxElement.setAttribute("checked", "true");
        switchTheme(checkBoxElement.checked);
    }


    crossImgElement.onclick = _ => {
        switchLabelElement.classList.add("focus");
        checkBoxElement.checked = false;
        checkBoxElement.setAttribute("checked", "false");
        switchTheme(checkBoxElement.checked);
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


   /* switchLabelElement.onmousedown = e => mousePos = e.x;
    switchLabelElement.onmouseup = (e) => {
        let cmove = calcMovement(e.x);
        checkBoxElement.setAttribute('checked', `${cmove}`);
        checkBoxElement.checked = cmove;
        switchTheme(cmove);
    };*/

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
            switchTheme(checkBoxElement.checked);
        }
    };


    return switchLabelElement;
}