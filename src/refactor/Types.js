/** @typedef {"none" | "foreground" | "background" | "primary" | "secondary" | "accent"} colorsType */

/** @typedef {"light" | "normal" | "dark"} shadeType */

/** @typedef {{x: number, y: number} | number} anchorType */

/** @typedef {[]|Function} childrenType */

/** @typedef {number | "px" | "em" | "rem" | "%" | "vh" | "vw" | "vmin" | "vmax"} styleValueType */

/**
 * @typedef {Object} styleType - A type with different style properties
 * @property {colorsType} color - The color for the element
 * @property {shadeType} shade - The shade of the color for the element
 * @property {anchorType} anchor Affects the position of the element inside it's parent, x controls the horizontal position and y controls the vertical position
 * * {x: number, y: number} - If one of the properties is not set then it will use 0 for it
 * * number - It will use the value for both x and y
 * @property {styleValueType} width - The css width of the element
 * @property {styleValueType} height - The css height of the element
 */