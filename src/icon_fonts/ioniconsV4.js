// https://ionicons.com/v4/

import StringUtil from "@randomlyfish/utils/StringUtil";
import DomIcon from "../DomIcon";
import {DomIconBuilder} from "../DomIcon";

class IoniconV4 {

    constructor () {
        this.styles = {md: "md", ios: "ios"};
        this.defaultStyle = this.styles.md;
    }

    // #region icons
    get addCircleOutline() {return this._setIcon("add-circle-outline")}
    get addCircle() {return this._setIcon("add-circle")}
    get add() {return this._setIcon("add")}
    get airplane() {return this._setIcon("airplane")}
    get alarm() {return this._setIcon("alarm")}
    get albums() {return this._setIcon("albums")}
    get alert() {return this._setIcon("alert")}
    get americanFootball() {return this._setIcon("american-football")}
    get analytics() {return this._setIcon("analytics")}
    get aperture() {return this._setIcon("aperture")}
    get apps() {return this._setIcon("apps")}
    get appstore() {return this._setIcon("appstore")}
    get archive() {return this._setIcon("archive")}
    get arrowBack() {return this._setIcon("arrow-back")}
    get arrowDown() {return this._setIcon("arrow-down")}
    get arrowDropdownCircle() {return this._setIcon("arrow-dropdown-circle")}
    get arrowDropdown() {return this._setIcon("arrow-dropdown")}
    get arrowDropleftCircle() {return this._setIcon("arrow-dropleft-circle")}
    get arrowDropleft() {return this._setIcon("arrow-dropleft")}
    get arrowDroprightCircle() {return this._setIcon("arrow-dropright-circle")}
    get arrowDropright() {return this._setIcon("arrow-dropright")}
    get arrowDropupCircle() {return this._setIcon("arrow-dropup-circle")}
    get arrowDropup() {return this._setIcon("arrow-dropup")}
    get arrowForward() {return this._setIcon("arrow-forward")}
    get arrowRoundBack() {return this._setIcon("arrow-round-back")}
    get arrowRoundDown() {return this._setIcon("arrow-round-down")}
    get arrowRoundForward() {return this._setIcon("arrow-round-forward")}
    get arrowRoundUp() {return this._setIcon("arrow-round-up")}
    get arrowUp() {return this._setIcon("arrow-up")}
    get at() {return this._setIcon("at")}
    get attach() {return this._setIcon("attach")}
    get backspace() {return this._setIcon("backspace")}
    get barcode() {return this._setIcon("barcode")}
    get baseball() {return this._setIcon("baseball")}
    get basket() {return this._setIcon("basket")}
    get basketball() {return this._setIcon("basketball")}
    get batteryCharging() {return this._setIcon("battery-charging")}
    get batteryDead() {return this._setIcon("battery-dead")}
    get batteryFull() {return this._setIcon("battery-full")}
    get beaker() {return this._setIcon("beaker")}
    get bed() {return this._setIcon("bed")}
    get beer() {return this._setIcon("beer")}
    get bicycle() {return this._setIcon("bicycle")}
    get bluetooth() {return this._setIcon("bluetooth")}
    get boat() {return this._setIcon("boat")}
    get body() {return this._setIcon("body")}
    get bonfire() {return this._setIcon("bonfire")}
    get book() {return this._setIcon("book")}
    get bookmark() {return this._setIcon("bookmark")}
    get bookmarks() {return this._setIcon("bookmarks")}
    get bowtie() {return this._setIcon("bowtie")}
    get briefcase() {return this._setIcon("briefcase")}
    get browsers() {return this._setIcon("browsers")}
    get brush() {return this._setIcon("brush")}
    get bug() {return this._setIcon("bug")}
    get build() {return this._setIcon("build")}
    get bulb() {return this._setIcon("bulb")}
    get bus() {return this._setIcon("bus")}
    get business() {return this._setIcon("business")}
    get cafe() {return this._setIcon("cafe")}
    get calculator() {return this._setIcon("calculator")}
    get calendar() {return this._setIcon("calendar")}
    get call() {return this._setIcon("call")}
    get camera() {return this._setIcon("camera")}
    get car() {return this._setIcon("car")}
    get card() {return this._setIcon("card")}
    get cart() {return this._setIcon("cart")}
    get cash() {return this._setIcon("cash")}
    get cellular() {return this._setIcon("cellular")}
    get chatboxes() {return this._setIcon("chatboxes")}
    get chatbubbles() {return this._setIcon("chatbubbles")}
    get checkboxOutline() {return this._setIcon("checkbox-outline")}
    get checkbox() {return this._setIcon("checkbox")}
    get checkmarkCircleOutline() {return this._setIcon("checkmark-circle-outline")}
    get checkmarkCircle() {return this._setIcon("checkmark-circle")}
    get checkmark() {return this._setIcon("checkmark")}
    get clipboard() {return this._setIcon("clipboard")}
    get clock() {return this._setIcon("clock")}
    get closeCircleOutline() {return this._setIcon("close-circle-outline")}
    get closeCircle() {return this._setIcon("close-circle")}
    get close() {return this._setIcon("close")}
    get cloudCircle() {return this._setIcon("cloud-circle")}
    get cloudDone() {return this._setIcon("cloud-done")}
    get cloudDownload() {return this._setIcon("cloud-download")}
    get cloudOutline() {return this._setIcon("cloud-outline")}
    get cloudUpload() {return this._setIcon("cloud-upload")}
    get cloud() {return this._setIcon("cloud")}
    get cloudyNight() {return this._setIcon("cloudy-night")}
    get cloudy() {return this._setIcon("cloudy")}
    get codeDownload() {return this._setIcon("code-download")}
    get codeWorking() {return this._setIcon("code-working")}
    get code() {return this._setIcon("code")}
    get cog() {return this._setIcon("cog")}
    get colorFill() {return this._setIcon("color-fill")}
    get colorFilter() {return this._setIcon("color-filter")}
    get colorPalette() {return this._setIcon("color-palette")}
    get colorWand() {return this._setIcon("color-wand")}
    get compass() {return this._setIcon("compass")}
    get construct() {return this._setIcon("construct")}
    get contact() {return this._setIcon("contact")}
    get contacts() {return this._setIcon("contacts")}
    get contract() {return this._setIcon("contract")}
    get contrast() {return this._setIcon("contrast")}
    get copy() {return this._setIcon("copy")}
    get create() {return this._setIcon("create")}
    get crop() {return this._setIcon("crop")}
    get cube() {return this._setIcon("cube")}
    get cut() {return this._setIcon("cut")}
    get desktop() {return this._setIcon("desktop")}
    get disc() {return this._setIcon("disc")}
    get document() {return this._setIcon("document")}
    get doneAll() {return this._setIcon("done-all")}
    get download() {return this._setIcon("download")}
    get easel() {return this._setIcon("easel")}
    get egg() {return this._setIcon("egg")}
    get exit() {return this._setIcon("exit")}
    get expand() {return this._setIcon("expand")}
    get eyeOff() {return this._setIcon("eye-off")}
    get eye() {return this._setIcon("eye")}
    get fastforward() {return this._setIcon("fastforward")}
    get female() {return this._setIcon("female")}
    get filing() {return this._setIcon("filing")}
    get film() {return this._setIcon("film")}
    get fingerPrint() {return this._setIcon("finger-print")}
    get fitness() {return this._setIcon("fitness")}
    get flag() {return this._setIcon("flag")}
    get flame() {return this._setIcon("flame")}
    get flashOff() {return this._setIcon("flash-off")}
    get flash() {return this._setIcon("flash")}
    get flashlight() {return this._setIcon("flashlight")}
    get flask() {return this._setIcon("flask")}
    get flower() {return this._setIcon("flower")}
    get folderOpen() {return this._setIcon("folder-open")}
    get folder() {return this._setIcon("folder")}
    get football() {return this._setIcon("football")}
    get funnel() {return this._setIcon("funnel")}
    get gift() {return this._setIcon("gift")}
    get gitBranch() {return this._setIcon("git-branch")}
    get gitCommit() {return this._setIcon("git-commit")}
    get gitCompare() {return this._setIcon("git-compare")}
    get gitMerge() {return this._setIcon("git-merge")}
    get gitNetwork() {return this._setIcon("git-network")}
    get gitPullRequest() {return this._setIcon("git-pull-request")}
    get glasses() {return this._setIcon("glasses")}
    get globe() {return this._setIcon("globe")}
    get grid() {return this._setIcon("grid")}
    get hammer() {return this._setIcon("hammer")}
    get hand() {return this._setIcon("hand")}
    get happy() {return this._setIcon("happy")}
    get headset() {return this._setIcon("headset")}
    get heartDislike() {return this._setIcon("heart-dislike")}
    get heartEmpty() {return this._setIcon("heart-empty")}
    get heartHalf() {return this._setIcon("heart-half")}
    get heart() {return this._setIcon("heart")}
    get helpBuoy() {return this._setIcon("help-buoy")}
    get helpCircleOutline() {return this._setIcon("help-circle-outline")}
    get helpCircle() {return this._setIcon("help-circle")}
    get help() {return this._setIcon("help")}
    get home() {return this._setIcon("home")}
    get hourglass() {return this._setIcon("hourglass")}
    get iceCream() {return this._setIcon("ice-cream")}
    get image() {return this._setIcon("image")}
    get images() {return this._setIcon("images")}
    get infinite() {return this._setIcon("infinite")}
    get informationCircleOutline() {return this._setIcon("information-circle-outline")}
    get informationCircle() {return this._setIcon("information-circle")}
    get information() {return this._setIcon("information")}
    get jet() {return this._setIcon("jet")}
    get journal() {return this._setIcon("journal")}
    get key() {return this._setIcon("key")}
    get keypad() {return this._setIcon("keypad")}
    get laptop() {return this._setIcon("laptop")}
    get leaf() {return this._setIcon("leaf")}
    get link() {return this._setIcon("link")}
    get listBox() {return this._setIcon("list-box")}
    get list() {return this._setIcon("list")}
    get locate() {return this._setIcon("locate")}
    get lock() {return this._setIcon("lock")}
    get logIn() {return this._setIcon("log-in")}
    get logOut() {return this._setIcon("log-out")}
    get magnet() {return this._setIcon("magnet")}
    get mailOpen() {return this._setIcon("mail-open")}
    get mailUnread() {return this._setIcon("mail-unread")}
    get mail() {return this._setIcon("mail")}
    get male() {return this._setIcon("male")}
    get man() {return this._setIcon("man")}
    get map() {return this._setIcon("map")}
    get medal() {return this._setIcon("medal")}
    get medical() {return this._setIcon("medical")}
    get medkit() {return this._setIcon("medkit")}
    get megaphone() {return this._setIcon("megaphone")}
    get menu() {return this._setIcon("menu")}
    get micOff() {return this._setIcon("mic-off")}
    get mic() {return this._setIcon("mic")}
    get microphone() {return this._setIcon("microphone")}
    get moon() {return this._setIcon("moon")}
    get more() {return this._setIcon("more")}
    get move() {return this._setIcon("move")}
    get musicalNote() {return this._setIcon("musical-note")}
    get musicalNotes() {return this._setIcon("musical-notes")}
    get navigate() {return this._setIcon("navigate")}
    get notificationsOff() {return this._setIcon("notifications-off")}
    get notificationsOutline() {return this._setIcon("notifications-outline")}
    get notifications() {return this._setIcon("notifications")}
    get nuclear() {return this._setIcon("nuclear")}
    get nutrition() {return this._setIcon("nutrition")}
    get open() {return this._setIcon("open")}
    get options() {return this._setIcon("options")}
    get outlet() {return this._setIcon("outlet")}
    get paperPlane() {return this._setIcon("paper-plane")}
    get paper() {return this._setIcon("paper")}
    get partlySunny() {return this._setIcon("partly-sunny")}
    get pause() {return this._setIcon("pause")}
    get paw() {return this._setIcon("paw")}
    get people() {return this._setIcon("people")}
    get personAdd() {return this._setIcon("person-add")}
    get person() {return this._setIcon("person")}
    get phoneLandscape() {return this._setIcon("phone-landscape")}
    get phonePortrait() {return this._setIcon("phone-portrait")}
    get photos() {return this._setIcon("photos")}
    get pie() {return this._setIcon("pie")}
    get pin() {return this._setIcon("pin")}
    get pint() {return this._setIcon("pint")}
    get pizza() {return this._setIcon("pizza")}
    get planet() {return this._setIcon("planet")}
    get playCircle() {return this._setIcon("play-circle")}
    get play() {return this._setIcon("play")}
    get podium() {return this._setIcon("podium")}
    get power() {return this._setIcon("power")}
    get pricetag() {return this._setIcon("pricetag")}
    get pricetags() {return this._setIcon("pricetags")}
    get print() {return this._setIcon("print")}
    get pulse() {return this._setIcon("pulse")}
    get qrScanner() {return this._setIcon("qr-scanner")}
    get quote() {return this._setIcon("quote")}
    get radioButtonOff() {return this._setIcon("radio-button-off")}
    get radioButtonOn() {return this._setIcon("radio-button-on")}
    get radio() {return this._setIcon("radio")}
    get rainy() {return this._setIcon("rainy")}
    get recording() {return this._setIcon("recording")}
    get redo() {return this._setIcon("redo")}
    get refreshCircle() {return this._setIcon("refresh-circle")}
    get refresh() {return this._setIcon("refresh")}
    get removeCircleOutline() {return this._setIcon("remove-circle-outline")}
    get removeCircle() {return this._setIcon("remove-circle")}
    get remove() {return this._setIcon("remove")}
    get reorder() {return this._setIcon("reorder")}
    get repeat() {return this._setIcon("repeat")}
    get resize() {return this._setIcon("resize")}
    get restaurant() {return this._setIcon("restaurant")}
    get returnLeft() {return this._setIcon("return-left")}
    get returnRight() {return this._setIcon("return-right")}
    get reverseCamera() {return this._setIcon("reverse-camera")}
    get rewind() {return this._setIcon("rewind")}
    get ribbon() {return this._setIcon("ribbon")}
    get rocket() {return this._setIcon("rocket")}
    get rose() {return this._setIcon("rose")}
    get sad() {return this._setIcon("sad")}
    get save() {return this._setIcon("save")}
    get school() {return this._setIcon("school")}
    get search() {return this._setIcon("search")}
    get send() {return this._setIcon("send")}
    get settings() {return this._setIcon("settings")}
    get shareAlt() {return this._setIcon("share-alt")}
    get share() {return this._setIcon("share")}
    get shirt() {return this._setIcon("shirt")}
    get shuffle() {return this._setIcon("shuffle")}
    get skipBackward() {return this._setIcon("skip-backward")}
    get skipForward() {return this._setIcon("skip-forward")}
    get snow() {return this._setIcon("snow")}
    get speedometer() {return this._setIcon("speedometer")}
    get squareOutline() {return this._setIcon("square-outline")}
    get square() {return this._setIcon("square")}
    get starHalf() {return this._setIcon("star-half")}
    get starOutline() {return this._setIcon("star-outline")}
    get star() {return this._setIcon("star")}
    get stats() {return this._setIcon("stats")}
    get stopwatch() {return this._setIcon("stopwatch")}
    get subway() {return this._setIcon("subway")}
    get sunny() {return this._setIcon("sunny")}
    get swap() {return this._setIcon("swap")}
    get switch() {return this._setIcon("switch")}
    get sync() {return this._setIcon("sync")}
    get tabletLandscape() {return this._setIcon("tablet-landscape")}
    get tabletPortrait() {return this._setIcon("tablet-portrait")}
    get tennisball() {return this._setIcon("tennisball")}
    get text() {return this._setIcon("text")}
    get thermometer() {return this._setIcon("thermometer")}
    get thumbsDown() {return this._setIcon("thumbs-down")}
    get thumbsUp() {return this._setIcon("thumbs-up")}
    get thunderstorm() {return this._setIcon("thunderstorm")}
    get time() {return this._setIcon("time")}
    get timer() {return this._setIcon("timer")}
    get today() {return this._setIcon("today")}
    get train() {return this._setIcon("train")}
    get transgender() {return this._setIcon("transgender")}
    get trash() {return this._setIcon("trash")}
    get trendingDown() {return this._setIcon("trending-down")}
    get trendingUp() {return this._setIcon("trending-up")}
    get trophy() {return this._setIcon("trophy")}
    get tv() {return this._setIcon("tv")}
    get umbrella() {return this._setIcon("umbrella")}
    get undo() {return this._setIcon("undo")}
    get unlock() {return this._setIcon("unlock")}
    get videocam() {return this._setIcon("videocam")}
    get volumeHigh() {return this._setIcon("volume-high")}
    get volumeLow() {return this._setIcon("volume-low")}
    get volumeMute() {return this._setIcon("volume-mute")}
    get volumeOff() {return this._setIcon("volume-off")}
    get walk() {return this._setIcon("walk")}
    get wallet() {return this._setIcon("wallet")}
    get warning() {return this._setIcon("warning")}
    get watch() {return this._setIcon("watch")}
    get water() {return this._setIcon("water")}
    get wifi() {return this._setIcon("wifi")}
    get wine() {return this._setIcon("wine")}
    get woman() {return this._setIcon("woman")}
    get logoAndroid() {return this._setIcon("logo-android")}
    get logoAngular() {return this._setIcon("logo-angular")}
    get logoApple() {return this._setIcon("logo-apple")}
    get logoBitbucket() {return this._setIcon("logo-bitbucket")}
    get logoBitcoin() {return this._setIcon("logo-bitcoin")}
    get logoBuffer() {return this._setIcon("logo-buffer")}
    get logoChrome() {return this._setIcon("logo-chrome")}
    get logoClosedCaptioning() {return this._setIcon("logo-closed-captioning")}
    get logoCodepen() {return this._setIcon("logo-codepen")}
    get logoCss3() {return this._setIcon("logo-css3")}
    get logoDesignernews() {return this._setIcon("logo-designernews")}
    get logoDribbble() {return this._setIcon("logo-dribbble")}
    get logoDropbox() {return this._setIcon("logo-dropbox")}
    get logoEuro() {return this._setIcon("logo-euro")}
    get logoFacebook() {return this._setIcon("logo-facebook")}
    get logoFlickr() {return this._setIcon("logo-flickr")}
    get logoFoursquare() {return this._setIcon("logo-foursquare")}
    get logoFreebsdDevil() {return this._setIcon("logo-freebsd-devil")}
    get logoGameControllerA() {return this._setIcon("logo-game-controller-a")}
    get logoGameControllerB() {return this._setIcon("logo-game-controller-b")}
    get logoGithub() {return this._setIcon("logo-github")}
    get logoGoogle() {return this._setIcon("logo-google")}
    get logoGoogleplus() {return this._setIcon("logo-googleplus")}
    get logoHackernews() {return this._setIcon("logo-hackernews")}
    get logoHtml5() {return this._setIcon("logo-html5")}
    get logoInstagram() {return this._setIcon("logo-instagram")}
    get logoIonic() {return this._setIcon("logo-ionic")}
    get logoIonitron() {return this._setIcon("logo-ionitron")}
    get logoJavascript() {return this._setIcon("logo-javascript")}
    get logoLinkedin() {return this._setIcon("logo-linkedin")}
    get logoMarkdown() {return this._setIcon("logo-markdown")}
    get logoModelS() {return this._setIcon("logo-model-s")}
    get logoNoSmoking() {return this._setIcon("logo-no-smoking")}
    get logoNodejs() {return this._setIcon("logo-nodejs")}
    get logoNpm() {return this._setIcon("logo-npm")}
    get logoOctocat() {return this._setIcon("logo-octocat")}
    get logoPinterest() {return this._setIcon("logo-pinterest")}
    get logoPlaystation() {return this._setIcon("logo-playstation")}
    get logoPolymer() {return this._setIcon("logo-polymer")}
    get logoPython() {return this._setIcon("logo-python")}
    get logoReddit() {return this._setIcon("logo-reddit")}
    get logoRss() {return this._setIcon("logo-rss")}
    get logoSass() {return this._setIcon("logo-sass")}
    get logoSkype() {return this._setIcon("logo-skype")}
    get logoSlack() {return this._setIcon("logo-slack")}
    get logoSnapchat() {return this._setIcon("logo-snapchat")}
    get logoSteam() {return this._setIcon("logo-steam")}
    get logoTumblr() {return this._setIcon("logo-tumblr")}
    get logoTux() {return this._setIcon("logo-tux")}
    get logoTwitch() {return this._setIcon("logo-twitch")}
    get logoTwitter() {return this._setIcon("logo-twitter")}
    get logoUsd() {return this._setIcon("logo-usd")}
    get logoVimeo() {return this._setIcon("logo-vimeo")}
    get logoVk() {return this._setIcon("logo-vk")}
    get logoWhatsapp() {return this._setIcon("logo-whatsapp")}
    get logoWindows() {return this._setIcon("logo-windows")}
    get logoWordpress() {return this._setIcon("logo-wordpress")}
    get logoXbox() {return this._setIcon("logo-xbox")}
    get logoXing() {return this._setIcon("logo-xing")}
    get logoYahoo() {return this._setIcon("logo-yahoo")}
    get logoYen() {return this._setIcon("logo-yen")}
    get logoYoutube() {return this._setIcon("logo-youtube")}
    // #endregion

