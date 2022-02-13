export {Notification}

/**
 * Monolog Notification Projector
 * @author Alexander Eser & Florian Thiévent
 * @param {Object} options
 * @param {String} options.title
 * @param {String} options.message
 * @param {String} options.type
 * @param {String} [options.stack]
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

    const notificationElement = document.createElement('div');
    notificationElement.classList.add('monolog', monologType);
    notificationElement.setAttribute('data-type', `monolog-${monologType}`);

    const iconElement = document.createElement('div');
    iconElement.classList.add('monolog-icon');

    const iconImgElement = document.createElement('img');
    iconImgElement.alt = `${monologType}-icon`;
    iconImgElement.src = `../styles/kolibri/icons/${monologType}-icon.svg`;

    iconElement.appendChild(iconImgElement);
    notificationElement.appendChild(iconElement);

    const notificationBody = document.createElement('div');
    notificationBody.classList.add('monolog-body');

    const notificationTitle = document.createElement('div');
    notificationTitle.classList.add('monolog-title');
    notificationTitle.innerText = options.title;

    const notificationMessage = document.createElement('div');
    notificationMessage.classList.add('monolog-body');
    notificationMessage.innerText = options.message;

    notificationBody.appendChild(notificationTitle);
    notificationBody.appendChild(notificationMessage);

    const stackNumberLabel = document.createElement('div');
    stackNumberLabel.classList.add('monolog-stack-number');

    stackNumberLabel.innerText = options.stack;
    if(options.stack > 1 ) { //&& notificationElement.style.zIndex === '100'

        notificationElement.appendChild(stackNumberLabel);

    }


    if (options.sticky) {
        const closeElement = document.createElement('div');
        closeElement.classList.add('monolog-close');

        const closeImgElement = document.createElement('img');
        closeImgElement.src = `../styles/kolibri/icons/cross-${monologType}.svg`;
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

        codeBoxLabel.innerText = options.codeError;
        codeTextBox.appendChild(codeBoxLabel);

        const copyInteractionElement = document.createElement('div');
        copyInteractionElement.classList.add('copy-interaction');


        const copiedTextImgElement = document.createElement('img');
        copiedTextImgElement.src = '../styles/kolibri/icons/copied-confirmation.svg';
        copiedTextImgElement.alt = 'copy-success';
        copiedTextImgElement.classList.add('copy-text-icon');
        copyInteractionElement.appendChild(copiedTextImgElement);

        const copyImgElement = document.createElement('img');
        copyImgElement.src = '../styles/kolibri/icons/copy-to-clipboard.svg';
        copyImgElement.alt = "copy-button";
        copyImgElement.classList.add('copy-icon');
        copyInteractionElement.appendChild(copyImgElement);


        /*on click: copy to clipboard */
        copyImgElement.onclick = async () => {

            copiedTextImgElement.style.display = 'inline';
            copyImgElement.src = '../styles/kolibri/icons/copied-success.svg';
            await navigator.clipboard.writeText(codeBoxLabel.innerText);

            setTimeout(() => {
                copiedTextImgElement.style.display = 'none';
                copyImgElement.src = '../styles/kolibri/icons/copy-to-clipboard.svg';
            }, 2000);
        }
        codeTextBox.appendChild(copyInteractionElement);


        codeBox.appendChild(codeTextBox);
        notificationElement.appendChild(codeBox);
    }

    return notificationElement;
}