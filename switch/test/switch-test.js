import {TestSuite} from "../../Kolibri/docs/src/kolibri/util/test.js";
import {Observable} from "../../observable/observable.js";
import {Switch} from "../subProjectors/Switch.js";


const testSuite = TestSuite("switch");
const testObservable = Observable(false);
const options = {
    name: undefined,
    id: undefined,
    state: undefined,
    threeState: undefined,
    slim: undefined
}

/**
 * Test instantiation of default Switch
 */
testSuite.add("switch-default-init-test", assert => {

    options.id = "test-id-default";

    const defaultSwitch = Switch(testObservable, options);
    const checkboxElement = defaultSwitch.querySelector('input');

    assert.is(options.id, checkboxElement.id);
    assert.is(false, checkboxElement.required);
    assert.is(false, checkboxElement.disabled);
    assert.is(false, checkboxElement.readOnly);
});

/**
 * Test instantiation of Slim design
 */
testSuite.add("switch-slim-init-test", assert => {

    options.id = "test-id-slim";
    options.slim = true;

    const slimSwitch = Switch(testObservable, options);
    const checkboxElement = slimSwitch.querySelector('input');

    assert.is(options.id, checkboxElement.id);
    assert.is(false, checkboxElement.required);
    assert.is(false, checkboxElement.disabled);
    assert.is(false, checkboxElement.readOnly);
});

/**
 * Test creation of ID
 */
testSuite.add("test-id-creation", assert => {

    options.id = undefined;

    const defaultSwitch = Switch(testObservable, options);
    const checkboxElement = defaultSwitch.querySelector('input');

    const ire = /switch-([a-zA-Z0-9]+){12}/;
    assert.isTrue(ire.test("switch-89bitdjyujhp"));

    assert.is(checkboxElement.id.length, 19)

});

/**
 * Test if the readOnly Property gets changed
 */
testSuite.add("test-readonly-property-change", assert => {

    const defaultSwitch = Switch(testObservable, options);
    const checkboxElement = defaultSwitch.querySelector('input');

    assert.is(checkboxElement.readOnly, false);
    checkboxElement.readOnly = true;
    assert.is(checkboxElement.readOnly, true);

});

/**
 * Test if the disabled Property gets changed
 */
testSuite.add("test-disabled-property-change", assert => {

    const defaultSwitch = Switch(testObservable, options);
    const checkboxElement = defaultSwitch.querySelector('input');

    assert.is(checkboxElement.disabled, false);
    checkboxElement.disabled = true;
    assert.is(checkboxElement.disabled, true);

});

/**
 * Test if the required Property gets changed
 */
testSuite.add("test-required-property-change", assert => {

    const defaultSwitch = Switch(testObservable, options);
    const checkboxElement = defaultSwitch.querySelector('input');

    assert.is(checkboxElement.required, false);
    checkboxElement.required = true;
    assert.is(checkboxElement.required, true);

});

/**
 * Test if on click, the value gets changed
 */
testSuite.add("test-set-value-to-on", assert => {
    options.threeState = undefined;
    const defaultSwitch = Switch(testObservable, options);

    assert.is(testObservable.getValue(), false);
    defaultSwitch.click();
    assert.is(testObservable.getValue(), true);
});


testSuite.run();