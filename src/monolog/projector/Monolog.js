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
                <div class="close-all-stack"></div>
             </div>
             
             <div class="stack-list-success">
                <div class="stack-number success-number"></div>
                <div class="close-all-stack"></div>
             </div>
             
             <div class="stack-list-warning">
                <div class="stack-number warning-number"></div>
                <div class="close-all-stack"></div>
             </div>
             
             <div class="stack-list-error">
                <div class="stack-number error-number"></div>
                <div class="close-all-stack"></div>
             </div>
        </div>
    `);

    /** @type {HTMLDivElement} */ const monologListDiv = elements[0];

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


    /*    const monologListDiv = document.createElement('div');
        monologListDiv.classList.add('monolog-list', 'top', 'right');

        let stackListInfo   = document.createElement('div');
        const stackListInfoNumber = document.createElement('div');
        const stackListInfoCloseAll = document.createElement('div');

        let stackListSuccess   = document.createElement('div');
        const stackListSuccessNumber = document.createElement('div');
        const stackListSuccessCloseAll = document.createElement('div');

        let stackListWarning   = document.createElement('div');
        const stackListWarningNumber = document.createElement('div');
        const stackListWarningCloseAll = document.createElement('div');

        let stackListError   = document.createElement('div');
        const stackListErrorNumber = document.createElement('div');
        const stackListErrorCloseAll = document.createElement('div');*/

    let notification;

    let infoType;
    let successType;
    let warningType;
    let errorType;

    const closeAllText = "Close all";

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
                // stackListInfo.classList.add('stack-list-' + type);
                stackListInfo.appendChild(notification);
                monologListDiv.appendChild(stackListInfo);

                if (options.sticky) {
                    stackListInfoNumber.style.display   = 'grid';
                    stackListInfoCloseAll.style.display = 'grid';
                    options.stack                 = checkStacking(stackListInfo);
                    //stackListInfoNumber.classList.add('stack-number', type + '-number');
                    stackListInfoNumber.innerText = options.stack;
                    if (stackListInfoNumber.innerText > 1) {
                        stackListInfo.insertBefore(stackListInfoNumber, stackListInfo.firstChild);
                    }
                }

                break;
            case 'success':
                //stackListSuccess.classList.add('stack-list-' + type);
                stackListSuccess.appendChild(notification);
                monologListDiv.appendChild(stackListSuccess);

                if (options.sticky) {
                    stackListSuccessNumber.style.display   = 'grid';
                    stackListSuccessCloseAll.style.display = 'grid';
                    options.stack                    = checkStacking(stackListSuccess);
                    //stackListSuccessNumber.classList.add('stack-number', type + '-number');
                    stackListSuccessNumber.innerText = options.stack;
                    if (stackListSuccessNumber.innerText > 1) {
                        stackListSuccess.insertBefore(stackListSuccessNumber, stackListSuccess.firstChild);
                    }
                }
                break;
            case 'warning':
                //stackListWarning.classList.add('stack-list-' + type);
                stackListWarning.appendChild(notification);
                monologListDiv.appendChild(stackListWarning);

                if (options.sticky) {
                    stackListWarningNumber.style.display   = 'grid';
                    stackListWarningCloseAll.style.display = 'grid';
                    options.stack                    = checkStacking(stackListWarning);
                    //stackListWarningNumber.classList.add('stack-number', type + '-number');
                    stackListWarningNumber.innerText = options.stack;
                    if (stackListWarningNumber.innerText > 1) {
                        stackListWarning.insertBefore(stackListWarningNumber, stackListWarning.firstChild);
                    }
                }
                break;
            case 'error':
                //stackListError.classList.add('stack-list-' + type);
                stackListError.appendChild(notification);
                monologListDiv.appendChild(stackListError);

                if (options.sticky) {
                    stackListErrorNumber.style.display   = 'grid';
                    stackListErrorCloseAll.style.display = 'grid';
                    options.stack                  = checkStacking(stackListError);
                    //stackListErrorNumber.classList.add('stack-number', type + '-number');
                    stackListErrorNumber.innerText = options.stack;
                    if (stackListErrorNumber.innerText > 1) {
                        stackListError.insertBefore(stackListErrorNumber, stackListError.firstChild);
                    }
                }
                break;

        }

        infoType    = stackListInfo.querySelectorAll('.monolog.info');
        successType = stackListSuccess.querySelectorAll('.monolog.success');
        warningType = stackListWarning.querySelectorAll('.monolog.warning');
        errorType   = stackListError.querySelectorAll('.monolog.code-error, .monolog.error');
    }

    /**
     * Stack all Monologues of a certain type
     * @param {Object} monologList
     */
    const checkStacking = (monologList) => {
        stackListInfoCloseAll.remove();
        stackListSuccessCloseAll.remove();
        stackListWarningCloseAll.remove();
        stackListErrorCloseAll.remove();

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
        } else if (warningType.length >= 1) {
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
            list[0].style.zIndex    = '100';
            list[0].style.marginTop = `0`;
            list[0].style.opacity   = '100%';
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

    stackListInfoNumber.onmouseover = () => {
        stackListInfoNumber.remove();

       // stackListInfoCloseAll.classList.add('close-all-stack');
        stackListInfoCloseAll.innerText = closeAllText;
        stackListInfo.insertBefore(stackListInfoCloseAll, stackListInfo.firstChild);
    }

    stackListInfoCloseAll.onmouseout = () => {
        stackListInfoCloseAll.remove();
        stackListInfo.insertBefore(stackListInfoNumber, stackListInfo.firstChild);
    }

    stackListSuccessNumber.onmouseover = () => {
        stackListSuccessNumber.remove();

     //   stackListSuccessCloseAll.classList.add('close-all-stack');
        stackListSuccessCloseAll.innerText = closeAllText;
        stackListSuccess.insertBefore(stackListSuccessCloseAll, stackListSuccess.firstChild);
    }

    stackListSuccessCloseAll.onmouseout = () => {
        stackListSuccessCloseAll.remove();
        stackListSuccess.insertBefore(stackListSuccessNumber, stackListSuccess.firstChild);
    }

    stackListWarningNumber.onmouseover = () => {
        stackListWarningNumber.remove();

    //    stackListWarningCloseAll.classList.add('close-all-stack');
        stackListWarningCloseAll.innerText = closeAllText;
        stackListWarning.insertBefore(stackListWarningCloseAll, stackListWarning.firstChild);
    }

    stackListWarningCloseAll.onmouseout = () => {
        stackListWarningCloseAll.remove();
        stackListWarning.insertBefore(stackListWarningNumber, stackListWarning.firstChild);
    }

    stackListErrorNumber.onmouseover = () => {
        stackListErrorNumber.remove();

     //   stackListErrorCloseAll.classList.add('close-all-stack');
        stackListErrorCloseAll.innerText = closeAllText;
        stackListError.insertBefore(stackListErrorCloseAll, stackListError.firstChild);
    }

    stackListErrorCloseAll.onmouseout = () => {
        stackListErrorCloseAll.remove();
        stackListError.insertBefore(stackListErrorNumber, stackListError.firstChild);
    }


    stackListInfoCloseAll.onclick = () => {
        console.log(infoType);
        infoType.forEach((e) => {
            e.remove();
        });
        stackListInfoCloseAll.remove();
    }

    stackListSuccessCloseAll.onclick = () => {
        console.log(successType);
        successType.forEach((e) => {
            e.remove();
        });
        stackListSuccessCloseAll.remove();
    }

    stackListWarningCloseAll.onclick = () => {
        console.log(warningType);
        warningType.forEach((e) => {
            e.remove();
        });
        stackListWarningCloseAll.remove();
    }

    stackListErrorCloseAll.onclick = () => {
        console.log(errorType);
        errorType.forEach((e) => {
            e.remove();
        });
        stackListErrorCloseAll.remove();
    }


    return {
        list   : () => monologListDiv,
        info   : options => info(options),
        success: options => success(options),
        warning: options => warning(options),
        error  : options => error(options)
    }
}
