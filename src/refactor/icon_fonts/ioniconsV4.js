// import "../../styles/icon_fonts/ionicons.min.css"; // TODO: See if this can be imported using: "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"

import {DomIcon} from "../DomIcon";
import test from "../DomIcon";
import StringUtil from "@randomlyfish/utils/StringUtil";

class IoniconsV4Icon extends DomIcon {

    constructor(name, style) {
        super(name, style);

        this.colorClassPrefixes = ["color-"];

        /** @type {colorsType} The color type of the element, which is affected by shade */
        this.color = style.color || "foreground";

        const updateIcon = () => {
            if (this.icon === undefined || this.style === undefined) {
                return;
            }
            for (let c of this.htmlElement.classList) {
                if (StringUtil.includesAny(c, ["ion-md-", "ion-ios-", "ion-logo-"]) === true) {
                    this.htmlElement.classList.remove(c);
                }
            }
            let style = this.style;
            if (this.icon.indexOf("logo") < 0) {
                style += "-";
            } else {
                style = "";
            }
            this.htmlElement.classList.add("icon", "ion-" + style + this.icon);
        }

        /** @type {ioniconsV4IconType} */
        this.icon = name;
        this._setter(this, "icon", updateIcon);

        /** @type {ioniconsV4StyleType} */
        this.style = "md";
        this._setter(this, "style", updateIcon);

        Object.assign(this, style);
    }
}

// Export it by default as function so that you don't need to use the new keyword
/** @param {ioniconsV4IconType} icon @param {domIconStyleType} style */
export default (icon = "add", style = {}) => {
    return new IoniconsV4Icon(icon, style);
};

/**
 * @typedef {Object} domIconStyleTypeExtra - A type with different style properties
 * @property {ioniconsV4StyleType} style - The style to use for the icon, if this is not set then it will use the default style for the icon font
 * @property {styleValueType} size - The css font size used for changing the size of the icon
 */

/** 
 * @typedef {styleType & domIconStyleTypeExtra} domIconStyleType
 */

/** @typedef {"md" | "ios"} ioniconsV4StyleType */

