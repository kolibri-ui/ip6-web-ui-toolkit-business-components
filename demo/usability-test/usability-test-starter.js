import { DemoSwitch } from "../switch/DemoSwitch.js";
import { Observable } from "../../src/Kolibri/docs/src/kolibri/observable.js";


/**
 * Neumorh Usability Test
 */
const neumorphIndeterminateSwitch = DemoSwitch(Observable(false), false, undefined, true, false, false);
document.getElementById("neumorph-switch-indeterminate").appendChild(neumorphIndeterminateSwitch);


const neumorphOnSwitch = DemoSwitch(Observable(false), false, true, false, false, false);
document.getElementById("neumorph-switch-on").appendChild(neumorphOnSwitch);

const neumorphkeyboardOnSwitch = DemoSwitch(Observable(false), false, true, false, false, false);
document.getElementById("neumorph-switch-on-keyboard").appendChild(neumorphkeyboardOnSwitch);

const neumorphshadowOnSwitch = DemoSwitch(Observable(false), false, true, false, false, false);
document.getElementById("neumorph-switch-shadow").appendChild(neumorphshadowOnSwitch);


/**
 * Slim Test
 */
const slimIndeterminateSwitch = DemoSwitch(Observable(false), true, undefined, true, false, false);
document.getElementById("slim-switch-indeterminate").appendChild(slimIndeterminateSwitch);

const slimOnSwitch = DemoSwitch(Observable(false), true, true, false, false, false);
document.getElementById("slim-switch-on").appendChild(slimOnSwitch);

const slimkeyboardOnSwitch = DemoSwitch(Observable(false), true, true, false, false, false);
document.getElementById("slim-switch-on-keyboard").appendChild(slimkeyboardOnSwitch);

const slimshadowOnSwitch = DemoSwitch(Observable(false), true, true, false, false, false);
document.getElementById("slim-switch-shadow").appendChild(slimshadowOnSwitch);


/**
 * Monolog Test
 */
