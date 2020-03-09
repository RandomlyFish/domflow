import {DomElement, DomElementBuilder} from "./DomElement";

export default class DomToggle extends DomElement {

    constructor(htmlElements) {
        super(htmlElements.label);

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

class DomToggleBuilder extends DomElementBuilder {

    constructor() {
        super();
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {DomToggle} */
        this._domElement;
    }

    _createElement() {
        const htmlElement = document.createElement("label");
        htmlElement.classList.add("toggle");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        const slider = document.createElement("span");
        slider.classList.add("slider");

        htmlElement.appendChild(checkbox);
        htmlElement.appendChild(slider);

        return new DomToggle({label: htmlElement});
    }

    /** @returns {DomToggle} */
    create(style = {}) {
        return super.create(style);
    }
}

export {
    DomToggle,
    DomToggleBuilder
}