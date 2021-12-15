import {Controller, View} from "./controller/controller.js";
import {monologService} from "./monolog/service/service.js";

const rootElement = document.getElementById("app");
const service = monologService();
const controller = Controller(service);

View(controller, rootElement);
controller.add();