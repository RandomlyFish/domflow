import {DomElement} from "./DomElement";

class DomTextInput extends DomElement {
    constructor(style) {
        super(style);
    }

    /** @returns {HTMLInputElement} */
    _createHtmlElement() {
        const element = document.createElement("input");
        element.classList.add("df");
        element.type = "text";
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {styleType} style */
export default (style = {}) => {
    return new DomTextInput(style);
};