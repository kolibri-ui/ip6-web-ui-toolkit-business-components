import { projectDay } from "../../src/Kolibri/docs/src/examples/workday/simpleDayProjector.js"

import { DayController } from "../../src/Kolibri/docs/src/examples/workday/dayController.js"
import { MonologList } from "../../src/monolog/projector/MonologList.js";
import { WorkingHoursController } from "./controller.js";
import { Switch } from "../../src/switch/projector/Switch.js";
import { buttonElement } from "../util/buttonElement.js";

// closest to the using HTML is the only place where we depend on the HTML content
const workingHoursInput = document.getElementById("workingHoursInput");

const disabledSwitch  = document.getElementById("disabled-switch");
const readOnlySwitch  = document.getElementById("read-only-switch");
const requiredSwitch  = document.getElementById("required-switch");
const darkThemeSwitch = document.getElementById("dark-theme-switch");


const dayController = DayController();
const monolog       = MonologList();

const {
          disabled,
          readOnly,
          required,
          darkTheme,
          invalid
      } = WorkingHoursController(dayController, monolog, workingHoursInput);

const disabledControl  = Switch(disabled, {id: "checkDisabled", labelText: "Disabled", slim: true});
const readOnlyControl  = Switch(readOnly, {id: "checkReadOnly", labelText: "Read Only", slim: true});
const requiredControl  = Switch(required, {id: "checkRequired", labelText: "Required"});
const darkThemeControl = Switch(darkTheme, {id: "checkDarkTheme", labelText: "Dark Theme"});


workingHoursInput.append(...projectDay(dayController)); // projector pattern
document.getElementsByTagName('body')[0].append(monolog.list());

disabledSwitch.append(disabledControl);
readOnlySwitch.append(readOnlyControl);
requiredSwitch.append(requiredControl);
darkThemeSwitch.append(darkThemeControl);
