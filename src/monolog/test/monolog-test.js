import {TestSuite} from "../../Kolibri/docs/src/kolibri/util/test.js";
import {MonologList} from "../projector/MonologList.js";
import {Monolog} from "../projector/Monolog.js";

const testSuite          = TestSuite("monolog");
const monologListElement = MonologList();

const options = {
    title    : undefined,
    message  : undefined,
    type     : undefined,
    stack    : undefined,
    sticky   : undefined,
    attention: undefined,
    codeError: undefined
}

/*** MonologList Tests ***/
testSuite.add("monolog-check-list-creation", assert => {
    const monologList = monologListElement.list();
    assert.isTrue(monologList !== undefined);
    assert.isTrue(typeof monologList === 'object');
    assert.isTrue(monologList.classList.contains("monolog-list"));
    assert.isTrue(monologList.classList.contains("top"));
    assert.isTrue(monologList.classList.contains("right"));

});

testSuite.add("stack-list-info-test", assert => {
    const monologList = monologListElement.list();
    const stackLists  = monologList.children;
    assert.isTrue(stackLists.length === 4);

    options.type   = 'info';
    options.sticky = true;

    monologListElement.info(options);
    monologListElement.info(options);
    monologListElement.info(options);

    const stackListInfo       = monologList.querySelector(".stack-list-info");
    const monologInfoElements = stackListInfo.querySelectorAll(".monolog.info");
    assert.isTrue(monologInfoElements.length === 3);

});

/*** MonologList Tests End ***/


/*** Monolog Tests ***/
testSuite.add("notification-info-test", assert => {
    options.type   = 'info';
    options.sticky = true;

    const monolog = Monolog(options);
    // monolog.querySelector('.monolog-info');
    assert.isTrue(monolog.classList.contains("info"));
});

testSuite.add("notification-success-test", assert => {
    options.type   = 'success';
    options.sticky = true;

    const notification = Monolog(options);
    //  notification.querySelector('.monolog-success');
    assert.isTrue(notification.classList.contains("success"));
});

testSuite.add("notification-warning-test", assert => {
    options.type   = 'warning';
    options.sticky = true;

    const notification = Monolog(options);
    // notification.querySelector('.monolog-info');
    assert.isTrue(notification.classList.contains("warning"));
});

testSuite.add("notification-error-test", assert => {
    options.type   = 'error';
    options.sticky = true;

    const notification = Monolog(options);
    // notification.querySelector('.monolog-info');
    assert.isTrue(notification.classList.contains("error"));
});

testSuite.add("notification-code-error-test", assert => {
    options.type   = 'code-error';
    options.sticky = true;

    const notification = Monolog(options);
    // notification.querySelector('.monolog-info');
    assert.isTrue(notification.classList.contains("code-error"));
});

/*** Monolog Tests End ***/

testSuite.run();
