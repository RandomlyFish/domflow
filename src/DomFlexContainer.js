import {DomElement, DomElementBuilder} from "./DomElement";
import Enum from "./types/Enum";

export default class DomFlexContainer extends DomElement {

    constructor(htmlElement) {
        super(htmlElement);

        /** @type {"default" | "row" | "column"} */
        this.direction = "default";

        /** @type {"default" | "reverse"} */
        this.order = "default";

        /** @type {"default" | "start" | "center" | "end"} */
        this.justify = "default";

        /** @type {"default" | "between" | "around" | "evenly"} */
        this.space = "default";

        /** @type {"default" | "start" | "center" | "end"} */
        this.align = "default";

        const updateDirection = (direction, order) => {
            if (direction === "" && order === "") {
                this.htmlElement.style.flexDirection = "";
                return;
            }
            let directionValue = direction || "row";
            if (order !== "") {
                directionValue += "-" + order;
            }
            this.htmlElement.style.flexDirection = directionValue;
        }

        const directionEnum = new Enum(this, "direction", {"default": "", "row": "row", "column": "column"}, value => {
            updateDirection(value, orderEnum.value);
        });

        const orderEnum = new Enum(this, "order", {"default": "", "reverse": "reverse"}, value => {
            updateDirection(directionEnum.value, value);
        });

        new Enum(this, "justify", {"default": "", "start": "flex-start", "center": "center", "end": "flex-end"}, value => {
            if (this.space !== "default") {
                return;
            }
            this.htmlElement.style.justifyContent = value;
        });

        new Enum(this, "space", {"default": "", "around": "space-around", "between": "space-between", "evenly": "space-evenly"}, value => {
            if (value !== "") {
                this.htmlElement.style.justifyContent = value;
            } else if (this.justify !== "default") {
                this.justify = this.justify;
            } else {
                this.justify = "default";
            }
        });
    }
}

class DomFlexContainerBuilder extends DomElementBuilder {

    constructor() {
        super();
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {DomFlexContainer} */
        this._domElement;
    }

    _createElement() {
        const htmlElement = document.createElement("div");
        htmlElement.style.display = "flex";
        return new DomFlexContainer(htmlElement);
    }

    get directionRow() {
        this._domElement.direction = "row";
        return this;
    }
    get directionColumn() {
        this._domElement.direction = "column";
        return this;
    }
    get orderReverse() {
        this._domElement.order = "reverse";
        return this;
    }
    get justifyStart() {
        this._domElement.justify = "start";
        return this;
    }
    get justifyCenter() {
        this._domElement.justify = "center";
        return this;
    }
    get justifyEnd() {
        this._domElement.justify = "start";
        return this;
    }
    get spaceBetween() {
        this._domElement.space = "between";
        return this;
    }
    get spaceAround() {
        this._domElement.space = "around";
        return this;
    }
    get spaceEvenly() {
        this._domElement.space = "evenly";
        return this;
    }
    /* get stretch() { // Doesn't work unless the elements have flexGrow set
        this._justifyContent = "stretch";
        return this;
    } */
    get alignCenter() {
        this._domElement.align = "center";
        return this;
    }
    get alignEnd() {
        this._domElement.align = "end";
        return this;
    }

    /** @returns {DomFlexContainer} */
    create(style = {}, children = []) {
        return super.create(style, children);
    }
}

export {
    DomFlexContainer,
    DomFlexContainerBuilder
}