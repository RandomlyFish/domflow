import {DomContainerBuilder} from "./DomContainer";
import {DomLayerBuilder} from "./DomLayer";
import {DomFlexContainerBuilder} from "./DomFlexContainer";
import {DomTextBuilder} from "./DomText";
import {DomButtonBuilder} from "./DomButton";
import {DomToggleBuilder} from "./DomToggle";

class Dom {
    constructor() {
        const style = document.createElement("style");
        style.type = 'text/css';
        style.innerHTML = ".dom-child-container { position: absolute; width: 100%; height: 100%; }";
        style.innerHTML = `
        .dom-anchored {
            position: absolute
        }
        .dom-layer {
            pointer-events: none
        }
        `
        // document.getElementsByTagName("head")[0].appendChild(style);

        // This is used to keep track on the parent that children should be added to
        // Any time a new element is created, it's added as the current parent with bindParent
        // After all the children have been added to it, it's removed with unbindParent
        this._currentParents = [];
    }

    /** Add a parent as the current parent, any elements that are created will be added to that parent */
    _bindParent(parent) {
        this._currentParents.push(parent);
    }

    /** Remove a parent from the parents hierarchy */
    _unbindParent(parent) {
        const lastParent = this._currentParents[this._currentParents.length - 1];
        if (parent !== lastParent) {
            throw ("Unable to unbind parent, parent does not match the last parent in the hierarchy");
        }
        this._currentParents.pop();
    }

    /** Returns the current parent to add children to */
    _getCurrentParent() {
        if (this._currentParents.length > 0) {
            return this._currentParents[this._currentParents.length - 1];
        } else {
            return undefined;
        }
    }

    /** Create a container */
    get container() {
        return new DomContainerBuilder();
    }

    /** Create a container that is overlayed on top of other elements and doesn't recive any pointer events */
    get layer() {
        return new DomLayerBuilder();
    }

    /** Create a flex container which allows greater control for creating horizontal or vertical layouts */
    get flexContainer() {
        return new DomFlexContainerBuilder();
    }

    /** Create a text element */
    get text() {
        return new DomTextBuilder();
    }

    /** Create a button element */
    get button() {
        return new DomButtonBuilder();
    }

    /** Create a toggle element */
    get toggle() {
        return new DomToggleBuilder();
    }
}

const dom = new Dom();
export default dom;