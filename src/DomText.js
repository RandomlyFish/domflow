import {DomElement, DomElementBuilder} from "./DomElement";

export default class DomText extends DomElement {

    constructor(htmlElement) {
        super(htmlElement);

        this.colorClassPrefixes = ["color-"]; // TODO: extend color so that it uses the correct prefix

        /** @type {"none" | "foreground" | "background" | "primary" | "secondary" | "accent"} */
        this.color = "foreground";
    }
}

class DomTextBuilder extends DomElementBuilder {

    constructor() {
        super();
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {DomText} */
        this._domElement;
    }

    get alignCenter() {
        this._domElement.htmlElement.style.textAlign = "center";
        return this;
    }

    get weightBold() {
        this._domElement.htmlElement.style.fontWeight = "bold";
        return this;
    }

    _createElement() {
        const htmlElement = document.createElement("p");
        return new DomText(htmlElement);
    }

    /** @returns {DomText} */
    create(text = "", style = {}) {
        const domElement = super.create(style);
        if (text !== "") {
            domElement.htmlElement.textContent = text;
        }
        return domElement;
    }
}

export {
    DomText,
    DomTextBuilder
}