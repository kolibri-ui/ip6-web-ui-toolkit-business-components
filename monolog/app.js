import {Controller, View} from "./controller.js"
import {monologService} from "./service/service.js"

const service = monologService();
const controller = Controller(service);

View(controller, document.getElementById('app'));
controller.addMonolog();