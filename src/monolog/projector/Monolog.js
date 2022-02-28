import {Notification} from "./Notification.js";
import {dom} from "../../Kolibri/docs/src/kolibri/util/dom.js";

export {Monolog}

/**
 * Creates a Monolog List on the given Position
 * @returns {{success: (function(*=): void), warning: (function(*=): void), list: (function(): HTMLDivElement), error: (function(*=): void), info: (function(*=): void)}}
 * @constructor
 */
const Monolog = () => {

    const elements = dom(`
        <div class="monolog-list top right" data-type="monolog-list">
            <div class="stack-list-info">
                <div class="stack-number info-number"></div>
                <div class="close-all-info"></div>
             </div>
             
             <div class="stack-list-success">
                <div class="stack-number success-number"></div>
                <div class="close-all-success"></div>
             </div>
             
             <div class="stack-list-warning">
                <div class="stack-number warning-number"></div>
                <div class="close-all-warning"></div>
             </div>
             
             <div class="stack-list-error">
                <div class="stack-number error-number"></div>
                <div class="close-all-error"></div>
             </div>
        </div>
    `);

    /** @type {HTMLDivElement} */ const monologListDiv           = elements[0];

    /** @type {HTMLDivElement} */ const stackListInfo            = monologListDiv.children[0];
    /** @type {HTMLDivElement} */ const stackListInfoNumber      = stackListInfo.children[0];
    /** @type {HTMLDivElement} */ const stackListInfoCloseAll    = stackListInfo.children[1];

    /** @type {HTMLDivElement} */ const stackListSuccess         = monologListDiv.children[1];
    /** @type {HTMLDivElement} */ const stackListSuccessNumber   = stackListSuccess.children[0];
    /** @type {HTMLDivElement} */ const stackListSuccessCloseAll = stackListSuccess.children[1];

    /** @type {HTMLDivElement} */ const stackListWarning         = monologListDiv.children[2];
    /** @type {HTMLDivElement} */ const stackListWarningNumber   = stackListWarning.children[0];
    /** @type {HTMLDivElement} */ const stackListWarningCloseAll = stackListWarning.children[1];

    /** @type {HTMLDivElement} */ const stackListError           = monologListDiv.children[3];
    /** @type {HTMLDivElement} */ const stackListErrorNumber     = stackListError.children[0];
    /** @type {HTMLDivElement} */ const stackListErrorCloseAll   = stackListError.children[1];


    const monologListElement = document.createElement('div');
    monologListElement.classList.add('monolog-list', 'top', 'right');

    let stackListElementInfo   = document.createElement('div');
    const stackNumberLabelInfo = document.createElement('div');
    const closeAllElementInfo = document.createElement('div');

    let stackListElementSuccess   = document.createElement('div');
    const stackNumberLabelSuccess = document.createElement('div');
    const closeAllElementSuccess = document.createElement('div');

    let stackListElementWarning   = document.createElement('div');
    const stackNumberLabelWarning = document.createElement('div');
    const closeAllElementWarning = document.createElement('div');

    let stackListElementError   = document.createElement('div');
    const stackNumberLabelError = document.createElement('div');
    const closeAllElementError = document.createElement('div');

    let notification;

    let infoType;
    let successType;
    let warningType;
    let errorType;

    /**
     * Finally emits the Monolog
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} options.type
     * @param {String} [options.stack]
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
     * @param {Boolean} [options.sticky]
     * @param {Boolean} [options.attention]
     * @param {String} [options.codeError]
     */
    const error   = options => {
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
     * @param {Boolean} [options.sticky]
     * @param {Boolean} [options.attention]
     * @param {String} [options.codeError]
     */
    const stack = options => {
        const type = options.type;

        switch (type) {
            case 'info':
                stackListElementInfo.classList.add('stack-list-' + type);
                stackListElementInfo.appendChild(notification);
                monologListElement.appendChild(stackListElementInfo);

                if (options.sticky) {
                    options.stack = checkStacking(stackListElementInfo);
                    stackNumberLabelInfo.classList.add('stack-number', type + '-number');
                    stackNumberLabelInfo.innerText = options.stack;
                    if (stackNumberLabelInfo.innerText > 1) {
                        stackListElementInfo.insertBefore(stackNumberLabelInfo, stackListElementInfo.firstChild);
                    }
                }
                break;
            case 'success':
                stackListElementSuccess.classList.add('stack-list-' + type);
                stackListElementSuccess.appendChild(notification);
                monologListElement.appendChild(stackListElementSuccess);

                if (options.sticky) {
                    options.stack = checkStacking(stackListElementSuccess);
                    stackNumberLabelSuccess.classList.add('stack-number', type + '-number');
                    stackNumberLabelSuccess.innerText = options.stack;
                    if (stackNumberLabelSuccess.innerText > 1) {
                        stackListElementSuccess.insertBefore(stackNumberLabelSuccess, stackListElementSuccess.firstChild);
                    }
                }
                break;
            case 'warning':
                stackListElementWarning.classList.add('stack-list-' + type);
                stackListElementWarning.appendChild(notification);
                monologListElement.appendChild(stackListElementWarning);

                if (options.sticky) {
                    options.stack = checkStacking(stackListElementWarning);
                    stackNumberLabelWarning.classList.add('stack-number', type + '-number');
                    stackNumberLabelWarning.innerText = options.stack;
                    if (stackNumberLabelWarning.innerText > 1) {
                        stackListElementWarning.insertBefore(stackNumberLabelWarning, stackListElementWarning.firstChild);
                    }
                }
                break;
            case 'error':
                stackListElementError.classList.add('stack-list-' + type);
                stackListElementError.appendChild(notification);
                monologListElement.appendChild(stackListElementError);

                if (options.sticky) {
                    options.stack = checkStacking(stackListElementError);
                    stackNumberLabelError.classList.add('stack-number', type + '-number');
                    stackNumberLabelError.innerText = options.stack;
                    if (stackNumberLabelError.innerText > 1) {
                        stackListElementError.insertBefore(stackNumberLabelError, stackListElementError.firstChild);
                    }
                }
                break;

        }

        infoType    = stackListElementInfo.querySelectorAll('.monolog.info');
        successType = stackListElementSuccess.querySelectorAll('.monolog.success');
        warningType = stackListElementWarning.querySelectorAll('.monolog.warning');
        errorType   = stackListElementError.querySelectorAll('.monolog.code-error, .monolog.error');
    }

    /**
     * Stack all Monologues of a certain type
     * @param {Object} monologList
     */
    const checkStacking = (monologList) => {
        closeAllElementInfo.remove();
        closeAllElementSuccess.remove();
        closeAllElementWarning.remove();
        closeAllElementError.remove();

        infoType    = monologList.querySelectorAll('.monolog.info');
        successType = monologList.querySelectorAll('.monolog.success');
        warningType = monologList.querySelectorAll('.monolog.warning');
        errorType   = monologList.querySelectorAll('.monolog.code-error, .monolog.error');

        if (infoType.length >= 1) {
            stacking(infoType);
            return infoType.length.toString();
        } else if (successType.length >= 1) {
            stacking(successType);
            return successType.length.toString();
        } else if(warningType.length >= 1) {
            stacking(warningType);
            return warningType.length.toString();
        } else if (errorType.length >= 1) {
            stacking(errorType);
            return errorType.length.toString();
        }

    }

    const stacking = list => {

        list.forEach((e, idx) => {

            //list[0].style.position = 'absolute';
            list[0].style.zIndex  = '100';
            list[0].style.marginTop     = `0`;
            list[0].style.opacity = '100%';
            //options.stackNumber = list[0].style.zIndex;

            if (idx > 0) {
                //console.log(typeof idx);
                //e.style.position = 'absolute';
                e.style.zIndex = `${100 - idx}`;

                //console.log( list[0].style.zIndex);
                e.style.marginTop = `-60px`;

                //e.style.opacity  = `${100 - 20 * idx}%`;
                // e.style.right = `${parent.right+5*idx}px`;
            }
            //list[idx].style.zIndex
        });

    }

    stackNumberLabelInfo.onmouseover = () => {
        stackNumberLabelInfo.remove();

        closeAllElementInfo.classList.add('close-all-stack');
        closeAllElementInfo.innerText = "Close all";
        stackListElementInfo.insertBefore(closeAllElementInfo, stackListElementInfo.firstChild);
    }

    stackNumberLabelSuccess.onmouseover = () => {
        stackNumberLabelSuccess.remove();

        closeAllElementSuccess.classList.add('close-all-stack');
        closeAllElementSuccess.innerText = "Close all";
        stackListElementSuccess.insertBefore(closeAllElementSuccess, stackListElementSuccess.firstChild);
    }

    stackNumberLabelWarning.onmouseover = () => {
        stackNumberLabelWarning.remove();

        closeAllElementWarning.classList.add('close-all-stack');
        closeAllElementWarning.innerText = "Close all";
        stackListElementWarning.insertBefore(closeAllElementWarning, stackListElementWarning.firstChild);
    }

    stackNumberLabelError.onmouseover = () => {
        stackNumberLabelError.remove();

        closeAllElementError.classList.add('close-all-stack');
        closeAllElementError.innerText = "Close all";
        stackListElementError.insertBefore(closeAllElementError, stackListElementError.firstChild);
    }


    closeAllElementInfo.onclick = () => {
        console.log(infoType);
        infoType.forEach((e)=> {
            e.remove();
        });
        closeAllElementInfo.remove();
    }

    closeAllElementSuccess.onclick = () => {
        console.log(successType);
        successType.forEach((e)=> {
            e.remove();
        });
        closeAllElementSuccess.remove();
    }

    closeAllElementWarning.onclick = () => {
        console.log(warningType);
        warningType.forEach((e)=> {
            e.remove();
        });
        closeAllElementWarning.remove();
    }

    closeAllElementError.onclick = () => {
        console.log(errorType);
        errorType.forEach((e)=> {
            e.remove();
        });
        closeAllElementError.remove();
    }


    return {
        list   : () => monologListElement,
        info   : options => info(options),
        success: options => success(options),
        warning: options => warning(options),
        error  : options => error(options)
    }
}
