
import { projectDay } from "../../src/Kolibri/docs/src/examples/workday/simpleDayProjector.js"
//       the string above  ^^^^^^^^^^^^^^^^^^^^^^^^^   is the only thing that you need to change
//       if you want to change the projector (look and feel) for how to enter and display times of the day

// Note that in particular, controller (and thus model), business rules, and existing tests do not need to change!

import { DayController } from "../../src/Kolibri/docs/src/examples/workday/dayController.js"
import { Monolog } from "../../src/monolog/projector/Monolog.js";
import { WorkingHoursController } from "./controller.js";
import {Switch} from "../../src/switch/projector/Switch.js";

// closest to the using HTML is the only place where we depend on the HTML content
const workingHoursInput = document.getElementById("workingHoursInput");
const darkThemeSwitch = document.getElementById("dark-theme-switch");

const dayController = DayController();
const monolog = Monolog();

const whController = WorkingHoursController(dayController, monolog);
const darkTheme = Switch(whController, {id:"checkDarkTheme", labelText: "Dark Theme"});


workingHoursInput.append(...projectDay(dayController)); // projector pattern
document.getElementsByTagName('body')[0].append(monolog.list());
darkThemeSwitch.append(darkTheme);
