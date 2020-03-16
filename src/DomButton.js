import {DomElement} from "./DomElement";

class DomButton extends DomElement {
    constructor(text, style, children) {
        super(style, children);

        if (text !== undefined && text !== "") {
            this.htmlElement.textContent = text;
        }

        /** @type {function} The click handler for the element */
        this.onClick = this._passThroughCss(this, "onClick", this.htmlElement, "onclick");

        // Deselects the button after click
        this.htmlElement.addEventListener("mouseup", () => {
            this.htmlElement.blur();
        });
        // Deselects the button when moving the mouse away, in case it's pressed down
        this.htmlElement.addEventListener("mouseleave", () => {
            this.htmlElement.blur();
        });
    }

    /** @returns {HTMLButtonElement} */
    _createHtmlElement() {
        const element = document.createElement("button");
        element.classList.add("dom-element");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {string} text 
 * Text for the button    
 * For more control over the text, leave this as an empty string and add a text element as a child instead
 * @param {styleType} style 
 * @param {childrenType} children */
export default (text = "", style = {}, children = []) => {
    return new DomButton(text, style, children);
};