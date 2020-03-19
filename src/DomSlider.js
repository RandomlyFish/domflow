import {DomElement} from "./DomElement";

class DomSlider extends DomElement {
    constructor(style) {
        super(style);

        /** @type {HTMLInputElement} */
        this.htmlElement;

        /** @type {function} The drag handler for the element, passes a value to the function based on the slider's handle position */
        this.onDrag = style.onDrag;

        /** @type {function} The release handler for the element, passes a value to the function based on the slider's handle position */
        this.onRelease = style.onRelease;

        this.htmlElement.oninput = (e) => {
            if (this.onDrag !== undefined) {
                this.onDrag(this.htmlElement.value);
            }
        }

        // Only called if the value had been changed after releasing
        this.htmlElement.onchange = (e) => {
            if (this.onRelease !== undefined) {
                this.onRelease(this.htmlElement.value);
            }
        }

        // Deselects the button after click
        this.htmlElement.addEventListener("mouseup", () => {
            this.htmlElement.blur();
        });
        // Deselects the button when moving the mouse away, in case it's pressed down
        this.htmlElement.addEventListener("mouseleave", () => {
            this.htmlElement.blur();
        });
    }

    /** @returns {HTMLInputElement} */
    _createHtmlElement() {
        const element = document.createElement("input");
        element.classList.add("dom-element", "slider");
        element.type = "range";
        element.min = 0;
        element.max = 1;
        element.step = 0.01;
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {styleType} style */
export default (style = {}) => {
    return new DomSlider(style);
};