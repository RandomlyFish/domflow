import {DomElement, DomElementBuilder} from "./DomElement";

export default class DomLayer extends DomElement {

    constructor(htmlElement) {
        super(htmlElement);
    }
}

class DomLayerBuilder extends DomElementBuilder {

    constructor() {
        super();
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {DomLayer} */
        this._domElement;
    }

    _createElement() {
        const htmlElement = document.createElement("div");
        htmlElement.classList.add("dom-layer");
        return new DomLayer(htmlElement);
    }

    /** @returns {DomLayer} */
    create(style = {}, children = []) {
        return super.create(style, children);
    }
}

export {
    DomLayer,
    DomLayerBuilder
}