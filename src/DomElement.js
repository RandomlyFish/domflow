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
        style = JSON.parse(JSON.stringify(style)); // Clone the style object so that it can be modified without modifying the original
        
        this.htmlElement = this._createHtmlElement();

        this.colorClassPrefixes = ["bg-color-"];
        
        const updateColor = () => {
            if (this.color === undefined || this.shade === undefined) {
                return;
            }

            for (let i = 0; i < this.classes.length; i++) {
                if (this.classes[i].indexOf("color-") === 0 || this.classes[i].indexOf("bg-color-") === 0) {
                    this.classes.splice(i, 1);
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
            this.classes.push(colorClass);
        }

        /** @type {string[]} Strings used for selecting the element with css */
        this.classes = [];
        this.htmlElement.classList.forEach(c => {
            this.classes.push(c);
        });
        this._observableArray(this, "classes", value => {
            this.htmlElement.className = value.join(" ");
        });

        /** @type {displayType} The way the element will be displayed on the page */
        this.display = this.getDefaultStyles().display;
        this._setter(this, "display", value => {
            if (value === this.getDefaultStyles().display) {
                this.htmlElement.style.display = "";
            } else {
                if (value === "inline") {
                    value = this._getInlineDisplay();
                }
                this.htmlElement.style.display = value;
            }
        });

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

        // Ensure that we don't overrwite the existing classes with the ones from the style object
        if (style.classes !== undefined) {
            style.classes = this.classes.concat(style.classes);
        }

        Object.assign(this, style);

        this._addChildren(children); // TODO: Make these as functions on dom
        this._addToParent();
    }

    /** 
     * @type {string} The string to identify the element, used for selecting the element with css     
     * Multiple elements should not share the same id 
     */
    get id() {
        return this.htmlElement.id;
    }
    set id(value) {
        this.htmlElement.id = value;
    }

    /** @type {marginType} The extra space around the element */
    get margin() {
        if (this["_" + "margin"] === undefined) {
            this["_" + "margin"] = {left: 0, right: 0, top: 0, bottom: 0};
        }

        return this["_" + "margin"];
    }
    set margin(value) {
        if (typeof value !== "object") {
            this["_" + "margin"] = {left: value, right: value, top: value, bottom: value};
        } else {
            Object.assign(this.margin, value);
        }

        this.htmlElement.style.marginLeft = this.margin.left;
        this.htmlElement.style.marginRight = this.margin.right;
        this.htmlElement.style.marginTop = this.margin.top;
        this.htmlElement.style.marginBottom = this.margin.bottom;
        this.anchor = this.anchor; // Refreshes the anchor if it's enabled
    }

    get anchor() {
        return this._anchor;
    }
    set anchor(value) {
        if (value === undefined) {
            return; // TODO: make this disable the anchor
        }
        let parsedPoint = Point.parse(value);
        if (this._anchor === undefined) {
            this._anchor = new Point(parsedPoint.x, parsedPoint.y, this._applyAnchor.bind(this));
        } else {
            this._anchor.set(parsedPoint.x, parsedPoint.y);
        }
    }

    getDefaultStyles() {
        return {
            display: "inline"
        }
    }

    _getInlineDisplay() {
        return "inline-block";
    }

    /** @returns {HTMLDivElement} */
    _createHtmlElement() {
        const element = document.createElement("div");
        element.classList.add("df");
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

    _applyAnchor(value) {
        const element = this.htmlElement;

        element.style.left = "";
        element.style.top = "";
        element.style.transform = "";
        if (this.classes.indexOf("anchored") < 0) {
            this.classes.push("anchored");
        }
        
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

    _observableArray(scope, propertyName, onChange) {
        let array = [];
        if (scope[propertyName] !== undefined) {
            array = scope[propertyName];
        }
        const proxy = new Proxy(array, {
            // called whenever the array changes
            set: (target, property, value, receiver) => {
                target[property] = value;
                onChange(array);
                return true;
            }
        });
        Object.defineProperty(scope, propertyName, {
            get: () => proxy,
            set: (value) => {
                proxy.length = 0;
                for (let i = 0; i < value.length; i++) {
                    proxy.push(value[i]);
                }
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