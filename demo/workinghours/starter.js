import {projectDay} from "../../src/Kolibri/docs/src/examples/workday/simpleDayProjector.js"
import {DayController} from "../../src/Kolibri/docs/src/examples/workday/dayController.js"
import {Monolog} from "../../src/monolog/projector/Monolog.js";
import {WorkingHoursController} from "./controller.js";
import {Switch} from "../../src/switch/projector/Switch.js";

const workingHoursInput = document.getElementById("workingHoursInput");
const darkThemeSwitch   = document.getElementById("dark-theme-switch");

const dayController = DayController();
const monolog       = Monolog();

const whController = WorkingHoursController(dayController, monolog);
const darkTheme    = Switch(whController, {id: "checkDarkTheme", labelText: "Dark Theme"});


workingHoursInput.append(...projectDay(dayController)); // projector pattern
document.getElementsByTagName('body')[0].append(monolog.list()); // querySelector
darkThemeSwitch.append(darkTheme);
