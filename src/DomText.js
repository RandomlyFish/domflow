import {DomElement} from "./DomElement";

class DomText extends DomElement {
    constructor(text, style) {
        super(style);

        this.colorClassPrefixes = ["color-"];

        /** @type {colorsType} The color type of the element, which is affected by shade */
        this.color = style.color || "foreground";

        /** @type {string} The text string to display */
        this.text = this._passThrough(this, "text", this.htmlElement, "textContent");

        if (text !== "") {
            this.htmlElement.textContent = text;
        }
    }

    /** @returns {HTMLParagraphElement} */
    _createHtmlElement() {
        const element = document.createElement("p");
        element.classList.add("df");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {string} text @param {styleType} style */
export default (text = "", style = {}) => {
    return new DomText(text, style);
};