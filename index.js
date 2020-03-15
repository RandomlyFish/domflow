// This is needed for code completion for created elements
require("./src/DomButton");
require("./src/DomContainer");
require("./src/DomElement");
require("./src/DomFlexContainer");
require("./src/DomIcon");
require("./src/DomLayer");
require("./src/DomText");
require("./src/DomToggle");

export {default as dom} from "./src/dom";
export {default as IoniconsV4_old} from "./src/icon_fonts/ioniconsV4";

// Refactor
export {default as Container} from "./src/refactor/DomElement";
export {default as Button} from "./src/refactor/DomButton";
export {default as Text} from "./src/refactor/DomText";
export {default as IoniconsV4} from "./src/refactor/icon_fonts/ioniconsV4";
export {default as Jsdoc} from "./src/refactor/Types";