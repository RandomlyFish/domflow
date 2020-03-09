export default class Point {
    constructor(x = 0, y = 0, callback = undefined) {
        this._x = x;
        this._y = y;

        this.callbacks = [];

        if (callback !== undefined) {
            if (Array.isArray(callback) === true) {
                this.callbacks = this.callbacks.concat(callback);
            } else {
                this.callbacks.push(callback);
            }
        }

        for (let callback of this.callbacks) {
            callback(this);
        }
    }

    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
        for (let callback of this.callbacks) {
            callback(this);
        }
    }

    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
        for (let callback of this.callbacks) {
            callback(this);
        }
    }

    /** Sets both x and y on the Point, if y is not included it will use x for both properties */
    set(x, y) {
        this._x = x; // Prevents the callbacks from getting triggered twice for both properties
        this.y = y || x;
    }

    /**
     * Returns an object with x and y properties based on a number or object
     * @param {number|{x: number = 0, y: number = 0}} point
     * @param point - point: number - Value for both x and y
     * @param point - point: {x, y} - Object with properties x, y or both. If one is not included, then it's set to 0
     */
    static parse(point) {
        if (typeof point === "number") {
            return {x: point, y: point};
        }

        point.x = point.x || 0;
        point.y = point.y || 0;

        return {x: point.x, y: point.y}
    }
}