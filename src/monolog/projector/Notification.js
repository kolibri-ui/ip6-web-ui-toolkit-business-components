import {dom} from "../../Kolibri/docs/src/kolibri/util/dom.js";

export {Notification}

/**
 * Monolog Notification Projector
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
const Notification = (options) => {


    /**
     * Create all Elements
     */
    const monologType = options.type.toLowerCase();


    const elements = dom(`
        <div class="monolog success" data-type="monolog-success">
            <div class="monolog-icon">
                <img alt="success-icon" src="/icon/success-icon.svg">
            </div>
            <div class="monolog-close">
                <img src="/icon/cross-success.svg" alt="close"></div>
            <div class="monolog-body">
                <div class="monolog-title">Some Info</div>
                <div class="monolog-body">Just a Test</div>
            </div>
        </div>
    `);

    /** @type {HTMLDivElement} */ const monologDiv = elements[0];


    const notificationElement = document.createElement('div');
    notificationElement.classList.add('monolog', monologType);
    notificationElement.setAttribute('data-type', `monolog-${monologType}`);

    const iconElement = document.createElement('div');
    iconElement.classList.add('monolog-icon');

    const iconImgElement = document.createElement('img');
    iconImgElement.alt = `${monologType}-icon`;
    iconImgElement.src = `../icon/${monologType}-icon.svg`;

    iconElement.appendChild(iconImgElement);
    notificationElement.appendChild(iconElement);

    const notificationBody = document.createElement('div');
    notificationBody.classList.add('monolog-body');

    const notificationTitle = document.createElement('div');
    notificationTitle.classList.add('monolog-title');
    notificationTitle.textContent = options.title;

    const notificationMessage = document.createElement('div');
    notificationMessage.classList.add('monolog-body');
    notificationMessage.textContent = options.message;

    notificationBody.appendChild(notificationTitle);
    notificationBody.appendChild(notificationMessage);


    if (options.sticky) {
        const closeElement = document.createElement('div');
        closeElement.classList.add('monolog-close');

        const closeImgElement = document.createElement('img');
        closeImgElement.src = `../icon/cross-${monologType}.svg`;
        closeImgElement.alt = 'close';

        closeElement.appendChild(closeImgElement);
        notificationElement.appendChild(closeElement);

        closeElement.onclick = () => {
            notificationElement.classList.add('out');
            setTimeout(() => {
                notificationElement.remove();
            }, 520);
        }

        if (options.attention) {
            notificationElement.classList.add('shake');
        }

    } else {
        setTimeout(() => {
            notificationElement.classList.add('out');
            setTimeout(() => {
                notificationElement.remove();
            }, 520);
        }, 1000);
    }

    notificationElement.appendChild(notificationBody);

    if (options.codeError) {

        /**
         * From "normal" Error to Code Error
         */
        notificationElement.classList.remove(monologType);
        notificationElement.classList.add('code-' + monologType);


        const codeBox = document.createElement('div');
        codeBox.classList.add('code-box');

        const codeTextBox = document.createElement('div');
        codeTextBox.classList.add('code-text-box');

        const codeBoxLabel = document.createElement('div');
        codeBoxLabel.classList.add('code-box-label');

        codeBoxLabel.textContent = options.codeError;
        codeTextBox.appendChild(codeBoxLabel);

        const copyInteractionElement = document.createElement('div');
        copyInteractionElement.classList.add('copy-interaction');


        const copiedTextImgElement = document.createElement('img');
        copiedTextImgElement.src = '../icon/copied-confirmation.svg';
        copiedTextImgElement.alt = 'copy-success';
        copiedTextImgElement.classList.add('copy-text-icon');
        copyInteractionElement.appendChild(copiedTextImgElement);

        const copyImgElement = document.createElement('img');
        copyImgElement.src = '../icon/copy-to-clipboard.svg';
        copyImgElement.alt = "copy-button";
        copyImgElement.classList.add('copy-icon');
        copyInteractionElement.appendChild(copyImgElement);


        /*on click: copy to clipboard */
        copyImgElement.onclick = async () => {

            copiedTextImgElement.style.display = 'inline';
            copyImgElement.src = '../icon/copied-success.svg';
            await navigator.clipboard.writeText(codeBoxLabel.textContent);

            setTimeout(() => {
                copiedTextImgElement.style.display = 'none';
                copyImgElement.src = '../icon/copy-to-clipboard.svg';
            }, 2000);
        }
        codeTextBox.appendChild(copyInteractionElement);


        codeBox.appendChild(codeTextBox);
        notificationElement.appendChild(codeBox);
    }

    return notificationElement;
}
