import {Controller, View} from "./controller/controller.js";
import {playgroundService} from "./service/service.js";

const service = playgroundService()
const controller = Controller(service)

View(controller, document.getElementById('linktest'))
controller.addSwitch()