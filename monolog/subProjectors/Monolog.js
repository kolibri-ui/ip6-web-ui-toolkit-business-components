import {Notification} from "./Notification.js";

export {Monolog}

/**
 * Creates a Monolog List on the given Position
 * @param position
 * @returns {{success: (function(*): void), warning: (function(*): void), list: (function(): HTMLDivElement), error: (function(*): void), info: (function(*): void)}}
 * @constructor
 */
const Monolog = (position = 'top right') => {
    const monologListElement = document.createElement('div');
    monologListElement.classList.add('monolog-list');

    const cssList = position.split(' ')
    cssList.forEach(c => monologListElement.classList.add(c));


    const emit = options => {
        const notification = Notification(options);
        monologListElement.appendChild(notification);
    }

    const info = options => {
        options.type = 'info';
        emit(options);
    }

    const success = options => {
        options.type = 'success';
        emit(options);
    }

    const warning = options => {
        options.type = 'warning';
        emit(options);
    }

    const error = options => {
        options.type = 'error';
        emit(options);
    }


    return {
        list: () => monologListElement,
        info: options => info(options),
        success: options => success(options),
        warning: options => warning(options),
        error: options => error(options)
    }
}