export { twoStateProjector }

/**
 * ...
 * @param {object} switchModel - Holds all attributes of the Switch model
 */
const twoStateProjector = switchModel => {

    /* Dark-/Light-Mode Toggle */
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
    }


    switchModel.TwoState.onclick = checkbox => {
        checkbox.checked = true;
        switchTheme(checkbox.checked);
    }

    /* Focus State */
    switchModel.TwoStateOff.onclick = _ => {
        switchModel.TwoStateOuter.classList.add("focus");
        switchModel.TwoStateOuter.focus();
        switchModel.TwoState.checked = false;
        switchTheme(switchModel.TwoState.checked);
    }

    /* Disabled State */
    switchModel.DisableTwoState.onchange = e => {
        switchModel.TwoState.disabled = e.target.checked;
        if (e.target.checked) {
            switchModel.TwoStateOuter.classList.add("disabled");
            switchModel.ReadOnlyTwoState.checked = false;
            switchModel.TwoStateOuter.classList.remove("read-only");
        } else {
            switchModel.TwoStateOuter.classList.remove("disabled");
        }
    }

    /* Read Only State */
    switchModel.ReadOnlyTwoState.onchange = e => {
        switchModel.TwoState.readOnly = e.target.checked;
        if (e.target.checked) {
            switchModel.TwoStateOuter.classList.add("read-only");
            switchModel.DisableTwoState.checked = false;
            switchModel.TwoStateOuter.classList.remove("disabled");
        } else {
            switchModel.TwoStateOuter.classList.remove("read-only");
        }
    }

    /* On Focus */
    switchModel.TwoState.onfocus = _ => {
        switchModel.TwoStateOuter.classList.add("focus");
        switchModel.TwoStateOuter.focus();
    }

    /* On Blur */
    switchModel.TwoState.onblur = _ => {
        switchModel.TwoStateOuter.classList.remove("focus");
        switchModel.TwoStateOuter.blur();
    }


    switchModel.TwoStateOuter.onmouseout = () => {
        switchModel.ArrowLeftTwoState.style.display = 'none';
        switchModel.ArrowRightTwoState.style.display = 'none';
    }

    switchModel.TwoStateOuter.onmouseover = () => {
        if (!switchModel.TwoState.disabled && !switchModel.TwoState.readOnly) {
            if (switchModel.TwoState.checked) {
                switchModel.ArrowLeftTwoState.style.display = 'none';
                switchModel.ArrowRightTwoState.style.display = 'block';
            } else {
                switchModel.ArrowRightTwoState.style.display = 'none';
                switchModel.ArrowLeftTwoState.style.display = 'block';
            }
        }
    }

    let mousePos = 0;
    let mouseOffset = 20;


    switchModel.TwoStateOuter.onmousedown = e => mousePos = e.x;
    switchModel.TwoStateOuter.onmouseup = (e) => {
        let cmove = calcMovement(e.x);
        switchModel.TwoState.setAttribute('checked', `${cmove}`);
        switchModel.TwoState.checked = cmove;
        switchTheme(cmove);
    };

    const calcMovement = (ex) => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }


}