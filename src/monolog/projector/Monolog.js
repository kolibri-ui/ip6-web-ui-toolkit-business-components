import {dom} from "../../Kolibri/docs/src/kolibri/util/dom.js";

export {Monolog}

/**
 * MonologList Monolog Projector
 * @author Alexander Eser & Florian Thiévent
 * @param {Object} options
 * @param {String} options.title
 * @param {String} options.message
 * @param {String} options.type
 * @param {Boolean} [options.sticky]
 * @param {Boolean} [options.attention]
 * @param {String} [options.codeError]
 * @returns {HTMLDivElement}
 */
const Monolog = (options) => {

    const elements = dom(`
        <div class="monolog" data-type="monolog">
            <div class="monolog-icon" data-id="monolog-icon"></div>
            <button class="monolog-close" aria-label="close"></button>
            <div class="monolog-body">
                <div class="monolog-title"></div>
                <div class="monolog-subline"></div>
            </div>
            <div class="code-box">
                <div class="code-text-box">
                    <div class="code-box-label"></div>
                    <div class="copy-interaction">
                        <div class="copy-success-icon"></div>
                        <div class="copy-icon default"></div>
                    </div>
                </div>
            </div>
        </div>
    `);

    /** @type {HTMLDivElement} */ const monologDiv                = elements[0];
    /** @type {HTMLDivElement} */ const monologIcon               = monologDiv.children[0];
    /** @type {HTMLDivElement} */ const monologClose              = monologDiv.children[1];
    /** @type {HTMLDivElement} */ const monologBody               = monologDiv.children[2];
    /** @type {HTMLDivElement} */ const monologTitle              = monologBody.children[0];
    /** @type {HTMLDivElement} */ const monologMessage            = monologBody.children[1];
    /** @type {HTMLDivElement} */ const monologCodeBox            = monologDiv.children[3];
    /** @type {HTMLDivElement} */ const monologCodeBoxBody        = monologCodeBox.children[0];
    /** @type {HTMLDivElement} */ const monologCodeBoxText        = monologCodeBoxBody.children[0];
    /** @type {HTMLDivElement} */ const monologCodeBoxInteraction = monologCodeBoxBody.children[1];
    /** @type {HTMLDivElement} */ const monologCopySuccess        = monologCodeBoxInteraction.children[0];
    /** @type {HTMLDivElement} */ const monologCopyIcon           = monologCodeBoxInteraction.children[1];

    // Add type to classlist
    const monologType = options.type.toLowerCase();
    (options.codeError) ? monologDiv.classList.add('code-error') : monologDiv.classList.add(monologType);
    monologIcon.classList.add(monologType);
    monologClose.classList.add(monologType);

    // Set Title
    monologTitle.textContent = options.title;

    // Set Message
    monologMessage.textContent = options.message;

    // Check if CodeBox is needed
    (!options.codeError) ? monologCodeBox.style.display = 'none' : monologCodeBoxText.textContent = options.codeError;

    // Check for attention in options
    (options.attention) ? monologDiv.classList.add("attention") : "";

    // Check for sticky
    if (!options.sticky) {
        monologClose.style.display = 'none';
        setTimeout(() => {
            monologDiv.classList.add('out');
            setTimeout(() => {
                monologDiv.remove();
            }, 520);
        }, 2000);
    } else {
        monologClose.onclick = () => {
            monologDiv.classList.remove('attention');
            monologDiv.classList.add('out');
            setTimeout(() => {
                monologDiv.remove();
            }, 520);

            /* Set first monolog element to marginTop=0 */
            if (monologDiv.parentElement.querySelectorAll('.monolog')[1]) {
                monologDiv.parentElement.querySelectorAll('.monolog')[1].style.marginTop = '0';
            }

            /* Retrigger stackList counter when clicking close */
            const stackNumberElement = monologDiv.parentElement.children[0];
            let stackNumber          = parseInt(stackNumberElement.textContent);
            stackNumber--;
            if (stackNumber > 0) {
                stackNumberElement.textContent = `${stackNumber}`;
            } else if (stackNumber === 0) {
                monologDiv.parentElement.children[0].remove();
            }

        }
    }

    // copy to clipboard interaction
    if (options.codeError) {
        monologCopyIcon.onclick = async () => {

            monologCopySuccess.style.display = 'inline';
            monologCopyIcon.classList.remove('default');
            monologCopyIcon.classList.add('success');
            await navigator.clipboard.writeText(monologCodeBoxText.textContent);

            setTimeout(() => {
                monologCopySuccess.style.display = 'none';
                monologCopyIcon.classList.remove('success');
                monologCopyIcon.classList.add('default');
            }, 2000);
        }
    }
    return monologDiv;
}
