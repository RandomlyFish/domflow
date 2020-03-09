import {DomElement, DomElementBuilder} from "./DomElement";

export default class DomIcon extends DomElement {

    constructor(htmlElement) {
        super(htmlElement);

        this.colorClassPrefixes = ["color-"]; // TODO: extend color so that it uses the correct prefix
        this.color = "foreground";
    }
}

class DomIconBuilder extends DomElementBuilder {

    constructor() {
        super();
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {DomIcon} */
        this._domElement;
    }

    _createElement() {
        const htmlElement = document.createElement("i");
        return new DomIcon(htmlElement);
    }

    /** @returns {DomIcon} */
    create(style = {}, children = []) {
        return super.create(style, children);
    }
}

export {
    DomIcon,
    DomIconBuilder
}