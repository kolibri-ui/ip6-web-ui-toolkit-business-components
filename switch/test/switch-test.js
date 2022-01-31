import {TestSuite} from "../../Kolibri/docs/src/kolibri/util/test.js";
import {SlimSwitch} from "../subProjectors/SlimSwitch.js";
import {Observable} from "../../observable/observable.js";
import {Switch} from "../subProjectors/Switch.js";


const testSuite = TestSuite("switch");
const testObservable = Observable(false);

/**
 * Test instantiation of default Switch
 */
testSuite.add("switch-default-init-test", assert => {

    const defaultSwitch = Switch(testObservable, false, false, "test-id-default");
    const checkboxElement = defaultSwitch.querySelector('input');

    assert.is("test-id-default", checkboxElement.id);
    assert.is(false, checkboxElement.required);
    assert.is(false, checkboxElement.disabled);
    assert.is(false, checkboxElement.readOnly);
});

/**
 * Test instantiation of Slim design
 */
testSuite.add("switch-slim-init-test", assert => {

    const slimSwitch = SlimSwitch(testObservable, false, false, "test-id-slim");
    const checkboxElement = slimSwitch.querySelector('input');

    assert.is("test-id-slim", checkboxElement.id);
    assert.is(false, checkboxElement.required);
    assert.is(false, checkboxElement.disabled);
    assert.is(false, checkboxElement.readOnly);
});

/**
 * Test creation of ID
 */
testSuite.add("test-id-creation", assert => {

    const defaultSwitch = Switch(testObservable, false, false);
    const checkboxElement = defaultSwitch.querySelector('input');

    const ire = /switch-([a-zA-Z0-9]+){9,12}/

    assert.isTrue(ire.test("switch-89bitdjyujh"))
    assert.isTrue(checkboxElement.id.length === 19);
});


testSuite.run();