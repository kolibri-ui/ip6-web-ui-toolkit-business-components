import { SwitchController, View } from "./controller/switchController.js";

import { switchService } from "./service/switchService.js";

const service = switchService()

const controller = SwitchController(service)

View(controller, document.getElementById('switch'))
controller.addSwitch()