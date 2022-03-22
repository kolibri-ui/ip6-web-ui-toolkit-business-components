import { DemoSwitch } from "../switch/DemoSwitch.js";
import { Observable } from "../../src/Kolibri/docs/src/kolibri/observable.js";
import {MonologList} from "../../src/monolog/projector/MonologList.js";


/**
 * Neumorh Usability Test
 */
const neumorphIndeterminateSwitch = DemoSwitch(Observable(false), false, undefined, true, false, false);
document.getElementById("neumorph-switch-indeterminate").appendChild(neumorphIndeterminateSwitch);


const neumorphOnSwitch = DemoSwitch(Observable(false), false, true, false, false, false);
document.getElementById("neumorph-switch-on").appendChild(neumorphOnSwitch);

const neumorphkeyboardOnSwitch = DemoSwitch(Observable(false), false, true, false, false, false);
document.getElementById("neumorph-switch-on-keyboard").appendChild(neumorphkeyboardOnSwitch);

const neumorphshadowOnSwitch = DemoSwitch(Observable(false), false, true, false, false,  true);
document.getElementById("neumorph-switch-shadow").appendChild(neumorphshadowOnSwitch);


/**
 * Slim Test
 */
const slimIndeterminateSwitch = DemoSwitch(Observable(false), true, undefined, true, false, false);
document.getElementById("slim-switch-indeterminate").appendChild(slimIndeterminateSwitch);

const slimOnSwitch = DemoSwitch(Observable(false), true, true, false, false, false);
document.getElementById("slim-switch-on").appendChild(slimOnSwitch);

const slimkeyboardOnSwitch = DemoSwitch(Observable(false), true, true, false, false, false);
document.getElementById("slim-switch-on-keyboard").appendChild(slimkeyboardOnSwitch);

const slimshadowOnSwitch = DemoSwitch(Observable(false), true, true, false, false, true);
document.getElementById("slim-switch-shadow").appendChild(slimshadowOnSwitch);


/**
 * Monolog Test
 */

const monologInfo = MonologList();
monologInfo.list().classList.remove("right", "top");
monologInfo.list().classList.add("center");

monologInfo.info({
    title  : "Info",
    message: "Meeting - 22.03.2022. Ihr Meeting startet in 10 Minuten.",
    sticky : true,
});
document.getElementById("info-monolog").appendChild(monologInfo.list());

const monologSuccess = MonologList();
monologSuccess.list().classList.remove("right", "top");
monologSuccess.list().classList.add("center");

monologSuccess.success({
  title  : "Success",
  message: "Das Formular wurde erfolgreich gesendet. Ihre Anfrage wurde bestätigt.",
  sticky : true,
});
document.getElementById("success-monolog").appendChild(monologSuccess.list());

const monologWarning = MonologList();
monologWarning.list().classList.remove("right", "top");
monologWarning.list().classList.add("center");

monologWarning.warning({
  title  : "Warning",
  message: "Es gibt ein Problem mit Ihrer Netzwerkverbindung.",
  sticky : true,
});
document.getElementById("warning-monolog").appendChild(monologWarning.list());

const monologError = MonologList();
monologError.list().classList.remove("right", "top");
monologError.list().classList.add("center");

monologError.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten beim Übermitteln Ihrer Daten.",
  sticky : true,
});
document.getElementById("error-monolog").appendChild(monologError.list());

const monologCodeError = MonologList();
monologCodeError.list().classList.remove("right", "top");
monologCodeError.list().classList.add("center");

monologCodeError.error({
  title  : "Code Error",
  message: "Konsultieren Sie einen Programmierer.",
  sticky : true,
  codeError: 'Exception in thread "main" java.lang.NullPointerException at com.example.myproject.Book.getTitle(Book.java:16) at ...'
});
document.getElementById("code-error-monolog").appendChild(monologCodeError.list());


const monologCompare = MonologList();
monologCompare.list().classList.remove("right", "top");
monologCompare.list().classList.add("center");
monologCompare.info({
  title  : "Info",
  message: "Meeting - 22.03.2022. Ihr Meeting startet in 10 Minuten.",
  sticky : true,
});
monologCompare.success({
  title  : "Success",
  message: "Das Formular wurde erfolgreich gesendet. Ihre Anfrage wurde bestätigt.",
  sticky : true,
});
monologCompare.warning({
  title  : "Warning",
  message: "Es gibt ein Problem mit Ihrer Netzwerkverbindung.",
  sticky : true,
});
monologCompare.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten beim Übermitteln Ihrer Daten.",
  sticky : true,
});
monologCompare.error({
  title  : "Code Error",
  message: "Konsultieren Sie einen Programmierer.",
  sticky : true,
  codeError: 'Exception in thread "main" java.lang.NullPointerException at com.example.myproject.Book.getTitle(Book.java:16) at ...'
});
document.getElementById("monolog-compare").appendChild(monologCompare.list());

const monologError2 = MonologList();
monologError2.list().classList.remove("right", "top");
monologError2.list().classList.add("center");
monologError2.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten beim Übermitteln Ihrer Daten.",
  sticky : true,
});
document.getElementById("error-monolog-2").appendChild(monologError2.list());


const monologErrorStack = MonologList();
monologErrorStack.list().classList.remove("right", "top");
monologErrorStack.list().classList.add("center");
monologErrorStack.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
document.getElementById("stacked-error-monolog").appendChild(monologErrorStack.list());

const monologErrorStack2 = MonologList();
monologErrorStack2.list().classList.remove("right", "top");
monologErrorStack2.list().classList.add("center");
monologErrorStack2.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack2.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack2.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack2.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
document.getElementById("stacked-error-monolog-2").appendChild(monologErrorStack2.list());

const monologErrorStack3 = MonologList();
monologErrorStack3.list().classList.remove("right", "top");
monologErrorStack3.list().classList.add("center");
monologErrorStack3.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack3.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack3.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
monologErrorStack3.error({
  title  : "Error",
  message: "Ein Fehler ist aufgetreten.",
  sticky : true,
});
document.getElementById("stacked-error-monolog-3").appendChild(monologErrorStack3.list());

