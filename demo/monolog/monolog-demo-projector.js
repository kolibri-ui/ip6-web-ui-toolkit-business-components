import {buttonElement} from "../util/buttonElement.js";
import {MonologList} from "../../src/monolog/projector/MonologList.js";


export {monologDemoProjector}
const monologDemoProjector = (controller, rootElement) => {

    const monologList = MonologList();
    rootElement.appendChild(monologList.list());

    const pStickyElement = document.createElement("p");
    pStickyElement.classList.add('demo-text');
    pStickyElement.textContent = "Show Sticky Notifications by pushing the Button below.";
    rootElement.appendChild(pStickyElement);
    pStickyElement.appendChild(document.createElement('br'));
    pStickyElement.appendChild(document.createElement('br'));

    const infoStickyButton = buttonElement("Info", "button-info", () => {
        monologList.info({
            title: "Some Info",
            message: "And some Text",
            sticky: true
        });
    });

    const successStickButton = buttonElement("Success", "button-success", () => {
        monologList.success({
            title: "Some Info",
            message: "Just a Test",
            sticky: true
        });
    });

    const warningStickyButton = buttonElement("Warning", "button-warning", () => {
        monologList.warning({
            title: "Some Warning",
            message: "Just a Test",
            sticky: true
        });
    });

    const errorStickyButton = buttonElement("Error", "button-error", () => {
        monologList.error({
            title: "Some Error",
            message: "Just a Test",
            sticky: true
        });
    });

    const errorStickyAttentionButton = buttonElement("Error Attention", "button-error", () => {
        monologList.error({
            title: "Some Error",
            message: "Just a Test",
            sticky: true,
            attention: true,
        });
    });

    const codeErrorButton = buttonElement("CodeError", "button-error", () => {
        monologList.error({
            title: "Some Code Error",
            message: "Ask a developer.",
            codeError: "Exception in thread \"main\" java.lang.NullPointerException\n" +
                "at com.example.myproject.Book.getTitle(Book.java:16)\n" +
                "at com.example.myproject.Author.getBookTitles(Author.java:25)\n" +
                "at com.example.myproject.Bootstrap.main(Bootstrap.java:14)"
        });
    });

    pStickyElement.appendChild(infoStickyButton);
    pStickyElement.appendChild(successStickButton);
    pStickyElement.appendChild(warningStickyButton);
    pStickyElement.appendChild(errorStickyButton);
    pStickyElement.appendChild(errorStickyAttentionButton);
    pStickyElement.appendChild(codeErrorButton);
    pStickyElement.appendChild(document.createElement('br'));
    pStickyElement.appendChild(document.createElement('br'));

    const pElement = document.createElement("p");
    pElement.classList.add('demo-text');
    pElement.textContent = "Show Non-Sticky Notifications by pushing the Button below.";
    rootElement.appendChild(pElement);
    pElement.appendChild(document.createElement('br'));
    pElement.appendChild(document.createElement('br'));

    const infoButton = buttonElement("Info", "button-info", () => {
        monologList.info({
            title: "Some Info",
            message: "And some Text"
        });
    });

    const successButton = buttonElement("Success", "button-success", () => {
        monologList.success({
            title: "Some Info",
            message: "Just a Test"
        });
    });

    const warningButton = buttonElement("Warning", "button-warning", () => {
        monologList.warning({
            title: "Some Warning",
            message: "Just a Test"
        });
    });

    const errorButton = buttonElement("Error", "button-error", () => {
        monologList.error({
            title: "Some Error",
            message: "Just a Test"
        });
    });

    pElement.appendChild(infoButton);
    pElement.appendChild(successButton);
    pElement.appendChild(warningButton);
    pElement.appendChild(errorButton);

}
