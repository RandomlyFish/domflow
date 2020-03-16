import {DomElement} from "./DomElement";

class DomFlexContainer extends DomElement {
    constructor(style, children) {
        super(style, children);

        this.htmlElement.style.display = "flex";

        const updateDirection = () => {
            if (this.direction === "row" && this.order === "default") {
                this.htmlElement.style.flexDirection = "";
                return;
            }
            let directionValue = this.direction || "row";
            if (this.order !== "default") {
                directionValue += "-" + this.order;
            }
            this.htmlElement.style.flexDirection = directionValue;
        }

        /** @type {domFlexContainerDirectionType} */
        this.direction = "row";

        /** @type {domFlexContainerOrderType} */
        this.order = "default";

        /** @type {domFlexContainerJustifyType} */
        this.justify = "start";

        /** @type {domFlexContainerSpaceType} */
        this.space = "default";

        /** @type {domFlexContainerAlignType} */
        this.align = "start";

        this._setter(this, "direction", updateDirection);
        this._setter(this, "order", updateDirection);

        this._setter(this, "justify", () => {
            if (this.space !== "none") {
                return;
            }
            const map = {"start": "", "center": "center", "end": "flex-end"};
            this.htmlElement.style.justifyContent = map[this.justify];
        });

        this._setter(this, "space", () => {
            if (this.space === "none") {
                this.justify = this.justify;
                return;
            }
            const map = {"none": "", "around": "space-around", "between": "space-between", "evenly": "space-evenly"};
            this.htmlElement.style.justifyContent = map[this.space];
        });

        this._setter(this, "align", () => {
            const map = {"start": "", "center": "center", "end": "flex-end"};
            this.htmlElement.style.alignItems = map[this.align];
        });

        Object.assign(this, style);
    }

    /** @returns {HTMLDivElement} */
    _createHtmlElement() {
        const element = document.createElement("div");
        element.classList.add("dom-element");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {domFlexContainerStyleType} style @param {childrenType} children */
export default (style = {}, children = []) => {
    return new DomFlexContainer(style, children);
};


/** @typedef {"row" | "column"} domFlexContainerDirectionType - The direction that it will use for placing the children next to each other */
/** @typedef {"default" | "reverse"} domFlexContainerOrderType - Wether the children should be placed in a reverse order */
/** @typedef {"start" | "center" | "end"} domFlexContainerJustifyType - Where the placement of the children should start from */
/** @typedef {"none" | "between" | "around" | "evenly"} domFlexContainerSpaceType - The spacing between and around each child */
/** @typedef {"start" | "center" | "end"} domFlexContainerAlignType - The alignment for the chidren, with row direction, this will affect the vertical alignment */

/**
 * @typedef {Object} domFlexContainerStyleTypeExtra - The extended style type for flex containers
 * @property {domFlexContainerDirectionType} direction
 * @property {domFlexContainerOrderType} order
 * @property {domFlexContainerJustifyType} justify
 * @property {domFlexContainerSpaceType} space
 * @property {domFlexContainerAlignType} align
 */

/** 
 * @typedef {styleType & domFlexContainerStyleTypeExtra} domFlexContainerStyleType
 */