import {SwitchController, View} from "./controller/switchController.js";

const controller = SwitchController();
View(controller, document.getElementById('examples'));
controller.addSwitch();
