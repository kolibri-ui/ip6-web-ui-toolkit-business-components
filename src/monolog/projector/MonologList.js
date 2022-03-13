import {Monolog} from "./Monolog.js";
import {dom} from "../../Kolibri/docs/src/kolibri/util/dom.js";

export {MonologList}

/**
 * Creates a MonologList List on the given Position
 * @returns {{success: (function(*=): void), warning: (function(*=): void), list: (function(): HTMLDivElement), error: (function(*=): void), info: (function(*=): void)}}
 * @constructor
 */
const MonologList = () => {

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

    let notification;

    let infoType;
    let successType;
    let warningType;
    let errorType;

    const closeAllText = "Close all";

    /**
     * Finally emits the MonologList
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
        notification = Monolog(options);
        stack(options);
    }

    /**
     * Displays an info MonologList
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
     * Displays a success MonologList
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
     * Displays a warning MonologList
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
     * Displays an error MonologList
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
     * Displays an error MonologList
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
                stackListInfo.appendChild(notification);
                monologListDiv.appendChild(stackListInfo);

                if (options.sticky) {
                    stackListInfoNumber.style.display   = 'grid';
                    stackListInfoCloseAll.style.display = 'grid';
                    options.stack                 = checkStacking(stackListInfo);
                    stackListInfoNumber.innerText = options.stack;
                    if (stackListInfoNumber.innerText > 1) {
                        stackListInfo.insertBefore(stackListInfoNumber, stackListInfo.firstChild);
                    }
                }

                break;
            case 'success':
                stackListSuccess.appendChild(notification);
                monologListDiv.appendChild(stackListSuccess);

                if (options.sticky) {
                    stackListSuccessNumber.style.display   = 'grid';
                    stackListSuccessCloseAll.style.display = 'grid';
                    options.stack                    = checkStacking(stackListSuccess);
                    stackListSuccessNumber.innerText = options.stack;
                    if (stackListSuccessNumber.innerText > 1) {
                        stackListSuccess.insertBefore(stackListSuccessNumber, stackListSuccess.firstChild);
                    }
                }
                break;
            case 'warning':
                stackListWarning.appendChild(notification);
                monologListDiv.appendChild(stackListWarning);

                if (options.sticky) {
                    stackListWarningNumber.style.display   = 'grid';
                    stackListWarningCloseAll.style.display = 'grid';
                    options.stack                    = checkStacking(stackListWarning);
                    stackListWarningNumber.innerText = options.stack;
                    if (stackListWarningNumber.innerText > 1) {
                        stackListWarning.insertBefore(stackListWarningNumber, stackListWarning.firstChild);
                    }
                }
                break;
            case 'error':
                stackListError.appendChild(notification);
                monologListDiv.appendChild(stackListError);

                if (options.sticky) {
                    stackListErrorNumber.style.display   = 'grid';
                    stackListErrorCloseAll.style.display = 'grid';
                    options.stack                  = checkStacking(stackListError);
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
            list[0].style.zIndex    = '100';
            list[0].style.marginTop = `0`;
            list[0].style.opacity   = '100%';

            if (idx > 0) {
                e.style.zIndex = `${100 - idx}`;
                e.style.marginTop = `-60px`;
            }
            //list[idx].style.zIndex
        });

    }

    stackListInfoNumber.onmouseover = () => {
        stackListInfoNumber.remove();
        stackListInfoCloseAll.innerText = closeAllText;
        stackListInfo.insertBefore(stackListInfoCloseAll, stackListInfo.firstChild);
    }

    stackListInfoCloseAll.onmouseout = () => {
        stackListInfoCloseAll.remove();
        stackListInfo.insertBefore(stackListInfoNumber, stackListInfo.firstChild);
    }

    stackListSuccessNumber.onmouseover = () => {
        stackListSuccessNumber.remove();
        stackListSuccessCloseAll.innerText = closeAllText;
        stackListSuccess.insertBefore(stackListSuccessCloseAll, stackListSuccess.firstChild);
    }

    stackListSuccessCloseAll.onmouseout = () => {
        stackListSuccessCloseAll.remove();
        stackListSuccess.insertBefore(stackListSuccessNumber, stackListSuccess.firstChild);
    }

    stackListWarningNumber.onmouseover = () => {
        stackListWarningNumber.remove();
        stackListWarningCloseAll.innerText = closeAllText;
        stackListWarning.insertBefore(stackListWarningCloseAll, stackListWarning.firstChild);
    }

    stackListWarningCloseAll.onmouseout = () => {
        stackListWarningCloseAll.remove();
        stackListWarning.insertBefore(stackListWarningNumber, stackListWarning.firstChild);
    }

    stackListErrorNumber.onmouseover = () => {
        stackListErrorNumber.remove();
        stackListErrorCloseAll.innerText = closeAllText;
        stackListError.insertBefore(stackListErrorCloseAll, stackListError.firstChild);
    }

    stackListErrorCloseAll.onmouseout = () => {
        stackListErrorCloseAll.remove();
        stackListError.insertBefore(stackListErrorNumber, stackListError.firstChild);
    }


    stackListInfoCloseAll.onclick = () => {
        infoType.forEach((e) => {
            e.remove();
        });
        stackListInfoCloseAll.remove();
    }

    stackListSuccessCloseAll.onclick = () => {
        successType.forEach((e) => {
            e.remove();
        });
        stackListSuccessCloseAll.remove();
    }

    stackListWarningCloseAll.onclick = () => {
        warningType.forEach((e) => {
            e.remove();
        });
        stackListWarningCloseAll.remove();
    }

    stackListErrorCloseAll.onclick = () => {
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
