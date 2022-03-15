import { buttonElement } from "../util/buttonElement.js";
import { MonologList } from "../../src/monolog/projector/MonologList.js";


export { monologButtonDemoProjector }
const monologButtonDemoProjector = (controller, rootElement) => {

    const monolog = MonologList();
    rootElement.appendChild(monolog.list());

    const infoStickyButton = buttonElement("Launch Sticky Info Monolog", "button-info", () => {
        monolog.info({
            title  : "Some Info",
            message: "Just a Text.",
            sticky : true,
        });
    });

    const successStickyButton = buttonElement("Launch Sticky Success Monolog", "button-success", () => {
        monolog.success({
            title  : "Some Info",
            message: "Just a Test",
            sticky : true
        });
    });

    const warningStickyButton = buttonElement("Launch Sticky Warning Monolog", "button-warning", () => {
        monolog.warning({
            title  : "Some Warning",
            message: "Just a Test",
            sticky : true
        });
    });

    const errorStickyButton = buttonElement("Launch Sticky Error Monolog", "button-error", () => {
        monolog.error({
            title  : "Some Error",
            message: "Just a Test",
            sticky : true
        });
    });

    const errorStickyAttentionButton = buttonElement("Launch Error Monolog With Attention", "button-error", () => {
        monolog.error({
            title    : "Some Error",
            message  : "Just a Test",
            sticky   : true,
            attention: true,
        });
    });

    const codeErrorButton = buttonElement("Launch CodeError Monolog", "button-error", () => {
        monolog.error({
            title    : "Some Code Error",
            message  : "Ask a developer.",
            codeError: "Exception in thread \"main\" java.lang.NullPointerException\n" +
                "at com.example.myproject.Book.getTitle(Book.java:16)\n" +
                "at com.example.myproject.Author.getBookTitles(Author.java:25)\n" +
                "at com.example.myproject.Bootstrap.main(Bootstrap.java:14)"
        });
    });

    const infoButton = buttonElement("Launch Non-Sticky Info Monolog", "button-info", () => {
        monolog.info({
            title  : "Some Info",
            message: "And some Text"
        });
    });

    const successButton = buttonElement("Launch Non-Sticky Success Monolog", "button-success", () => {
        monolog.success({
            title  : "Some Info",
            message: "Just a Test"
        });
    });

    const warningButton = buttonElement("Launch Non-Sticky Warning Monolog", "button-warning", () => {
        monolog.warning({
            title  : "Some Warning",
            message: "Just a Test"
        });
    });

    const errorButton = buttonElement("Launch Non-Sticky Error Monolog", "button-error", () => {
        monolog.error({
            title  : "Some Error",
            message: "Just a Test"
        });
    });

    return {
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
    }

}
