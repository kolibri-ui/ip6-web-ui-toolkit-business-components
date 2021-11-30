import {Controller, PlaygroundView} from "./controller/controller.js";
import {monologService} from "./service/service.js";

const service = monologService()
const controller = Controller(service)

PlaygroundView(controller, document.getElementById('linktest'))
controller.addPlayground()