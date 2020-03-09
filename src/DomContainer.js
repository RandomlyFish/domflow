import {DomElement, DomElementBuilder} from "./DomElement";

export default class DomContainer extends DomElement {

    constructor(htmlElement) {
        super(htmlElement);
    }
}

class DomContainerBuilder extends DomElementBuilder {

    constructor() {
        super();
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {DomContainer} */
        this._domElement;
    }

    _createElement() {
        const htmlElement = document.createElement("div");
        return new DomContainer(htmlElement);
    }

    /** @returns {DomContainer} */
    create(style = {}, children = []) {
        return super.create(style, children);
    }
}

export {
    DomContainer,
    DomContainerBuilder
}