    _setIcon(name) {
        return new IoniconV4DomIconBuilder(name);
    }

    /** @param {"md" | "ios"} value */
    set defaultStyle(value) {
        this["_" + "defaultStyle"] = value;
    }
    get defaultStyle() {
        return this["_" + "defaultStyle"];
    }
}

const instance = new IoniconV4();
export default instance;

class IoniconV4DomIconBuilder extends DomIconBuilder {

    constructor(name) {
        super();
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {IoniconV4DomIcon} */
        this._domElement;

        this._domElement.icon = name;
        this._domElement.style = instance.defaultStyle;
    }

    _createElement() {
        const htmlElement = document.createElement("i");
        return new IoniconV4DomIcon(htmlElement);
    }

    get styleMD() {
        this._domElement.style = instance.styles.md;
        return this;
    }

    get styleIOS() {
        this._domElement.style = instance.styles.ios;
        return this;
    }

    /** @returns {IoniconV4DomIcon} */
    create(style = {}) {
        return super.create(style);
    }
}

class IoniconV4DomIcon extends DomIcon {

    constructor (htmlElement) {
        super(htmlElement);
        // The type of _domElement has to be updated, even though _createElement returns the correct type
        /** @type {IoniconV4DomIcon} */
        this._domElement;
    }

    /** @param {"add-circle-outline"|"add-circle"|"add"|"airplane"|"alarm"|"albums"|"alert"|"american-football"|"analytics"|"aperture"|"apps"|"appstore"|"archive"|
    "arrow-back"|"arrow-down"|"arrow-dropdown-circle"|"arrow-dropdown"|"arrow-dropleft-circle"|"arrow-dropleft"|"arrow-dropright-circle"|"arrow-dropright"|"arrow-dropup-circle"|
    "arrow-dropup"|"arrow-forward"|"arrow-round-back"|"arrow-round-down"|"arrow-round-forward"|"arrow-round-up"|"arrow-up"|"at"|"attach"|
    "backspace"|"barcode"|"baseball"|"basket"|"basketball"|"battery-charging"|"battery-dead"|"battery-full"|"beaker"|"bed"|"beer"|"bicycle"|"bluetooth"|
    "boat"|"body"|"bonfire"|"book"|"bookmark"|"bookmarks"|"bowtie"|"briefcase"|"browsers"|"brush"|"bug"|"build"|"bulb"|"bus"|"business"|
    "cafe"|"calculator"|"calendar"|"call"|"camera"|"car"|"card"|"cart"|"cash"|"cellular"|"chatboxes"|"chatbubbles"|"checkbox-outline"|"checkbox"|
    "checkmark-circle-outline"|"checkmark-circle"|"checkmark"|"clipboard"|"clock"|"close-circle-outline"|"close-circle"|"close"|
    "cloud-circle"|"cloud-done"|"cloud-download"|"cloud-outline"|"cloud-upload"|"cloud"|"cloudy-night"|"cloudy"|
    "code-download"|"code-working"|"code"|"cog"|"color-fill"|"color-filter"|"color-palette"|"color-wand"|
    "compass"|"construct"|"contact"|"contacts"|"contract"|"contrast"|"copy"|"create"|"crop"|"cube"|"cut"|
    "desktop"|"disc"|"document"|"done-all"|"download"|"easel"|"egg"|"exit"|"expand"|"eye-off"|"eye"|
    "fastforward"| "female"| "filing"| "film"| "finger-print"| "fitness"| "flag"| "flame"| 
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
    } value */
    set icon(value) {
        this["_" + "icon"] = value;
        this._updateIcon();
    }
    get icon() {
        return this["_" + "icon"];
    }

    /** @param {"md"|"ios"} value */
    set style(value) {
        this["_" + "style"] = value;
        this._updateIcon();
    }
    get style() {
        return this["_" + "style"];
    }

    _updateIcon() {
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
}