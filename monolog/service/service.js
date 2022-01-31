import {Monolog} from "../subProjectors/Monolog.js";

export {monologService}

/**
 * Monolog Service.
 */
const monologService = () => {

    let i = 0;

    /**
     *
     * @param {HTMLDivElement} monologList
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.message
     * @param {String} options.type
     * @param {Boolean} [options.sticky]
     * @param {Boolean} [options.attention]
     * @param {String} [options.codeError]
     */
    const notification = (monologList, options) => {
        options.title = options.title + " " + i;
        const notification = Monolog(options);
        monologList.appendChild(notification);
        checkStacking(monologList);

        //console.log(monologList.getBoundingClientRect());

        i++;
    }

    const checkStacking = monologList => {

        const infoType = monologList.querySelectorAll('.info');
        const successType = monologList.querySelectorAll('.success');

        if (successType.length > 2) {
            stacking(successType);
        }

    }

    const stacking = list => {

        const parentHeight = list[0].getBoundingClientRect().height;

        list.forEach((e, idx) => {

            if (idx > 0) {

                console.log(typeof idx);

                e.style.top = `-${parentHeight * idx +10}px`;
            }

        });

    }


    return {
        notification
    }
}