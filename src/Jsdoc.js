/** @typedef {"none" | "foreground" | "background" | "primary" | "secondary" | "accent"} colorsType The color for the element */

/** @typedef {"light" | "normal" | "dark"} shadeType The shade of the color for the element */

/** @typedef {{x: number, y: number} | number} anchorType
 * Affects the position of the element inside it's parent, x controls the horizontal position and y controls the vertical position
 * * {x: number, y: number} - If one of the properties is not set then it will use 0 for it
 * * number - It will use the value for both x and y
 */

/** @typedef {[] | Function} childrenType An array with elements or a function that creates elements */

/** @typedef {string} videoSourceType A string or multiple strings for source urls */

/** @typedef {number | "px" | "em" | "rem" | "%" | "vh" | "vw" | "vmin" | "vmax"} styleValueType */

/** @typedef {"inline" | "block" | "none"} displayType The way the element will be displayed on the page */

/** @typedef {{left: styleValueType, right: styleValueType, top: styleValueType, bottom: styleValueType}} marginType The extra space around the element */

/**
 * @typedef {Object} styleType - A type with different style properties
 * @property {string} id - The string to identify the element, used for selecting the element with css     
 * Multiple elements should not share the same id
 * @property {string[]} classes - Strings used for selecting the element with css
 * @property {displayType} display - The way the element will be displayed on the page
 * @property {colorsType} color - The color for the element
 * @property {shadeType} shade - The shade of the color for the element
 * @property {anchorType} anchor - Affects the position of the element inside it's parent, x controls the horizontal position and y controls the vertical position
 * * {x: number, y: number} - If one of the properties is not set then it will use 0 for it
 * * number - It will use the value for both x and y
 * @property {styleValueType} width - The css width of the element
 * @property {styleValueType} height - The css height of the element
 * @property {styleValueType | marginType} margin - The extra space around the element
 */