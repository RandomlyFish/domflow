import {DomElement} from "./DomElement";

class DomVideo extends DomElement {
    /** @param {videoSourceType | videoSourceType[]} source @param {domVideoStyleType} style */
    constructor(source, style) {
        super(style);

        /** @type {HTMLVideoElement} */
        this.htmlElement;

        if (source !== undefined) {
            this.setSources(source);
        }

        /** @type {boolean} used to enable controls for the video element */
        this.controls = this._passThrough(this, "controls", this.htmlElement, "controls");
        this.controls = true;

        /** @type {boolean} used to make the video restart automatically when it ends */
        this.loop = this._passThrough(this, "loop", this.htmlElement, "loop");

        /** @type {boolean} used to make the video start as soon as it's source is loaded */
        this.autoplay = this._passThrough(this, "autoplay", this.htmlElement, "autoplay");

        /** @type {boolean} used to disable the sounds for the video */
        this.muted = this._passThrough(this, "muted", this.htmlElement, "muted");

        Object.assign(this, style); // TODO: Come up with a solution that doesn't require this to be called twice
    }

    /** @param {videoSourceType | videoSourceType[]} sources */
    setSources(sources) {
        this.removeSources();

        const typeForExtensions = {
            "webm": "video/webm",
            "mp4": "video/mp4",
            "ogv": "video/ogg",
            "ogg": "video/ogg"
        }
        
        if (Array.isArray(sources) === false) {
            sources = [sources];
        }

        for (let i = 0; i < sources.length; i++) {
            const sourceExtensionIndex = sources[i].lastIndexOf(".") + 1;
            const sourceExtension = sources[i].substring(sourceExtensionIndex);
    
            const sourceElement = document.createElement("source");
            sourceElement.setAttribute("src", sources[i]);
            sourceElement.setAttribute("type", typeForExtensions[sourceExtension]);
    
            this.htmlElement.appendChild(sourceElement);
        }

        this.htmlElement.load();
    }

    removeSources() {
        const children = Array.from(this.htmlElement.childNodes);
        // Using forEach directly on the childNodes when removing them does not work properly
        children.forEach(child => {
            if (child.tagName === "SOURCE") {
                this.htmlElement.removeChild(child);
            }
        });
    }

    /** @returns {HTMLVideoElement} */
    _createHtmlElement() {
        const element = document.createElement("video");
        element.classList.add("df");
        return element;
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {videoSourceType | videoSourceType[]} source @param {domVideoStyleType} style */
export default (source, style = {}) => {
    return new DomVideo(source, style);
};

/**
 * @typedef {Object} domVideoStyleTypeExtra - The extended style type for video elements
 * @property {boolean} controls - Used to enable controls for the video element
 * @property {boolean} autoplay - Used to make the video start as soon as it's source is loaded
 * @property {boolean} loop - Used to make the video restart automatically when it ends
 * @property {boolean} muted - Used to disable the sounds for the video
 */

/** 
 * @typedef {styleType & domVideoStyleTypeExtra} domVideoStyleType
 */