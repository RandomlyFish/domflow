import "./Jsdoc";
import "./styles/styles.css";
import "./styles/input.css";
import "./styles/color.css";

import domManager from "./domManager";
import Point from "./types/Point";
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
            
            if (StringUtil.includesAny(this.color, ["none", "foreground", "background", "primary", "secondary", "accent"]) === false) {
                if (this.colorClassPrefixes[0] === "bg-color-") {
                    this.htmlElement.style.backgroundColor = this.color;
                } else {
                    this.htmlElement.style.color = this.color;
                }
                return;
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
    
    get anchor() {
        return this._anchor;
    }
    set anchor(value) {
        let parsedPoint = Point.parse(value);
        if (this._anchor === undefined) {
            this._anchor = new Point(parsedPoint.x, parsedPoint.y, this._applyAnchor.bind(this));
        } else {
            this._anchor.set(parsedPoint.x, parsedPoint.y);
        }
    }

    /** @returns {HTMLDivElement} */
    _createHtmlElement() {
        const element = document.createElement("div");
        element.classList.add("dom-element");
        return element;
    }

    _addChildren(children = []) {
        domManager._bindParent(this.htmlElement);

        if (Array.isArray(children) === true) {
            for (let child of children) {
                this.htmlElement.appendChild(child.htmlElement);
            }
        } else if (typeof children === "function") {
            children();
        }

        domManager._unbindParent(this.htmlElement);
    }

    _addToParent() {
        const currentParent = domManager._getCurrentParent();
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

    _applyAnchor(value) {
        const element = this.htmlElement;

        element.style.left = "";
        element.style.top = "";
        element.style.transform = "";
        element.classList.add("anchored");

        const marginTop = parseFloat(element.style.marginTop) || 0;
        const marginBottom = parseFloat(element.style.marginBottom) || 0;
        const marginLeft = parseFloat(element.style.marginLeft) || 0;
        const marginRight = parseFloat(element.style.marginRight) || 0;
        const marginPaddingX = (marginLeft + marginRight) * value.x;
        const marginPaddingY = (marginTop + marginBottom) * value.y;

        if (value.x > 0) {
            element.style.left = value.x * 100 + "%";
            element.style.transform = "translateX(-" + element.style.left + ")";
            if (marginPaddingX > 0) {
                element.style.transform += "translateX(-" + marginPaddingX + "px)";
            }
        }
        if (value.y > 0) {
            element.style.top = value.y * 100 + "%";
            element.style.transform += "translateY(-" + element.style.top + ")";
            if (marginPaddingY > 0) {
                element.style.transform += "translateY(-" + marginPaddingY + "px)";
            }
        }
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