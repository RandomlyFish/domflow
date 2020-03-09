import dom from "./dom";
import Point from "./types/Point";
import StringUtil from "@randomlyfish/utils/StringUtil";

export default class DomElement {

    /** @param {HTMLElement} htmlElement */
    constructor(htmlElement) {
        this.htmlElement = htmlElement;

        this.colorClassPrefixes = ["bg-color-"];

        /** @type {"none" | "foreground" | "background" | "primary" | "secondary" | "accent"} */
        this.color = "background";

        /** @type {"normal" | "light" | "dark"} */
        this.shade = "normal";

        const updateColor = () => {
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

        this._setter(this, "color", updateColor);
        this._setter(this, "shade", updateColor);
    }

    _setter(scope, property, onAssign) {
        scope["_" + property] = scope[property];
        onAssign.bind(scope);
        onAssign(scope[property]);
        Object.defineProperty(scope, property, {
            get: () => scope["_" + property],
            set: (value) => {
                scope["_" + property] = value;
                onAssign(value);
            }
        });
        return scope[property];
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

    /** @param {DomElement} child */
    addChild(child) {
        this.htmlElement.appendChild(child.htmlElement);
        return child;
    }

    _addToParent() {
        const currentParent = dom._getCurrentParent();
        if (currentParent !== undefined) {
            currentParent.appendChild(this.htmlElement);
        }
    }

    /** @param {DomElement[] | function} children */
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

    _applyStyles(styles = {}) {
        const customProperties = ["id", "class", "anchor"];

        for (let style in styles) {
            if (customProperties.indexOf(style) >= 0) {
                continue;
            }

            const value = styles[style];
            this.htmlElement.style[style] = value;
            if (this._shouldAppendCalc(value)) {
                this.htmlElement.style[style] = "calc(" + value + ")";
            }
        }

        if (styles.class !== undefined) {
            if (Array.isArray(styles.class) === false) {
                styles.class = [styles.class];
            }
            for (let c of styles.class) {
                this.htmlElement.classList.add(c);
            }
        }
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

    // TODO: Create DomGrid similar to DomFlex
    /* _applyGrid(layout = {}) {
        if (layout.grid === undefined || layout.grid === false) return;
        this.childContainer.style.display = "grid";
        this.childContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
        if (layout.grid === true) return;
    } */

    _shouldAppendCalc(value) {
        return typeof value === "string" && value.indexOf("calc(") < 0 && StringUtil.includesAny(value, ["+", "-", "*", "/"]) === true;
    }
}

class DomElementBuilder {

    constructor() {
        this._domElement = this._createElement();
        this._domElement.htmlElement.classList.add("dom-element");
    }

    _createElement() {
        const htmlElement = document.createElement("div");
        return new DomElement(htmlElement);
    }

    /** 
     * Sets the id for the element
     * @param {string} id 
     */
    setId(id) {
        this._domElement.htmlElement.id = id;
        return this;
    }

    /** 
     * Add one or more classes to the element
     * @param {...string} classes 
     */
    addClasses(...classes) {
        this._domElement.htmlElement.classList.add(...classes);
        return this;
    }

    get colorNone() {
        this._domElement.color = "none";
        return this;
    }
    get colorForeground() {
        this._domElement.color = "foreground";
        return this;
    }
    get colorBackground() {
        this._domElement.color = "background";
        return this;
    }
    get colorPrimary() {
        this._domElement.color = "primary";
        return this;
    }
    get colorSecondary() {
        this._domElement.color = "secondary";
        return this;
    }
    get colorAccent() {
        this._domElement.color = "accent";
        return this;
    }

    get shadeLight() {
        this._domElement.shade = "light";
        return this;
    }
    get shadeDark() {
        this._domElement.shade = "dark";
        return this;
    }

    /**
     * Creates and returns the DomElement
     * @param {{}} style - Used to set standard style properties such as width and height, as well as custom properties such as anchor
     * @param {DomElement[]|Function} children - Used to assign children to the element. Can either be an array of created DomElements or a function which creates DomElements
     */
    create(style = {}, children = []) {
        if (style.id !== undefined) {
            this._domElement.htmlElement.id = style.id;
        }

        this._domElement._applyStyles(style);

        if (style.anchor !== undefined) {
            this._domElement.anchor = style.anchor;
        }

        // For performance reason: it adds the children before adding itself to the parent, 
        // which results in all children of children being added before this is added to the DOM
        this._domElement._addChildren(children);
        this._domElement._addToParent();

        return this._domElement;
    }
}

export {
    DomElement,
    DomElementBuilder
}