import {Notification} from "./Notification.js";

export {Monolog}

/**
 * Creates a Monolog List on the given Position
 * @returns {{success: (function(*): void), warning: (function(*): void), list: (function(): HTMLDivElement), error: (function(*): void), info: (function(*): void)}}
 * @constructor
 */
const Monolog = () => {
    const monologListElement = document.createElement('div');
    monologListElement.classList.add('monolog-list', 'top', 'right');

    let stackListElementInfo = document.createElement('div');
    const stackNumberLabelInfo = document.createElement('div');

    let stackListElementSuccess = document.createElement('div');
    const stackNumberLabelSuccess = document.createElement('div');

    let stackListElementError = document.createElement('div');
    const stackNumberLabelError = document.createElement('div');

    let notification;

    /**
     * Finally emits the Monolog
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} options.type
     * @param {String} [options.stack]
     * @param {String} [options.stackNumber]
     * @param {Boolean} [options.sticky]
     * @param {Boolean} [options.attention]
     * @param {String} [options.codeError]
     * @param options
     */
    const emit = options => {
        notification = Notification(options);
        stack(options);
    }

    /**
     * Displays an info Monolog
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} [options.type]
     * @param {String} [options.stack]
     * @param {String} [options.stackNumber]
     * @param {Boolean} [options.sticky]
     * @param options
     */
    const info = options => {
        options.type = 'info';
        emit(options);
    }

    /**
     * Displays a success Monolog
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} [options.type]
     * @param {String} [options.stack]
     * @param {String} [options.stackNumber]
     * @param {Boolean} [options.sticky]
     */
    const success = options => {
        options.type = 'success';
        emit(options);
    }

    /**
     * Displays a warning Monolog
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} [options.type]
     * @param {String} [options.stack]
     * @param {String} [options.stackNumber]
     * @param {Boolean} [options.sticky]
     */
    const warning = options => {
        options.type = 'warning';
        emit(options);
    }
    /**
     * Displays an error Monolog
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} [options.type]
     * @param {String} [options.stack]
     * @param {String} [options.stackNumber]
     * @param {Boolean} [options.sticky]
     * @param {Boolean} [options.attention]
     * @param {String} [options.codeError]
     */
    const error = options => {
        options.type = 'error';

        // A Code-Error is always sticky
        (options.codeError) ? options.sticky = true : "";
        emit(options);
    }


    /**
     * Displays an error Monolog
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} [options.type]
     * @param {String} [options.stack]
     * @param {String} [options.stackNumber]
     * @param {Boolean} [options.sticky]
     * @param {Boolean} [options.attention]
     * @param {String} [options.codeError]
     */
    const stack = options => {
        const type = options.type;

        switch (type) {
            case 'info':
                stackListElementSuccess.classList.add('stack-list-' + type);
                stackListElementInfo.appendChild(notification);
                monologListElement.appendChild(stackListElementInfo);

                if (options.sticky) {
                    options.stack = checkStacking(stackListElementInfo);
                    stackNumberLabelInfo.classList.add('stack-number-'+ type);
                    stackNumberLabelInfo.innerText = options.stack;
                    stackListElementInfo.appendChild(stackNumberLabelInfo);
                }
                break;
            case 'success':
                stackListElementSuccess.classList.add('stack-list-' + type);
                stackListElementSuccess.appendChild(notification);
                monologListElement.appendChild(stackListElementSuccess);

                if (options.sticky) {
                    options.stack = checkStacking(stackListElementSuccess);
                    stackNumberLabelSuccess.classList.add('stack-number-'+ type);
                    stackNumberLabelSuccess.innerText = options.stack;
                    stackListElementSuccess.appendChild(stackNumberLabelSuccess);
                }
                break;
            case 'error':
                stackListElementError.classList.add('stack-list-' + type);
                stackListElementError.appendChild(notification);
                monologListElement.appendChild(stackListElementError);

                if (options.sticky) {
                    options.stack = checkStacking(stackListElementError);
                    stackNumberLabelError.classList.add('stack-number-'+ type);
                    stackNumberLabelError.innerText = options.stack;
                    stackListElementError.appendChild(stackNumberLabelError);
                }
                break;

        }
       // emit(options);
    }

    /**
     * Stack all Monologues of a certain type
     * @param {Object} monologList
     */
    const checkStacking = (monologList) => {

        const infoType = monologList.querySelectorAll('.info');
        const successType = monologList.querySelectorAll('.success');
        const errorType = monologList.querySelectorAll('.code-error');

        if(infoType.length >= 1){
            stacking(infoType);
            return infoType.length.toString();
        }
        if (successType.length >= 1) {
            stacking(successType);
            return successType.length.toString();
        }
        if(errorType.length >= 1){
            stacking(errorType);
            return errorType.length.toString();
        }

    }

    const stacking = list => {

        const parent = list[0].getBoundingClientRect();

        list.forEach((e, idx) => {

            list[0].style.position = 'absolute';
            list[0].style.zIndex = '100';
            list[0].style.top = '0';
            list[0].style.opacity = '100%';
            //options.stackNumber = list[0].style.zIndex;

            if (idx > 0) {
                //console.log(typeof idx);
                e.style.position = 'absolute';
                e.style.zIndex = `${100 - idx}`;
                e.style.top = `${(5 * idx)}px`;
                e.style.opacity = `${100-20*idx}%`;
                // e.style.right = `${parent.right+5*idx}px`;
            }
           //list[idx].style.zIndex
        });

    }


    return {
        list: () => monologListElement,
        info: options => info(options),
        success: options => success(options),
        warning: options => warning(options),
        error: options => error(options)
    }
}
