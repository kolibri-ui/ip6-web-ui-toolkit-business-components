import {Notification} from "../subProjectors/Notification.js";

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
        const notification = Notification(options);
        monologList.appendChild(notification);
        checkStacking(monologList);

        //console.log(monologList.getBoundingClientRect());

        i++;
    }

    const checkStacking = monologList => {

        const infoType = monologList.querySelectorAll('.info');
        const successType = monologList.querySelectorAll('.success');

        if (successType.length > 2) {
            //stacking(successType);
        }

    }

    const stacking = list => {


        const parent = list[0].getBoundingClientRect();


        list.forEach((e, idx) => {

            list[0].style.position = 'absolute';
            list[0].style.zIndex = '100';


            if (idx > 0) {

                console.log(typeof idx);
                e.style.position = 'absolute';
                e.style.zIndex = `${100 - idx}`;
                e.style.top = `${parent.top}px`;
                e.style.right = `${parent.right}px`;
            }
        });

    }


    return {
        notification
    }
}