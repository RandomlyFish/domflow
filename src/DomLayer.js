import {DomElement} from "./DomElement";

class DomLayer extends DomElement {
    constructor(style, children) {
        super(style, children);

        /** @type {colorsType} The color type of the element, which is affected by shade */
        this.color = style.color || "none";
    }

    /** @returns {HTMLDivElement} */
    _createHtmlElement() {
        const element = document.createElement("div");
        element.classList.add("dom-element");
        element.classList.add("dom-layer");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {styleType} style @param {childrenType} children */
export default (style = {}, children = []) => {
    return new DomLayer(style, children);
};