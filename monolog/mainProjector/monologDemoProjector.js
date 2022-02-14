import {pProjector} from "../../global-projectors/pProjector.js";
import {buttonProjector} from "../../global-projectors/buttonProjector.js";
import {Monolog} from "../subProjectors/Monolog.js";

export {monologDemoProjector}
const monologDemoProjector = (controller, rootElement) => {

    const monolog = Monolog();
    rootElement.appendChild(monolog.list());
    //rootElement.appendChild(monolog.stackList());

    const pElement = pProjector("Show Notifications by pushing the Button below.", ['demo-text']);
    rootElement.appendChild(pElement);

    const successStickButton = buttonProjector("Success Sticky", ["button-success"], () => {
        monolog.success({
            title: "Some Info",
            message: "Just a Test",
            sticky: true
        });
    });

    const codeErrorButton = buttonProjector("CodeError", ["button-error"], () => {
        monolog.error({
            title: "Some Code Error",
            message: "Ask a developer.",
            codeError:"Exception in thread \"main\" java.lang.NullPointerException\n" +
                "at com.example.myproject.Book.getTitle(Book.java:16)\n" +
                "at com.example.myproject.Author.getBookTitles(Author.java:25)\n" +
                "at com.example.myproject.Bootstrap.main(Bootstrap.java:14)"
        });
    });

    const infoButton = buttonProjector("Info", ["button-info"], () => {
        monolog.info({
            title: "An Info",
            message: "And some Text"
        });
    });

    rootElement.appendChild(successStickButton);
    rootElement.appendChild(codeErrorButton);
    rootElement.appendChild(infoButton);
}