import { switchProjector } from "../mainProjector/switchProjector.js";
import { switchLabelProjector } from "../subProjectors/switchLabelProjector.js";
import { ObservableList } from "../observable/observable.js";


export {SwitchController, View}

const SwitchController = () => {

    /**
     * Holds all the Attributes of the Login component and makes them partially externally available
     * @typedef {object} switch
     * @property threeState - threeState
     * @property threeStateOuter - threeStateOuter

     * ....... TBD

     * @returns {object} - Switch Model
     */
    const SwitchModel = () => {

        /* Three-State Switch Attributes */
/*        const threeState = document.getElementById("three-state");
        const threeStateOuter = threeState.parentNode.nodeName;
        const threeStateIndeterminate = document.getElementById("three-state-indeterminate");
        const threeStateOff = document.getElementById("three-state-off");
        const threeStateOn = document.getElementById("three-state-on");

        const disableThreeState = document.getElementById("disable-three-state");
        const readOnlyThreeState = document.getElementById("readonly-three-state");
        const requiredThreeState = document.getElementById("required-three-state");

        const arrowLeftThreeState = document.getElementById("arrow-left-three-state");
        const arrowRightThreeState = document.getElementById("arrow-right-three-state");

        const arrowIndeterminateLeftThreeState = document.getElementById("arrow-indeterminate-left-three-state");
        const arrowIndeterminateRightThreeState = document.getElementById("arrow-indeterminate-right-three-state");*/


        /* Two-State Switch Attributes */

      /*  console.log(switchLabelProjector().querySelector('input'));
        console.log(switchLabelProjector()) */

        //const twoState = document.getElementById("two-state");


/*        const twoState = switchLabelProjector().querySelector('input');


        const twoStateOuter = twoState.parentNode;
        const disableTwoState = document.getElementById("disable-two-state");
        const readOnlyTwoState = document.getElementById("readonly-two-state");
        const twoStateOn = document.getElementById("two-state-on");
        const twoStateOff = document.getElementById("two-state-off");

        const arrowLeftTwoState = document.getElementById("arrow-left-two-state");
        const arrowRightTwoState = document.getElementById("arrow-right-two-state");


        /!* Configuration Attributes *!/
        const featureToggle = document.getElementById("featureToggle");
        const switchColor = document.getElementById("switchColor");
        const switchColorBG = document.getElementById("switchColorBG");*/

/*        switchColorBG.addEventListener("input", changeColorBG, false);
        switchColorBG.addEventListener("change", changeColorBG, false);*/


        return {
/*            ThreeState: threeState,
            ThreeStateOuter: threeStateOuter,
            ThreeStateIndeterminate: threeStateIndeterminate,
            ThreeStateOff:threeStateOff,
            ThreeStateOn:threeStateOn,
            DisableThreeState:disableThreeState,
            ReadOnlyThreeState:readOnlyThreeState,
            RequiredThreeState:requiredThreeState,

            ArrowLeftThreeState:arrowLeftThreeState,
            ArrowRightThreeState:arrowRightThreeState,

            ArrowIndeterminateLeftThreeState:arrowIndeterminateLeftThreeState,
            ArrowIndeterminateRightThreeState:arrowIndeterminateRightThreeState,*/



       /*     TwoState:twoState,
            TwoStateOuter:twoStateOuter,
            DisableTwoState:disableTwoState,
            ReadOnlyTwoState:readOnlyTwoState,
            TwoStateOn:twoStateOn,
            TwoStateOff:twoStateOff,


            ArrowLeftTwoState:arrowLeftTwoState,
            ArrowRightTwoState:arrowRightTwoState,

            FeatureToggle:featureToggle,
            SwitchColor:switchColor,
            SwitchColorBG:switchColorBG*/

        }
    }

   // const twoState = switchLabelProjector().querySelector('input');

    const switchModel = ObservableList([])

    const addSwitch = () => {
        const newSwitch = SwitchModel()
        switchModel.add(newSwitch)
        return newSwitch
    }

    return {
        onSwitchAdd: switchModel.onAdd,
        addSwitch: addSwitch,
    }
}

const View = (controller, rootElement) => {
    const render = () => switchProjector(controller, rootElement)
    controller.onSwitchAdd(render)
}

// console.log(switchLabelProjector().children);



/*********** Needs to be in projector **********/

