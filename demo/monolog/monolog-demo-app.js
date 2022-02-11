import {MonologDemoController} from "./monolog-demo-controller.js";
import {DemoView} from "./monolog-demo-view.js";


const controller = MonologDemoController();

DemoView(controller, document.getElementById('monolog-demo-app-container'));
controller.addMonolog();
