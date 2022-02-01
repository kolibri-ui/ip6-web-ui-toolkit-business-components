import {DemoController, DemoView} from "./demoController.js";

const controller = DemoController();

DemoView(controller, document.getElementById('app'));
controller.addMonolog();