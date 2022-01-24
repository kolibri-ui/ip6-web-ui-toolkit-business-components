import {SwitchController, View, Grid} from "./controller/switchController.js";
import {switchService} from "./service/switchService.js";

const service = switchService();

const controller = SwitchController(service);

View(controller, document.getElementById('examples'));
controller.addSwitch();
