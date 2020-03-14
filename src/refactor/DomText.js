import {DomElement} from "./DomElement";

class DomText extends DomElement {
    constructor(text, style, children) {
        super(style, children);

        this.colorClassPrefixes = ["color-"];

        /** @type {colorsType} The color type of the element, which is affected by shade */
        this.color = style.color || "foreground";

        if (text !== "") {
            this.htmlElement.textContent = text;
        }
    }

    /** @returns {HTMLParagraphElement} */
    _createHtmlElement() {
        const element = document.createElement("p");
        element.classList.add("dom-element");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {string} text @param {styleType} style @param {childrenType} children */
export default (text = "", style = {}, children = []) => {
    return new DomText(text, style, children);
};