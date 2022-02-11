import {total} from "../src/Kolibri/docs/src/kolibri/util/test.js";
import {versionInfo} from "../src/Kolibri/docs/src/kolibri/version.js";

import '../src/switch/test/switch-test.js';
import '../src/monolog/test/monolog-test.js';

total.onChange(value => document.getElementById('grossTotal').textContent = "" + value + " tests done.")

document.querySelector("footer").textContent = "Built with Kolibri " + versionInfo;
