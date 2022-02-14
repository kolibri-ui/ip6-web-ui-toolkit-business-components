import {TestSuite} from "../../Kolibri/docs/src/kolibri/util/test.js";
import {Monolog} from "../projector/Monolog.js";


const testSuite = TestSuite("monolog");
const monolog   = Monolog();

testSuite.add("monolog-check-list-creation", assert => {
    const monologList = monolog.list();
    assert.isTrue(monologList !== undefined);
    assert.isTrue(typeof monologList === 'object');
    assert.isTrue(monologList.classList.contains("monolog-list"));
    assert.isTrue(monologList.classList.contains("top"));
    assert.isTrue(monologList.classList.contains("right"));

});

testSuite.add("monolog-info-test", assert => {
});
testSuite.add("monolog-success-test", assert => {
});
testSuite.add("monolog-warning-test", assert => {
});
testSuite.add("monolog-error-test", assert => {
});
testSuite.add("monolog-code-error-test", assert => {
});


testSuite.run();
