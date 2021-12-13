export {Observable, ObservableList}

/**
 * Observable module
 * @module Observable *
 * @typedef {function(value): object} Observable
 */

/**
 * Manages the observability of a value and informs all listener as soon as the calue gets changed
 * @param {*} value - The value this Observable should listen to and notify whenever it changes
 * @returns {{getValue: (function(): *), onChange: onChange, setValue: setValue}}
 * @constructor
 */
const Observable = value => {
    const listeners = []
    return {
        onChange: callback => {
            listeners.push(callback)
            callback(value, value)
        },
        getValue: () => value,
        setValue: newValue => {
            if (value === newValue) return;
            const oldValue = value
            value = newValue
            listeners.forEach(callback => callback(value, oldValue))
        }
    }
}

/**
 *
 * @param list
 * @returns {{
 * add: (function(*): *),
 * removeDeleteListener: ((function(*): void)|*),
 * onDel: (function(*): number),
 * count: (function(): *),
 * del: del,
 * countIf: (function(*): *),
 * onAdd: (function(*): number)
 * }}
 * @constructor
 */
const ObservableList = list => {
    const addListeners = []
    const delListeners = []
    const removeAt = array => index => array.splice(index, 1)
    const removeItem = array => item => {
        const i = array.indexOf(item);
        if (i >= 0) removeAt(array)(i);
    }
    const listRemoveItem = removeItem(list)
    const delListenersRemove = removeAt(delListeners)
    return {
        onAdd: listener => addListeners.push(listener),
        onDel: listener => delListeners.push(listener),
        add: item => {
            list.push(item)
            addListeners.forEach(listener => listener(item))
            return item
        },
        del: item => {
            listRemoveItem(item)
            const safeIterate = [...delListeners]
            safeIterate.forEach((listener, index) => listener(item, () => delListenersRemove(index)))
        },
        removeDeleteListener: removeItem(delListeners),
        count: () => list.length,
        countIf: pred => list.reduce((sum, item) => pred(item) ? sum + 1 : sum, 0)
    }
}