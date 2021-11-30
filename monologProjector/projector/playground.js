import {monologProjector} from "../base-elements/monologProjector";
import {cardProjector} from "../base-elements/cardProjector";
import {loginLinkProjector} from "../../../ip6-web-ui-toolkit/login/subProjectors/linkProjector";

export {playground}


const playground = (controller, rootElement) => {

    const link = loginLinkProjector("https://www.google-.com")
    const buttonCard = cardProjector('Non-Sticky', [link])
    const monologList = monologProjector();

    rootElement.appendChild(buttonCard);
    rootElement.appendChild(monologList);
}