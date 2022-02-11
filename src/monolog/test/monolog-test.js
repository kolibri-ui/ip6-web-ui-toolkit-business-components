import {TestSuite} from "../../Kolibri/docs/src/kolibri/util/test.js";
import {Observable} from "../../Kolibri/docs/src/kolibri/observable.js";


const testSuite = TestSuite("monolog");
const testObservable = Observable(false);


testSuite.add("switch-default-init-test", assert => {
});

testSuite.add("monolog-init-test", assert => {
});

testSuite.add("test-id-creation", assert => {
});


testSuite.run();
