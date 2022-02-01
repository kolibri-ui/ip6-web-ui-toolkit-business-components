import {DemoController, DemoView} from "./controller/demoController.js";


const controller = DemoController();

DemoView(controller, document.getElementById('app'));
controller.addMonolog();