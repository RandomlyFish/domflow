import "./Types";
import "../styles/styles.css";
import "../styles/input.css";
import "../styles/color.css";

import dom from "../dom";
import StringUtil from "@randomlyfish/utils/StringUtil";

class DomElement {

    /** @param {styleType} style @param {childrenType} children */
    constructor(style = {}, children = []) {
        this.htmlElement = this._createHtmlElement();

        this.colorClassPrefixes = ["bg-color-"];
        
        const updateColor = () => {
            if (this.color === undefined || this.shade === undefined) {
                return;
            }
            for (let c of this.htmlElement.classList) {
                if (c.indexOf("color-") === 0 || c.indexOf("bg-color-") === 0) {
                    this.htmlElement.classList.remove(c);
                }
            }
            let colorClass = this.colorClassPrefixes[0] + this.color;
            if (this.shade !== "normal") {
                colorClass += "-" + this.shade;
            }
            this.htmlElement.classList.add(colorClass);
        }

        /** @type {colorsType} The color type of the element, which is affected by shade */
        this.color = "background";
        this._setter(this, "color", updateColor);

        /** @type {shadeType} The shade type of the element, which is affected by color */
        this.shade = "normal";
        this._setter(this, "shade", updateColor);

        /** @type {styleValueType} The css width of the element */
        this.width = this._passThroughCss(this, "width", this.htmlElement.style, "width");

        /** @type {styleValueType} The css height of the element */
        this.height = this._passThroughCss(this, "height", this.htmlElement.style, "height");

        Object.assign(this, style);

        this._addChildren(children); // TODO: Make these as functions on dom
        this._addToParent();
    }
    
    /** @returns {HTMLDivElement} */
    _createHtmlElement() {
        const element = document.createElement("div");
        element.classList.add("dom-element");
        return element;
    }

    _addChildren(children = []) {
        dom._bindParent(this.htmlElement);

        if (Array.isArray(children) === true) {
            for (let child of children) {
                this.htmlElement.appendChild(child.htmlElement);
            }
        } else if (typeof children === "function") {
            children();
        }

        dom._unbindParent(this.htmlElement);
    }

    _addToParent() {
        const currentParent = dom._getCurrentParent();
        if (currentParent !== undefined) {
            currentParent.appendChild(this.htmlElement);
        }
    }

    _setter(scope, property, onAssign) {
        scope["_" + property] = scope[property];
        if (onAssign !== undefined) {
            onAssign.bind(scope);
        }
        onAssign(scope[property]);
        Object.defineProperty(scope, property, {
            get: () => scope["_" + property],
            set: (value) => {
                scope["_" + property] = value;
                if (onAssign !== undefined) {
                    onAssign(value);
                }
            }
        });
        return scope[property];
    }

    _passThrough(scopeA, propertyA, scopeB, propertyB, onAssign) {
        if (onAssign !== undefined) {
            onAssign.bind(scopeA);
        }
        this._setter(scopeA, propertyA, (value) => {
            scopeB[propertyB] = value;
            if (onAssign !== undefined) {
                onAssign(value);
            }
        });
    }

    _passThroughCss(scopeA, propertyA, scopeB, propertyB, onAssign) {
        if (onAssign !== undefined) {
            onAssign.bind(scopeA);
        }
        this._setter(scopeA, propertyA, (value) => {
            if (typeof value === "string" && value.indexOf("calc(") < 0 && StringUtil.includesAny(value, ["+", "-", "*", "/"]) === true) {
                value = `calc(${value})`;
            }
            scopeB[propertyB] = value;
            if (onAssign !== undefined) {
                onAssign(value);
            }
        });
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {styleType} style @param {childrenType} children */
export default (style = {}, children = []) => {
    return new DomElement(style, children);
};

// Export the class as well so that it can be extended
export {
    DomElement
}