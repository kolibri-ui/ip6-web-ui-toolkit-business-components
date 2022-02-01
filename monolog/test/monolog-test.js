import {TestSuite} from "../../Kolibri/docs/src/kolibri/util/test.js";
import {NotificationProjector} from "../subProjectors/Notification.js";
import {NotificationProjector} from "../subProjectors/Notification.js";
import {TestSuite} from "../../Kolibri/docs/src/kolibri/util/test.js";
import {Observable} from "../../observable/observable.js";


const testSuite = TestSuite("monolog");
const testObservable = Observable(false);


testSuite.add("switch-default-init-test", assert => {

   /* const defaultMonolog = Switch(testObservable, false, false, "test-id-default");
    const checkboxElement = defaultMonolog.querySelector('input');

    assert.is("test-id-default", checkboxElement.id);
    assert.is(false, checkboxElement.required);
    assert.is(false, checkboxElement.disabled);
    assert.is(false, checkboxElement.readOnly); */
});

testSuite.add("monolog-init-test", assert => {

    /*const slimSwitch = NotificationProjector(testObservable, false, false, "test-id-slim");
    const checkboxElement = slimSwitch.querySelector('input');

    assert.is("test-id-slim", checkboxElement.id);
    assert.is(false, checkboxElement.required);
    assert.is(false, checkboxElement.disabled);
    assert.is(false, checkboxElement.readOnly);*/
});


testSuite.add("test-id-creation", assert => {

/*    const defaultSwitch = Switch(testObservable, false, false);
    const checkboxElement = defaultSwitch.querySelector('input');

    const ire = /switch-([a-zA-Z0-9]+){9,12}/
    const carr = ire.exec(checkboxElement.id);

    assert.isTrue(carr.length >= 1);*/
});


testSuite.run();