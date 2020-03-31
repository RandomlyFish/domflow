import {DomElement} from "./DomElement";

class DomSlider extends DomElement {
    /** @param {domSliderStyleType} style */
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
                this.onDrag(this.value);
            }
        }

        // Only called if the value had been changed after releasing
        this.htmlElement.onchange = (e) => {
            if (this.onRelease !== undefined) {
                this.onRelease(this.value);
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

        Object.assign(this, style); // TODO: Come up with a solution that doesn't require this to be called twice
    }

    /** @type {number} The current value for the slider */
    get value() {
        return parseFloat(this.htmlElement.value);
    }
    set value(value) {
        this.htmlElement.value = value.toString();
    }

    /** @type {number} The value for the slider when the handle is all the way to the left */
    get min() {
        return parseFloat(this.htmlElement.getAttribute("min"));
    }
    set min(value) {
        this.htmlElement.setAttribute("min", value);
    }

    /** @type {number} The value for the slider whe the handle is all the way to the right */
    get max() {
        return parseFloat(this.htmlElement.getAttribute("max"));
    }
    set max(value) {
        this.htmlElement.setAttribute("max", value);
    }

    /** @type {number} The smallest amount that value can change when the handle is moved */
    get step() {
        return parseFloat(this.htmlElement.getAttribute("step"));
    }
    set step(value) {
        this.htmlElement.setAttribute("step", value);
    }

    /** @returns {HTMLInputElement} */
    _createHtmlElement() {
        const element = document.createElement("input");
        element.classList.add("df", "slider");
        element.type = "range";
        element.min = 0;
        element.max = 1;
        element.step = 0.01;
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {domSliderStyleType} style */
export default (style = {}) => {
    return new DomSlider(style);
};

/**
 * @typedef {Object} domSliderStyleTypeExtra - The extended style type for video elements
 * @property {number} value - The current value for the slider
 * @property {number} min - The value for the slider when the handle is all the way to the left
 * @property {number} max - The value for the slider whe the handle is all the way to the right
 * @property {number} step - The smallest amount that value can change when the handle is moved
 */

/** 
 * @typedef {styleType & domSliderStyleTypeExtra} domSliderStyleType
 */