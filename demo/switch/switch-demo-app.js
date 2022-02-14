import {SwitchDemoController} from "./switch-demo-controller.js";
import {View} from "./switch-demo-view.js";

const controller = SwitchDemoController();
View(controller, document.getElementById('examples'));
controller.addSwitch();
