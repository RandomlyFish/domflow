import {DomElement} from "./DomElement";

class DomImage extends DomElement {
    constructor(source, style, children) {
        super(style, children);

        /** @type {HTMLImageElement} */
        this.htmlElement;

        /** @type {colorsType} The color type of the element, which is affected by shade */
        this.color = style.color || "none";

        /** @type {string} The url or path to the image */
        this.source = source;
        this._setter(this, "source", value => {
            console.log(value, value === "", source);
            this.htmlElement.src = value;
        });
    }

    /** @returns {HTMLImageElement} */
    _createHtmlElement() {
        const element = document.createElement("img");
        element.classList.add("df");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** 
 * @param {string} source Either a path or an url to the image
 * @param {styleType} style 
 * @param {childrenType} children 
 */
export default (source = "", style = {}, children = []) => {
    return new DomImage(source, style, children);
};