import {Controller, View} from "./controller/controller.js";

const rootElement = document.getElementById("app");
const controller = Controller();

View(controller, rootElement);
controller.add();