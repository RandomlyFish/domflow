class DomManager {
    
    constructor() {
        // This is used to keep track on the parent that children should be added to
        this._currentParents = [];
    }

    /** 
     * Add a parent as the current parent, any elements that are created will be added to that parent 
     * @param {HTMLElement} parent
     */
    _bindParent(parent) {
        this._currentParents.push(parent);
    }

    /** 
     * Remove a parent from the list of parents 
     * @param {HTMLElement} parent
     */
    _unbindParent(parent) {
        const lastParent = this._currentParents[this._currentParents.length - 1];
        if (parent !== lastParent) {
            throw ("Unable to unbind parent, parent does not match the last parent in the hierarchy");
        }
        this._currentParents.pop();
    }

    /** 
     * Returns the current parent to add children to 
     * @returns {HTMLElement}
     */
    _getCurrentParent() {
        if (this._currentParents.length > 0) {
            return this._currentParents[this._currentParents.length - 1];
        } else {
            return undefined;
        }
    }
}

const domManager = new DomManager();
export default domManager;