import {hProjector} from "../../global-projectors/hProjector.js";
import {DemoBoxProjector} from "../subProjectors/DemoBoxProjector.js";
import {hrProjector} from "../../global-projectors/hrProjector.js";
import {DemoSwitch} from "../subProjectors/DemoSwitch.js";

export {switchProjector}


const switchProjector = (controller, rootElement, switchModel) => {


    const examplesTitle = hProjector(2, "Examples");
    rootElement.appendChild(examplesTitle);

    const twoStateTitle = hProjector(3, "Two State, Default Styling");
    rootElement.appendChild(twoStateTitle);

    /**
     * Two State Off, default
     */
    const defaultTwoStateTitle = "Off";
    const defaultTwoStateSwitch = DemoSwitch(switchModel.ThreeState, false, false, false, false, false);
    const defaultTwoStateCode = "Switch(observable, false, false);";
    const defaultTwoStateBox = DemoBoxProjector(defaultTwoStateTitle, defaultTwoStateCode, defaultTwoStateSwitch);
    rootElement.appendChild(defaultTwoStateBox);


    /**
     * Two State On, default
     */
    const defaultTwoStateTitleOn = "On";
    const defaultTwoStateSwitchOn = DemoSwitch(switchModel.ThreeState, false, true, false, false, false);
    const defaultTwoStateCodeOn = "Switch(observable, true, false);";
    const defaultTwoStateBoxOn = DemoBoxProjector(defaultTwoStateTitleOn, defaultTwoStateCodeOn, defaultTwoStateSwitchOn);
    rootElement.appendChild(defaultTwoStateBoxOn);

    rootElement.appendChild(hrProjector());


    const twoStateSlimTitle = hProjector(3, "Two State, Slim Styling");
    rootElement.appendChild(twoStateSlimTitle);

    /**
     * Two State Off, slim
     */
    const slimTwoStateTitle = "Off";
    const slimTwoStateSwitch = DemoSwitch(switchModel.ThreeState, true, false, false, false, false);
    const slimTwoStateCode = "SlimSwitch(observable, false, false);";
    const slimTwoStateBox = DemoBoxProjector(slimTwoStateTitle, slimTwoStateCode, slimTwoStateSwitch);

    rootElement.appendChild(slimTwoStateBox);

    /**
     * Two State On, slim
     */
    const slimTwoStateTitleOn = "On";
    const slimTwoStateSwitchOn = DemoSwitch(switchModel.ThreeState, true, true, false, false, false);
    const slimTwoStateCodeOn = "SlimSwitch(observable, true, false);";
    const slimTwoStateBoxOn = DemoBoxProjector(slimTwoStateTitleOn, slimTwoStateCodeOn, slimTwoStateSwitchOn);

    rootElement.appendChild(slimTwoStateBoxOn);


    rootElement.appendChild(hrProjector());

    const threeStateTitle = hProjector(3, "Three State, Default Styling");
    rootElement.appendChild(threeStateTitle);

    /**
     * Three State Off, default
     */
    const defaultThreeStateTitle = "Off";
    const defaultThreeStateSwitch = DemoSwitch(switchModel.ThreeState, false, false, true, false, false);
    const defaultThreeStateCode = "Switch(observable, false, true);";
    const defaultThreeStateBox = DemoBoxProjector(defaultThreeStateTitle, defaultThreeStateCode, defaultThreeStateSwitch);

    rootElement.appendChild(defaultThreeStateBox);


    const defaultThreeStateTitleOn = "On";
    const defaultThreeStateSwitchOn = DemoSwitch(switchModel.ThreeState, false, true, true, false, false);
    const defaultThreeStateCodeOn = "Switch(observable, true, true);";
    const defaultThreeStateBoxOn = DemoBoxProjector(defaultThreeStateTitleOn, defaultThreeStateCodeOn, defaultThreeStateSwitchOn);

    rootElement.appendChild(defaultThreeStateBoxOn);


    const defaultThreeStateTitleI = "Indeterminate";
    const defaultThreeStateSwitchI = DemoSwitch(switchModel.ThreeState, false, null, true, false, false);
    const defaultThreeStateCodeI = "Switch(observable, null, true);";
    const defaultThreeStateBoxI = DemoBoxProjector(defaultThreeStateTitleI, defaultThreeStateCodeI, defaultThreeStateSwitchI);

    rootElement.appendChild(defaultThreeStateBoxI);

    const defaultThreeStateTitleR = "Required";
    const defaultThreeStateSwitchR = DemoSwitch(switchModel.ThreeState, false, null, true, true, false);
    const defaultThreeStateBoxR = DemoBoxProjector(defaultThreeStateTitleR, null, defaultThreeStateSwitchR);

    rootElement.appendChild(defaultThreeStateBoxR);

    const defaultThreeStateTitleH = "Hover";
    const defaultThreeStateSwitchHOff = DemoSwitch(switchModel.ThreeState, false, false, true, false, true);
    const defaultThreeStateSwitchHOn = DemoSwitch(switchModel.ThreeState, false, true, true, false, true);
    const defaultThreeStateSwitchHI = DemoSwitch(switchModel.ThreeState, false, null, true, false, true);
    const defaultThreeStateBoxH = DemoBoxProjector(defaultThreeStateTitleH, null, defaultThreeStateSwitchHOff, defaultThreeStateSwitchHOn, defaultThreeStateSwitchHI);

    rootElement.appendChild(defaultThreeStateBoxH);

    const defaultThreeStateTitleHRO = "ReadOnly";
    const defaultThreeStateSwitchOffRO = DemoSwitch(switchModel.ThreeState, false, false, true, false, false, true);
    const defaultThreeStateSwitchOnRO = DemoSwitch(switchModel.ThreeState, false, true, true, false, false, true);
    const defaultThreeStateSwitchIRO = DemoSwitch(switchModel.ThreeState, false, null, true, false, false, true);
    const defaultThreeStateBoxHRO = DemoBoxProjector(defaultThreeStateTitleHRO, null, defaultThreeStateSwitchOffRO, defaultThreeStateSwitchOnRO, defaultThreeStateSwitchIRO);

    rootElement.appendChild(defaultThreeStateBoxHRO);

    const defaultThreeStateTitleHD = "Disabled";
    const defaultThreeStateSwitchOffD = DemoSwitch(switchModel.ThreeState, false, false, true, false, false,false, true);
    const defaultThreeStateSwitchOnD = DemoSwitch(switchModel.ThreeState, false, true, true, false, false, false,true);
    const defaultThreeStateSwitchID = DemoSwitch(switchModel.ThreeState, false, null, true, false, false, false,true);
    const defaultThreeStateBoxHD = DemoBoxProjector(defaultThreeStateTitleHD, null, defaultThreeStateSwitchOffD, defaultThreeStateSwitchOnD, defaultThreeStateSwitchID);

    rootElement.appendChild(defaultThreeStateBoxHD);


    rootElement.appendChild(hrProjector());

    const threeStateTitleSlim = hProjector(3, "Three State, Slim Styling");
    rootElement.appendChild(threeStateTitleSlim);

    const slimThreeStateTitle = "Off";
    const slimThreeStateSwitch = DemoSwitch(switchModel.ThreeState, true, false, true, false, false);
    const slimThreeStateCode = "SlimSwitch(observable, false, true);";
    const slimThreeStateBox = DemoBoxProjector(slimThreeStateTitle, slimThreeStateCode, slimThreeStateSwitch);

    rootElement.appendChild(slimThreeStateBox);

    const slimThreeStateTitleOn = "On";
    const slimThreeStateSwitchOn = DemoSwitch(switchModel.ThreeState, true, true, true, false, false);
    const slimThreeStateCodeOn = "SlimSwitch(observable, true, true);";
    const slimThreeStateBoxOn = DemoBoxProjector(slimThreeStateTitleOn, slimThreeStateCodeOn, slimThreeStateSwitchOn);

    rootElement.appendChild(slimThreeStateBoxOn);

    const slimThreeStateTitleI = "Indeterminate";
    const slimThreeStateSwitchI = DemoSwitch(switchModel.ThreeState, true, null, true, false, false);
    const slimThreeStateCodeI = "SlimSwitch(observable, null, true);";
    const slimThreeStateBoxI = DemoBoxProjector(slimThreeStateTitleI, slimThreeStateCodeI, slimThreeStateSwitchI);

    rootElement.appendChild(slimThreeStateBoxI);

    const slimThreeStateTitleR = "Required";
    const slimThreeStateSwitchR = DemoSwitch(switchModel.ThreeState, true, null, true, true, false);
    const slimThreeStateBoxR = DemoBoxProjector(slimThreeStateTitleR, null, slimThreeStateSwitchR);

    rootElement.appendChild(slimThreeStateBoxR);


    const slimThreeStateTitleH = "Hover";
    const slimThreeStateSwitchOffH = DemoSwitch(switchModel.ThreeState, true, false, true, false, true);
    const slimThreeStateSwitchOnH = DemoSwitch(switchModel.ThreeState, true, true, true, false, true);
    const slimThreeStateSwitchIH = DemoSwitch(switchModel.ThreeState, true, null, true, false, true);
    const slimThreeStateBoxH = DemoBoxProjector(slimThreeStateTitleH, null, slimThreeStateSwitchOffH, slimThreeStateSwitchOnH, slimThreeStateSwitchIH);

    rootElement.appendChild(slimThreeStateBoxH);


    const slimThreeStateTitleHRO = "ReadOnly";
    const slimThreeStateSwitchOffRO = DemoSwitch(switchModel.ThreeState, true, false, true, false, false, true);
    const slimThreeStateSwitchOnRO = DemoSwitch(switchModel.ThreeState, true, true, true, false, false, true);
    const slimThreeStateSwitchIRO = DemoSwitch(switchModel.ThreeState, true, null, true, false, false, true);
    const slimThreeStateBoxHRO = DemoBoxProjector(slimThreeStateTitleHRO, null, slimThreeStateSwitchOffRO, slimThreeStateSwitchOnRO, slimThreeStateSwitchIRO);

    rootElement.appendChild(slimThreeStateBoxHRO);

    const slimThreeStateTitleHD = "Disabled";
    const slimThreeStateSwitchOffD = DemoSwitch(switchModel.ThreeState, true, false, true, false, false,false, true);
    const slimThreeStateSwitchOnD = DemoSwitch(switchModel.ThreeState, true, true, true, false, false, false,true);
    const slimThreeStateSwitchID = DemoSwitch(switchModel.ThreeState, true, null, true, false, false, false,true);
    const slimThreeStateBoxHD = DemoBoxProjector(slimThreeStateTitleHD, null, slimThreeStateSwitchOffD, slimThreeStateSwitchOnD, slimThreeStateSwitchID);

    rootElement.appendChild(slimThreeStateBoxHD);

}