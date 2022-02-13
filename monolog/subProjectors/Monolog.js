import {Notification} from "./Notification.js";

export {Monolog}

/**
 * Creates a Monolog List on the given Position
 * @param {String} [position=top right]
 * @returns {{success: (function(*): void), warning: (function(*): void), list: (function(): HTMLDivElement), error: (function(*): void), info: (function(*): void)}}
 * @constructor
 */
const Monolog = (position = 'top right') => {
    const monologListElement = document.createElement('div');
    monologListElement.classList.add('monolog-list');

    const cssList = position.split(' ')
    cssList.forEach(c => monologListElement.classList.add(c));

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
        options.stack = checkStacking(monologListElement, options);
        const notification = Notification(options);
        monologListElement.appendChild(notification);
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
    const error = options => {
        options.type = 'error';

        // A Code-Error is always sticky
        (options.codeError) ? options.sticky = true : "";
        emit(options);
    }

    /**
     * Stack all Monologues of a certain type
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} [options.type]
     * @param {String} [options.stack]
     * @param {Boolean} [options.sticky]
     * @param {Boolean} [options.attention]
     * @param {String} [options.codeError]
     */
    const checkStacking = (monologList, options) => {

        const infoType = monologList.querySelectorAll('.info');
        const successType = monologList.querySelectorAll('.success');

        if (successType.length > 2) {
            stacking(successType);
        }

        return successType.length.toString();
    }

    const stacking = list => {
        //console.log(list.length);

        const parent = list[0].getBoundingClientRect();


        list.forEach((e, idx) => {

            list[0].style.position = 'absolute';
            list[0].style.zIndex = '100';


            if (idx > 0) {
                //console.log(typeof idx);
                e.style.position = 'absolute';
                e.style.zIndex = `${100 - idx}`;
                e.style.top = `${parent.top+5*idx}px`;
                // e.style.right = `${parent.right+5*idx}px`;
            }
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