import {Attribute, VALUE} from "../presentationModel/presentationModel.js";

export {Model}
const Model = () => {

    const darkModeAttr          = Attribute(false);
    const switchTypeAttribute   = Attribute(false);
    const showGridAttribute     = Attribute(false);

    return {
        isDark          : darkModeAttr          .getObs(VALUE),
        isThreeState    : switchTypeAttribute   .getObs(VALUE),
        isGridActive    : showGridAttribute     .getObs(VALUE)
    }
}