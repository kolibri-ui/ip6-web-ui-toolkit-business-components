import { SwitchController, View } from "./switch/controller/switchController.js";

import { switchService } from "./switch/service/switchService.js";

const service = switchService();

const controller = SwitchController(service);

View(controller, document.getElementById('switch'));
controller.addSwitch();