/*

function changeColorBG() {

    const thumbs = document.getElementsByClassName("thumb");

    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].style.backgroundColor = event.target.value;
    }

}


SwitchColor.addEventListener("input", changeColor, false);
SwitchColor.addEventListener("change", changeColor, false);

function changeColor() {

    const r = document.querySelector(":root");
    r.style.setProperty('--switch-thumb-color', event.target.value);

}

FeatureToggle.onchange = (e) => {
    if (e.target.checked) {
        TwoStateOn.src = 'assets/kolibri/icons/moon.svg';
        TwoStateOff.src = 'assets/kolibri/icons/sun.svg';
    } else {
        TwoStateOn.src = 'assets/kolibri/icons/cross.svg';
        TwoStateOff.src = 'assets/kolibri/icons/checkmark.svg';
    }
}


TwoState.onclick = e => e.preventDefault();
ThreeState.onclick = e => e.preventDefault();

ThreeStateIndeterminate.onclick = _ => ThreeState.indeterminate = true;

ThreeStateOff.onclick = _ => {
    ThreeStateOuter.classList.remove("required");
    RequiredThreeState.checked = false;
    ThreeState.indeterminate = false;
    ThreeState.checked = false;
}

ThreeStateOn.onclick = _ => {
    ThreeStateOuter.classList.remove("required");
    ThreeState.indeterminate = false;
    RequiredThreeState.checked = false;
    ThreeState.checked = true;
}

DisableThreeState.onchange = e => {
    ThreeState.disabled = e.target.checked;
    if (e.target.checked) {
        ThreeStateOuter.classList.add("disabled");
        ReadOnlyThreeState.checked = false;
        ThreeStateOuter.classList.remove("read-only");
    } else {
        ThreeStateOuter.classList.remove("disabled");
    }
}

ReadOnlyThreeState.onchange = e => {
    ThreeState.readOnly = e.target.checked;
    if (e.target.checked) {
        ThreeStateOuter.classList.add("read-only");
        DisableThreeState.checked = false;
        ThreeStateOuter.classList.remove("disabled");
    } else {
        ThreeStateOuter.classList.remove("read-only");
    }
}

RequiredThreeState.onchange = e => {
    ThreeState.required = e.target.checked;
    //threeState.indeterminate = true;
    if (e.target.checked) {
        ThreeStateOuter.classList.add("required");
        ReadOnlyThreeState.checked = false;
        ThreeStateOuter.classList.remove("read-only");
        DisableThreeState.checked = false;
        ThreeStateOuter.classList.remove("disabled");
    } else {
        ThreeStateOuter.classList.remove("required");
    }
}

ThreeStateOuter.onmouseover = () => {
    //threeStateOuter.classList.remove("required");
    RequiredThreeState.checked = false;

    if (!ThreeState.disabled && !ThreeState.readOnly) {
        if (ThreeState.checked) {
            ArrowLeftThreeState.style.display = 'none';
            ArrowRightThreeState.style.display = 'block';
        } else {
            ArrowRightThreeState.style.display = 'none';
            ArrowLeftThreeState.style.display = 'block';
        }

        if (ThreeState.indeterminate) {
            ArrowRightThreeState.style.display = 'none';
            ArrowLeftThreeState.style.display = 'none';
            ArrowIndeterminateLeftThreeState.style.display = 'block';
            ArrowIndeterminateRightThreeState.style.display = 'block';

        }
    }
}

ThreeStateOuter.onmouseout = () => {
    ArrowRightThreeState.style.display = 'none';
    ArrowLeftThreeState.style.display = 'none';
    ArrowIndeterminateLeftThreeState.style.display = 'none';
    ArrowIndeterminateRightThreeState.style.display = 'none';
}


ThreeState.onfocus = e => {
    //threeStateOuter.classList.remove("required");
    threeStateOuter.classList.add("focus");
    threeStateOuter.focus();
}

ThreeState.onblur = e => {
    ThreeStateOuter.classList.remove("focus");
    ThreeStateOuter.blur();
}


/!**
 * Two State
 *!/

const switchTheme = state => {


    if (FeatureToggle.checked) {
        if (state) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); //add this
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); //add this
        }
    }
}


TwoStateOn.onclick = _ => {
    TwoState.checked = true;
    switchTheme(TwoState.checked);
}

TwoStateOff.onclick = _ => {
    TwoStateOuter.classList.add("focus");
    TwoStateOuter.focus();
    TwoState.checked = false;
    switchTheme(TwoState.checked);
}

DisableTwoState.onchange = e => {
    TwoState.disabled = e.target.checked;
    if (e.target.checked) {
        TwoStateOuter.classList.add("disabled");
        ReadOnlyTwoState.checked = false;
        TwoStateOuter.classList.remove("read-only");
    } else {
        TwoStateOuter.classList.remove("disabled");
    }
}

ReadOnlyTwoState.onchange = e => {
    TwoState.readOnly = e.target.checked;
    if (e.target.checked) {
        TwoStateOuter.classList.add("read-only");
        DisableTwoState.checked = false;
        TwoStateOuter.classList.remove("disabled");
    } else {
        TwoStateOuter.classList.remove("read-only");
    }
}


TwoState.onfocus = _ => {
    TwoStateOuter.classList.add("focus");
    TwoStateOuter.focus();
}

TwoState.onblur = _ => {
    TwoStateOuter.classList.remove("focus");
    TwoStateOuter.blur();
}


TwoStateOuter.onmouseout = () => {
    ArrowLeftTwoState.style.display = 'none';
    ArrowRightTwoState.style.display = 'none';
}

TwoStateOuter.onmouseover = () => {
    if (!TwoState.disabled && !TwoState.readOnly) {
        if (TwoState.checked) {
            ArrowLeftTwoState.style.display = 'none';
            ArrowRightTwoState.style.display = 'block';
        } else {
            ArrowRightTwoState.style.display = 'none';
            ArrowLeftTwoState.style.display = 'block';
        }
    }
}

let mousePos = 0;
let mouseOffset = 20;

ThreeStateOuter.onmousedown = e => mousePos = e.x;
ThreeStateOuter.onmouseup = (e) => {
    let cmove = calcMovement(e.x);
    ThreeState.setAttribute('checked', `${cmove}`);
    ThreeState.checked = cmove;
    switchTheme(cmove);
}

TwoStateOuter.onmousedown = e => mousePos = e.x;
TwoStateOuter.onmouseup = (e) => {
    let cmove = calcMovement(e.x);
    TwoState.setAttribute('checked', `${cmove}`);
    TwoState.checked = cmove;
    switchTheme(cmove);
};

const calcMovement = (ex) => {
    if (mousePos > ex + mouseOffset) {
        return false;
    } else if (mousePos < ex) {
        return true;
    }
}
*/







