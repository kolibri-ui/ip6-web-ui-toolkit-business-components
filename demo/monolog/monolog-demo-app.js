import { MonologDemoController } from "./monolog-demo-controller.js";
import { monologButtonDemoProjector } from "./monolog-button-demo-projector.js";


const controller  = MonologDemoController();
const rootElement = document.getElementById('monolog-demo-app-container');


controller.addMonolog();


const {
          infoStickyButton,
          successStickyButton,
          warningStickyButton,
          errorStickyButton,
          errorStickyAttentionButton,
          codeErrorButton,
          infoButton,
          successButton,
          warningButton,
          errorButton
      } = monologButtonDemoProjector(controller, rootElement);

document.getElementById("infoStickyButton").appendChild(infoStickyButton);
document.getElementById("successStickyButton").appendChild(successStickyButton);
document.getElementById("warningStickyButton").appendChild(warningStickyButton);
document.getElementById("errorStickyAttentionButton").appendChild(errorStickyAttentionButton);
document.getElementById("errorStickyButton").appendChild(errorStickyButton);
document.getElementById("codeErrorButton").appendChild(codeErrorButton);

document.getElementById("infoButton").appendChild(infoButton);
document.getElementById("successButton").appendChild(successButton);
document.getElementById("warningButton").appendChild(warningButton);
document.getElementById("errorButton").appendChild(errorButton);

