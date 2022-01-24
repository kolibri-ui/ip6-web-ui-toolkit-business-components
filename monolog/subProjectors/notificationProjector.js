import {brProjector} from "../../global-projectors/brProjector.js";

export {notificationProjector}

/**
 * Creates a Monolog Notification
 * @returns {HTMLDivElement}
 * @param type {string}
 * @param sticky {boolean}
 * @param attention {boolean}
 * @param icon {boolean}
 * @param codeError
 * @param title {string}
 * @param message {string}
 * @param timeout
 */
const notificationProjector = (type = "default",
                               sticky = false,
                               attention = false,
                               icon = false,
                               codeError = false,
                               title = '',
                               message = '',
                               timeout = 5000) => {

    const notificationElement = document.createElement('div');
    notificationElement.classList.add('monolog', type.toLowerCase());

    if (icon) {
        const iconElement = document.createElement('div');
        iconElement.classList.add('monolog-icon');

        const iconImgElement = document.createElement('img');

        switch (type){
            //'Default', 'Info', 'Success', 'Warning', 'Error'

            case 'Info':
                iconImgElement.src = '../styles/kolibri/icons/info-icon.svg';
                break;

            case 'Success':
                iconImgElement.src = '../styles/kolibri/icons/success-icon.svg';
                break;

            case 'Warning' :
                iconImgElement.src = '../styles/kolibri/icons/warning-icon.svg';
                break;

            case 'Error' :
            case 'code-error' :
                iconImgElement.src = '../styles/kolibri/icons/error-icon.svg';
                break;
        }

        iconElement.appendChild(iconImgElement);
        notificationElement.appendChild(iconElement);
    }

    const notificationBody = document.createElement('div');
    notificationBody.classList.add('monolog-body');

    const notificationTitle = document.createElement('div');
    notificationTitle.classList.add('monolog-title');
    notificationTitle.innerText = title;

    const notificationMessage = document.createElement('div');
    notificationMessage.classList.add('monolog-body');
    notificationMessage.innerText = message;

    notificationBody.appendChild(notificationTitle);
    notificationBody.appendChild(notificationMessage);


    if (sticky) {
        const closeElement = document.createElement('div');
        closeElement.classList.add('monolog-close');

        const closeImgElement = document.createElement('img');
        closeImgElement.alt = 'close';


        switch (type){
            //'Default', 'Info', 'Success', 'Warning', 'Error'

            case 'Info':
                closeImgElement.src = '../styles/kolibri/icons/cross-info.svg';
                break;

            case 'Success':
                closeImgElement.src = '../styles/kolibri/icons/cross-success.svg';
                break;

            case 'Warning' :
                closeImgElement.src = '../styles/kolibri/icons/cross-warning.svg';
                break;

            case 'Error' :
                closeImgElement.src = '../styles/kolibri/icons/cross-error.svg';
                break;

            case 'code-error' :
                closeImgElement.src = '../styles/kolibri/icons/cross-error.svg';
                break;
        }

        closeElement.appendChild(closeImgElement);
        notificationElement.appendChild(closeElement);

        closeElement.onclick = _ => {
            notificationElement.classList.add('out');
            setTimeout(() => {
                notificationElement.remove();
            }, 520);
        }

        if(attention){
            notificationElement.classList.add('shake');
        }

    } else {
        setTimeout(() => {
            notificationElement.classList.add('out');
            setTimeout(() => {
                notificationElement.remove();
            }, 520);
        }, timeout);
    }

    notificationElement.appendChild(notificationBody);

    if(codeError) {


        const codeBox = document.createElement('div');
        codeBox.classList.add('code-box');

        const codeTextBox = document.createElement('div');
        codeTextBox.classList.add('code-text-box');


        const codeBoxLabel = document.createElement('label');
        codeBoxLabel.classList.add('code-box-label');
        codeBoxLabel.innerText = 'Exception in thread "main" \n' +
            'java.lang.ArithmeticException: / by zero at DivByZero.main(File.java:14)';
        codeTextBox.appendChild(codeBoxLabel);

/*        const copyImgBox = document.createElement('div');
        copyImgBox.classList.add('copy-img-box');
        notificationElement.appendChild(copyImgBox);*/

        const copyImgElement = document.createElement('img');
        copyImgElement.src = '../styles/kolibri/icons/copy-to-clipboard.svg';
        copyImgElement.classList.add('copy-icon');
        codeTextBox.appendChild(copyImgElement);



        /*on click: copy to clipboard */
        copyImgElement.onclick = async () => {
            copyImgElement.src = '../styles/kolibri/icons/copied-success.svg';
            await navigator.clipboard.writeText(codeBoxLabel.innerText);


                const copiedTextImgElement = document.createElement('img');
                copiedTextImgElement.src = '../styles/kolibri/icons/copied-confirmation.svg';
                copiedTextImgElement.classList.add('copy-text-icon');
                codeTextBox.appendChild(copiedTextImgElement);

                setTimeout(() =>{
                    copiedTextImgElement.remove();
                }, 2000);

        }

        codeBox.appendChild(codeTextBox);

        notificationElement.appendChild(codeBox);

    }



    return notificationElement;
}