export default class Enum {

    /**
     * 
     * @param {*} scope - The object that has the property
     * @param {string} property - The property that will be used for the enum
     * @param {{}} values - An object with key value pairs
     * @param {Function} onAssign - Callback for when the property is changed
     * @example
     * new Enum(this, "type", {"a": "t_a", "b": "t_b"}, value => {
     *      // if this.type is set to "a", value will be "t_a"
     *      // this.type can't be set to anything other than "a" or "b"
     * });
     */
    constructor(scope, property, values, onAssign) {
        const keys = Object.keys(values);
        let lastKey = scope[property];

        this.value = values[lastKey];

        onAssign.bind(scope);

        Object.defineProperty(scope, property, {
            get: () => lastKey,
            set: key => {
                if (keys.indexOf(key) < 0) {
                    console.warn("Unable to assign key for " + property + " enum: " + '"' + key + '"' + " is not a valid key");
                    return lastKey;
                }
                this.value = values[key];
                const lastValue = values[lastKey]
                lastKey = key; // It's important that lastKey is assigned before calling onAssign
                onAssign(this.value, lastValue);
                return key;
            }
        });
    }
}