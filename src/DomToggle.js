import {DomElement} from "./DomElement";

class DomToggle extends DomElement {
    constructor(style, children) {
        super(style, children);

        /** @type {function} The click handler for the element, passes a boolean to the function based on the state */
        this.onClick = style.onClick;

        /** @type {boolean} The state of the toggle, changing this does not trigger the onClick handler */
        this.checked = false;
        this._setter(this, "checked", value => {
            this.checkbox.checked = value;
        });

        this.checkbox.onchange = (e) => {
            if (this.onClick !== undefined) {
                this.onClick(this.checkbox.checked);
            }
        };

        // Deselects the button after click
        this.htmlElement.addEventListener("mouseup", () => {
            this.htmlElement.blur();
        });
        // Deselects the button when moving the mouse away, in case it's pressed down
        this.htmlElement.addEventListener("mouseleave", () => {
            this.htmlElement.blur();
        });
    }

    /** @returns {HTMLLabelElement} */
    _createHtmlElement() {
        const htmlElement = document.createElement("label");
        htmlElement.classList.add("dom-element");
        htmlElement.classList.add("toggle");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        this.checkbox = checkbox;

        const slider = document.createElement("span");
        slider.classList.add("slider");

        htmlElement.appendChild(checkbox);
        htmlElement.appendChild(slider);

        return htmlElement;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {styleType} style @param {childrenType} children */
export default (style = {}, children = []) => {
    return new DomToggle(style, children);
};