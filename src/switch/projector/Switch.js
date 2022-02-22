// noinspection SpellCheckingInspection

import {dom} from "../../Kolibri/docs/src/kolibri/util/dom.js";

export {Switch}

/**
 * Implementation of the Switch Projector.
 * @author Alexander Eser & Florian Thiévent
 * @param observable
 * @param {Object} options
 * @param {String} [options.id]
 * @param {String} [options.name]
 * @param {Boolean} [options.slim]
 * @param {Boolean} [options.state]
 * @param {Boolean} [options.threeState]
 * @returns {HTMLLabelElement}
 * @constructor
 */
const Switch = (observable, options) => {


    // Create ID and Name if they are not set by developer on init
    const randomId = () => Math.random().toString(36).substring(2) || "0";
    const idName   = 'switch-' + randomId().padEnd(12, 'a').slice(0, 19);

    (options.id === undefined) ? options.id = idName : "";
    (options.name === undefined) ? options.name = idName : "";


    // Create all Elements needed for a Switch, depending on option.slim
    const elements = dom(`
        <label class="switch" for="switch-control" data-id="switch-control">
            <input id="switch-control" name="switch-control" data-type="switch" type="checkbox" role="checkbox" aria-checked="false" value="false">
            <span class="thumb">
                <span class="arrow arrow-left"  style="display: none;"></span>
                <span class="arrow arrow-right" style="display: none;"></span>
            </span>
            <div class="switch-icon off"></div>
            <div class="switch-icon on"></div>
        </label>
     `);


    /** @type {HTMLLabelElement} */ const switchElement      = elements[0];
    /** @type {HTMLInputElement} */ const switchInputElement = switchElement.children[0];
    /** @type {HTMLSpanElement} */  const thumbElement       = switchElement.children[1];
    /** @type {HTMLSpanElement} */  const arrowLeft          = thumbElement.children[0];
    /** @type {HTMLSpanElement} */  const arrowRight         = thumbElement.children[1];
    /** @type {HTMLDivElement} */   const offIcon            = switchElement.children[2];
    /** @type {HTMLDivElement} */   const onIcon             = switchElement.children[3];


    const switchElements = [switchElement, switchInputElement, thumbElement, arrowLeft, arrowRight, offIcon, onIcon];


    // Check if slim
    const slimClassName = 'switch-slim';
    if (options.slim) {
        switchElements.forEach(e => e.classList.add(slimClassName));
    } else {
        offIcon.style.display = "none";
        onIcon.style.display  = "none";
        switchElements.forEach(e => e.classList.remove(slimClassName));
    }

    // Change id, name and for attribute according to options object
    switchElement.htmlFor   = options.id;
    switchInputElement.id   = options.id;
    switchInputElement.name = options.name;

    // set switch to on state
    const setSwitchOn = () => {
        offIcon.classList.remove("active");
        switchElement.classList.remove("required");
        thumbElement.classList.remove("indeterminate", "off");

        onIcon.classList.add("active");
        thumbElement.classList.add("on");

        switchInputElement.setAttribute("checked", "true");
        switchInputElement.indeterminate = false;
        switchInputElement.checked       = true;
        observable.setValue(true);
        options.state = true;

        hideArrows();
    }

    // set switch to off state
    const setSwitchOff = () => {
        onIcon.classList.remove("active");
        switchElement.classList.remove("required");
        thumbElement.classList.remove("indeterminate", "on");

        offIcon.classList.add("active");
        thumbElement.classList.add("off");

        switchInputElement.removeAttribute("checked");
        switchInputElement.indeterminate = false;
        switchInputElement.checked       = false;
        observable.setValue(false);
        options.state = false;

        hideArrows();
    }

    // Set Switch to indeterminate state
    const setSwitchIndeterminate = () => {
        onIcon.classList.remove("active");
        offIcon.classList.remove("active");
        thumbElement.classList.remove("off", "on")

        thumbElement.classList.add("indeterminate");
        switchInputElement.removeAttribute("checked");
        switchInputElement.indeterminate = true;
        switchInputElement.checked       = undefined;
        observable.setValue(undefined);
    }

    // Function to hide the Arrows on the Element.
    const hideArrows = () => {
        arrowLeft.style.display  = 'none';
        arrowRight.style.display = 'none';
    }

    // set initial values
    switchInputElement.value = `${options.state}`;
    observable.setValue(options.state);

    // set initial view based on options
    if (options.threeState) {
        switch (options.state) {
            case true:
                switchInputElement.indeterminate = false;
                setSwitchOn();
                break;
            case false:
                switchInputElement.indeterminate = false;
                setSwitchOff();
                break;
            default:
                switchInputElement.indeterminate = true;
                thumbElement.classList.remove("off", "on");
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
    // Click
    switchElement.onclick = e => {
        let isNotReadonly = !switchElement.classList.contains('read-only');

        e.preventDefault();
        switchElement.focus();

        if (switchInputElement.indeterminate) {

            // When indeterminate: detect if click is on the left or right side
            let center = switchElement.offsetWidth / 2;
            if (e.offsetX >= center && isNotReadonly) {
                setSwitchOn();
            } else if (e.offsetX < center && isNotReadonly) {
                setSwitchOff();
            }

        } else {
            // When on or off: toggle
            if (options.state === true) {
                setSwitchOff();
            } else if (options.state === false) {
                setSwitchOn();
            }
        }

    }

    // Focus
    switchInputElement.onfocus = () => {
        switchElement.classList.add("focus");
        switchElement.focus();
    }

    // Blur
    switchInputElement.onblur = () => {
        switchElement.classList.remove("focus");
        switchElement.blur();
    }

    // Hover
    switchElement.onmouseover = () => {
        switchElement.classList.add("hover");
        if (switchInputElement.indeterminate && !switchElement.classList.contains('read-only')) {
            arrowLeft.style.display  = 'block';
            arrowRight.style.display = 'block';
        }
    }

    // Mouse Out
    switchElement.onmouseout = () => {
        hideArrows();

        switchElement.classList.remove("hover");

        if (switchInputElement.indeterminate) {
            arrowLeft.style.display  = 'none';
            arrowRight.style.display = 'none';
        }
    }

    // Drag interaction
    let mousePos    = 0;
    let mouseOffset = 20;

    const calcMovement = ex => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }

    switchElement.onmousedown = e => mousePos = e.x;
    switchElement.onmouseup   = (e) => {
        if (!switchElement.classList.contains('read-only')) {
            let calc_movement = calcMovement(e.x);
            switchInputElement.setAttribute('checked', `${calc_movement}`);
            switchInputElement.checked = calc_movement;
        }
    };

    // Keyboard interaction
    switchElement.onkeyup = e => {
        if (!switchInputElement.readOnly) {
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
    }

    return switchElement;
}
