import {DomElement} from "./DomElement";

class DomContainer extends DomElement {
    constructor(style, children) {
        super(style, children);
    }

    getDefaultStyles() {
        return {
            display: "block"
        }
    }

    /** @returns {HTMLDivElement} */
    _createHtmlElement() {
        const element = document.createElement("div");
        element.classList.add("df");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {styleType} style @param {childrenType} children */
export default (style = {}, children = []) => {
    return new DomContainer(style, children);
};