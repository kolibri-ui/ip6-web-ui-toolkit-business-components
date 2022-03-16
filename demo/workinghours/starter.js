import { projectDay } from "../../src/Kolibri/docs/src/examples/workday/simpleDayProjector.js"

import { DayController } from "../../src/Kolibri/docs/src/examples/workday/dayController.js"
import { MonologList } from "../../src/monolog/projector/MonologList.js";
import { WorkingHoursController } from "./controller.js";
import { Switch } from "../../src/switch/projector/Switch.js";

// closest to the using HTML is the only place where we depend on the HTML content
const workingHoursInput = document.getElementById("workingHoursInput");
const darkThemeSwitch   = document.getElementById("dark-theme-switch");

const dayController = DayController();
const monolog       = MonologList();

const whController = WorkingHoursController(dayController, monolog);
const darkTheme    = Switch(whController, {id: "checkDarkTheme", labelText: "Dark Theme"});


workingHoursInput.append(...projectDay(dayController)); // projector pattern
document.getElementsByTagName('body')[0].append(monolog.list());
darkThemeSwitch.append(darkTheme);