/** @typedef {"add-circle-outline"|"add-circle"|"add"|"airplane"|"alarm"|"albums"|"alert"|"american-football"|"analytics"|"aperture"|"apps"|"appstore"|"archive"|
 "arrow-back"|"arrow-down"|"arrow-dropdown-circle"|"arrow-dropdown"|"arrow-dropleft-circle"|"arrow-dropleft"|"arrow-dropright-circle"|"arrow-dropright"|"arrow-dropup-circle"|
 "arrow-dropup"|"arrow-forward"|"arrow-round-back"|"arrow-round-down"|"arrow-round-forward"|"arrow-round-up"|"arrow-up"|"at"|"attach"|
 "backspace"|"barcode"|"baseball"|"basket"|"basketball"|"battery-charging"|"battery-dead"|"battery-full"|"beaker"|"bed"|"beer"|"bicycle"|"bluetooth"|
 "boat"|"body"|"bonfire"|"book"|"bookmark"|"bookmarks"|"bowtie"|"briefcase"|"browsers"|"brush"|"bug"|"build"|"bulb"|"bus"|"business"|
 "cafe"|"calculator"|"calendar"|"call"|"camera"|"car"|"card"|"cart"|"cash"|"cellular"|"chatboxes"|"chatbubbles"|"checkbox-outline"|"checkbox"|
 "checkmark-circle-outline"|"checkmark-circle"|"checkmark"|"clipboard"|"clock"|"close-circle-outline"|"close-circle"|"close"|
 "cloud-circle"|"cloud-done"|"cloud-download"|"cloud-outline"|"cloud-upload"|"cloud"|"cloudy-night"|"cloudy"|
 "code-download"|"code-working"|"code"|"cog"|"color-fill"|"color-filter"|"color-palette"|"color-wand"|
 "compass"|"construct"|"contact"|"contacts"|"contract"|"contrast"|"copy"|"create"|"crop"|"cube"|"cut"|"desktop"|"disc"|"document"|"done-all"|"download"|
 "easel"|"egg"|"exit"|"expand"|"eye-off"|"eye"| "fastforward"| "female"| "filing"| "film"| "finger-print"| "fitness"| "flag"| "flame"| 
 "flash-off"| "flash"| "flashlight"|"flask"|"flower"|"folder-open"|"folder"|"football"|"funnel"|
 "gift"| "git-branch"| "git-commit"| "git-compare"| "git-merge"| "git-network"| "git-pull-request"| "glasses"| "globe"| "grid"|
 "hammer"| "hand"| "happy"| "headset"| "heart-dislike"| "heart-empty"| "heart-half"| "heart"| "help-buoy"| "help-circle-outline"| "help-circle"| "help"| "home"| "hourglass"|
 "ice-cream"| "image"| "images"| "infinite"| "information-circle-outline"| "information-circle"| "information"|
 "jet"| "journal"| "key"| "keypad"| "laptop"| "leaf"| "link"| "list-box"| "list"| "locate"| "lock"| "log-in"| "log-out"|
 "magnet"| "mail-open"| "mail-unread"| "mail"| "male"| "man"| "map"| "medal"| "medical"| "medkit"| 
 "megaphone"| "menu"| "mic-off"| "mic"| "microphone"| "moon"| "more"| "move"| "musical-note"| "musical-notes"|
 "navigate"| "notifications-off"| "notifications-outline"| "notifications"| "nuclear"| "nutrition"| "open"| "options"| "outlet"|
 "paper-plane"| "paper"| "partly-sunny"| "pause"| "paw"| "people"| "person-add"| "person"| "phone-landscape"| "phone-portrait"| "photos"| 
 "pie"| "pin"| "pint"| "pizza"| "planet"| "play-circle"| "play"| "podium"| "power"| "pricetag"| "pricetags"| "print"| "pulse"|
 "qr-scanner"| "quote"| "radio-button-off"| "radio-button-on"| "radio"| "rainy"| "recording"| "redo"| "refresh-circle"| "refresh"| 
 "remove-circle-outline"| "remove-circle"| "remove"| "reorder"| "repeat"| "resize"| "restaurant"| "return-left"| "return-right"| "reverse-camera"| "rewind"|
 "ribbon"| "rocket"| "rose"| "sad"| "save"| "school"| "search"| "send"| "settings"| "share-alt"| "share"| "shirt"| "shuffle"|
 "skip-backward"| "skip-forward"| "snow"| "speedometer"| "square-outline"| "square"| "star-half"| "star-outline"| "star"| "stats"| 
 "stopwatch"| "subway"| "sunny"| "swap"| "switch"| "sync"| "tablet-landscape"| "tablet-portrait"| "tennisball"| "text"| "thermometer"| 
 "thumbs-down"| "thumbs-up"| "thunderstorm"| "time"| "timer"| "today"| "train"| "transgender"| "trash"| "trending-down"| "trending-up"| "trophy"| "tv"|
 "umbrella"| "undo"| "unlock"| "videocam"| "volume-high"| "volume-low"| "volume-mute"| "volume-off"| "walk"| "wallet"| "warning"| "watch"| "water"| "wifi"| "wine"| "woman"|
 "logo-android"| "logo-angular"| "logo-apple"| "logo-bitbucket"| "logo-bitcoin"| "logo-buffer"| "logo-chrome"| "logo-closed-captioning"| "logo-codepen"| "logo-css3"|
 "logo-designernews"| "logo-dribbble"| "logo-dropbox"| "logo-euro"| "logo-facebook"| "logo-flickr"| "logo-foursquare"| "logo-freebsd-devil"|
 "logo-game-controller-a"| "logo-game-controller-b"| "logo-github"| "logo-google"| "logo-googleplus"| "logo-hackernews"| "logo-html5"| 
 "logo-instagram"| "logo-ionic"| "logo-ionitron"| "logo-javascript"| "logo-linkedin"| "logo-markdown"| "logo-model-s"| "logo-no-smoking"| "logo-nodejs"| "logo-npm"|
 "logo-javascript"| "logo-linkedin"| "logo-markdown"| "logo-model-s"| "logo-no-smoking"| "logo-nodejs"| "logo-npm"| "logo-octocat"|
 "logo-pinterest"| "logo-playstation"| "logo-polymer"| "logo-python"| "logo-reddit"| "logo-rss"| "logo-sass"| "logo-skype"| "logo-slack"| "logo-snapchat"| "logo-steam"|
 "logo-tumblr"| "logo-tux"| "logo-twitch"| "logo-twitter"| "logo-usd"| "logo-vimeo"| "logo-vk"| "logo-whatsapp"| "logo-windows"| "logo-wordpress"|
 "logo-xbox"| "logo-xing"| "logo-yahoo"| "logo-yen"| "logo-youtube"
} ioniconsV4IconType */