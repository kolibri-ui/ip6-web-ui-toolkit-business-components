import {TestSuite} from "../../Kolibri/docs/src/kolibri/util/test.js";
import {MonologList} from "../projector/MonologList.js";
import {Monolog} from "../projector/Monolog.js";

const testSuite      = TestSuite("monolog");
const monolog        = MonologList();

const options        = {
    title    : undefined,
    message  : undefined,
    type     : undefined,
    stack    : undefined,
    sticky   : undefined,
    attention: undefined,
    codeError: undefined
}

testSuite.add("monolog-check-list-creation", assert => {
    const monologList = monolog.list();
    assert.isTrue(monologList !== undefined);
    assert.isTrue(typeof monologList === 'object');
    assert.isTrue(monologList.classList.contains("monolog-list"));
    assert.isTrue(monologList.classList.contains("top"));
    assert.isTrue(monologList.classList.contains("right"));

});

testSuite.add("notification-info-test", assert => {
    options.type    = 'info';
    options.sticky  = true;

    const notification = Monolog(options);
    notification.querySelector('.monolog-info');
    assert.isTrue(notification.classList.contains("info"));
});

testSuite.add("notification-success-test", assert => {
    options.type    = 'success';
    options.sticky  = true;

    const notification = Monolog(options);
    notification.querySelector('.monolog-info');
    assert.isTrue(notification.classList.contains("success"));
});

testSuite.add("notification-warning-test", assert => {
    options.type    = 'warning';
    options.sticky  = true;

    const notification = Monolog(options);
    notification.querySelector('.monolog-info');
    assert.isTrue(notification.classList.contains("warning"));
});

testSuite.add("notification-error-test", assert => {
    options.type    = 'error';
    options.sticky  = true;

    const notification = Monolog(options);
    notification.querySelector('.monolog-info');
    assert.isTrue(notification.classList.contains("error"));
});

testSuite.add("notification-code-error-test", assert => {
    options.type    = 'code-error';
    options.sticky  = true;

    const notification = Monolog(options);
    notification.querySelector('.monolog-info');
    assert.isTrue(notification.classList.contains("code-error"));
});

testSuite.run();
