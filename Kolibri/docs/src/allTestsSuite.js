
import { total }      from "./kolibri/util/test.js";
import { versionInfo} from "./kolibri/version.js";

import '../src/examples/allExampleTestsSuite.js';
import '../src/kolibri/allKolibriTestsSuite.js';
import '../../../test/switch-test.js';
import '../../../test/monolog-test.js';

total.onChange( value => document.getElementById('grossTotal').textContent = "" + value + " tests done.")

document.querySelector("footer").textContent = "Built with Kolibri " + versionInfo;
