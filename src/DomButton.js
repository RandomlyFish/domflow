import {DomElement, DomElementBuilder} from "./DomElement";

export default class DomButton extends DomElement {

    constructor(htmlElement) {
        super(htmlElement);

        // Deselects the button after click
        this.htmlElement.addEventListener("mouseup", () => {
            this.htmlElement.blur();
        });
        // Deselects the button when moving the mouse away, in case it's pressed down
        this.htmlElement.addEventListener("mouseleave", () => {
            this.htmlElement.blur();
        });
    }

    get onClick() {
        return this["_" + "onClick"];
    }
    set onClick(value) {
        this.htmlElement.removeEventListener("click", this["_" + "onClick"]);
        this["_" + "onClick"] = value;
        this.htmlElement.addEventListener("click", value);
    }
}

class DomButtonBuilder extends DomElementBuilder {

    constructor() {
        super();
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {DomButton} */
        this._domElement;
    }

    _createElement() {
        const htmlElement = document.createElement("button");
        return new DomButton(htmlElement);
    }

    setOnClick(callback) {
        this._domElement.onClick = callback;
    }

    /** @returns {DomButton} */
    create(text = "", style = {}, children = []) {
        const domElement = super.create(style, children);
        if (text !== "") {
            domElement.htmlElement.textContent = text;
        }
        return domElement;
    }
}

export {
    DomButton,
    DomButtonBuilder
}