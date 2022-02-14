import {dom} from "../../Kolibri/docs/src/kolibri/util/dom.js";

export {Switch}

/**
 * Implementation of the Switch Projector.
 * @author Alexander Eser & Florian Thiévent
 * @param observable
 * @param {Object} options
 * @param {String} [options.id]
 * @param {String} [options.name]
 * @param {String} [options.labelText]
 * @param {Boolean} [options.labelAfter]
 * @param {Boolean} [options.slim]
 * @param {Boolean} [options.state]
 * @param {Boolean} [options.threeState]
 * @returns {HTMLLabelElement}
 * @constructor
 */
const Switch = (observable, options) => {


    // Create ID and Name if they are not set by developer on init
    const randomId = () => Math.random().toString(36).substring(2) || "0";
    const idName = 'switch-' + randomId().padEnd(12, 'a').slice(0, 19);

    (options.id === undefined) ? options.id = idName : "";
    (options.name === undefined) ? options.name = idName : "";


    // Create all Elements needed for a Switch, depending on option.slim
    const elements = dom(`
        <div class="switch-container">
        
            <div class="switch-text before"></div>
            
            <label class="switch" for="switch-control" data-id="switch-control">
                
                <input id="switch-control" name="switch-control" data-type="switch" type="checkbox" role="checkbox" aria-checked="false" value="false">
                <span class="thumb off">
                    <span class="arrow arrow-left"  style="display: none;"></span>
                    <span class="arrow arrow-right" style="display: none;"></span>
                </span>
                <div class="switch-icon off"></div>
                <div class="switch-icon on"></div>
         
            </label>
             <div class="switch-text after"></div>
        </div>
       
     `);


    const switchElement = elements[0];
    /** @type {HTMLLabelElement} */ const switchLabelElement = switchElement.children[1];
    /** @type {HTMLInputElement} */ const switchInputElement = switchLabelElement.children[0];
    /** @type {HTMLSpanElement} */  const thumbElement = switchLabelElement.children[1];
    /** @type {HTMLSpanElement} */  const arrowLeft = thumbElement.children[0];
    /** @type {HTMLSpanElement} */  const arrowRight = thumbElement.children[1];
    /** @type {HTMLDivElement} */   const offIcon = switchLabelElement.children[2];
    /** @type {HTMLDivElement} */   const onIcon = switchLabelElement.children[3];

    const labelTextElementBefore = switchElement.children[0];
    const labelTextElementAfter = switchElement.children[2];


    const switchElements = [switchLabelElement, switchInputElement, thumbElement, arrowLeft, arrowRight, offIcon, onIcon];

    if (options.labelText !== undefined) {

        if (options.labelAfter) {
            labelTextElementAfter.textContent = options.labelText;
            labelTextElementBefore.style.display = "none";
        } else {
            labelTextElementBefore.textContent = options.labelText;
            labelTextElementAfter.style.display = "none";
            thumbElement.classList.add("before");
        }

    }


    // Check if slim
    const slimClassName = 'switch-slim';
    if (options.slim) {
        switchElements.forEach(e => e.classList.add(slimClassName));
    } else {
        offIcon.style.display = "none";
        onIcon.style.display = "none";
        switchElements.forEach(e => e.classList.remove(slimClassName));
    }

    // Change id, name and for attribute according to options object
    switchLabelElement.htmlFor = options.id;
    switchInputElement.id = options.id;
    switchInputElement.name = options.name;

    // set switch to on state
    const setSwitchOn = () => {
        offIcon.classList.remove("active");
        switchLabelElement.classList.remove("required");
        thumbElement.classList.remove("indeterminate", "off");

        onIcon.classList.add("active");
        thumbElement.classList.add("on");

        switchInputElement.setAttribute("checked", "true");
        switchInputElement.indeterminate = false;
        switchInputElement.checked = true;
        observable.setValue(true);

        hideArrows();
    }

    // set switch to off state
    const setSwitchOff = () => {
        onIcon.classList.remove("active");
        switchLabelElement.classList.remove("required");
        thumbElement.classList.remove("indeterminate", "off");

        offIcon.classList.add("active");
        thumbElement.classList.add("off");

        switchInputElement.removeAttribute("checked");
        switchInputElement.indeterminate = false;
        switchInputElement.checked = false;
        observable.setValue(false);

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
        switchInputElement.checked = undefined;
        observable.setValue(undefined);
    }

    // Function to hide the Arrows on the Element.
    const hideArrows = () => {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
    }

    // set initial values
    switchInputElement.value = `${options.state}`;
    observable.setValue(options.state);

    // set initial view based on options
    if (options.threeState) {
        switch (options.state) {
            case true:
                setSwitchOn();
                switchInputElement.indeterminate = false;
                break;
            case false:
                switchInputElement.indeterminate = false;
                setSwitchOff();
                break;
            default:
                switchInputElement.indeterminate = true;
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
    switchLabelElement.onclick = e => {
        let isNotReadonly = !switchLabelElement.classList.contains('read-only');

        switchLabelElement.focus();
        let center = switchLabelElement.offsetWidth / 2;
        if (e.offsetX >= center && isNotReadonly) {
            setSwitchOn();
        } else if (e.offsetX < center && isNotReadonly) {
            setSwitchOff();
        }
    }

    // Focus
    switchInputElement.onfocus = () => {
        switchLabelElement.classList.add("focus");
        switchLabelElement.focus();
    }

    // Blur
    switchInputElement.onblur = () => {
        switchLabelElement.classList.remove("focus");
        switchLabelElement.blur();
    }

    // Hover
    switchLabelElement.onmouseover = () => {
        switchLabelElement.classList.add("hover");
        if (switchInputElement.indeterminate && !switchLabelElement.classList.contains('read-only')) {
            arrowLeft.style.display = 'block';
            arrowRight.style.display = 'block';
        }
    }

    // Mouse Out
    switchLabelElement.onmouseout = () => {
        hideArrows();

        switchLabelElement.classList.remove("hover");

        if (switchInputElement.indeterminate) {
            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';
        }
    }

    // Drag interaction
    let mousePos = 0;
    let mouseOffset = 20;

    const calcMovement = ex => {
        if (mousePos > ex + mouseOffset) {
            return false;
        } else if (mousePos < ex) {
            return true;
        }
    }

    switchLabelElement.onmousedown = e => mousePos = e.x;
    switchLabelElement.onmouseup = (e) => {
        if (!switchLabelElement.classList.contains('read-only')) {
            let calc_movement = calcMovement(e.x);
            switchInputElement.setAttribute('checked', `${calc_movement}`);
            switchInputElement.checked = calc_movement;
        }
    };

    // Keyboard interaction
    switchLabelElement.onkeyup = e => {
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
