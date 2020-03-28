import {DomElement} from "./DomElement";
import "./Jsdoc";

class DomIcon extends DomElement {
    constructor(name, style, children) {
        super(style, children);

        this.colorClassPrefixes = ["color-"];

        /** @type {colorsType} The color type of the element, which is affected by shade */
        this.color = style.color || "foreground";
    
        /** @type {styleValueType} The css font size used for changing the size of the icon */
        this.size = this._passThroughCss(this, "size", this.htmlElement.style, "fontSize");
    }

    /** @returns {HTMLElement} */
    _createHtmlElement() {
        const element = document.createElement("i");
        element.classList.add("df");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {string} text @param {domIconStyleType} style @param {childrenType} children */
export default (name = "", style = {}, children = []) => {
    return new DomIcon(name, style, children);
};

// Export the class as well so that it can be extended
export {
    DomIcon
}