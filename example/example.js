import dom from "../src/dom";
import icons from "../src/icon_fonts/ioniconsV4";

// Creates an element used to add some vertical distance between some elements
function createSpacer() {
    return dom.container.create({height: "20px"});
}

// A container that is later added to the document's body
const container = dom.container.create({width: "50%", height: "500px"}, () => {

    // A button with some text as a child
    const button = dom.button.colorForeground.create("", {
        height: "50px", width: "100px"
    }, () => {
        dom.text.colorBackground.create("Button");
    });

    // Click handler for the button
    button.onClick = () => {
        console.log("clicked button!");
    };

    // A button with an icon
    dom.button.colorForeground.create("", {
        height: "50px", width: "100px"
    }, () => {
        // All types of graphics for the icon are listed when you type "icons.", so no need to memorize what all the icons are
        const icon = icons.informationCircle.colorBackground.create({
            fontSize: "20px"
        });
        // The icon's graphic can be updated after it have been created, same here, it shows all types of graphics when typing "icons.icons = "" "
        icon.icon = "information-circle-outline";
    });

    createSpacer();

    // A toggle, in this case we also set onClick on the same line
    dom.toggle.create().onClick = () => {
        console.log("toggle clicked");
    };

    createSpacer();

    // A flex container used for creating horizontal or vertical layouts
    dom.flexContainer.spaceBetween.create({
        width: "100%", height: "100px"
    }, () => {
        // Since we are using javascript functions, we can create multiple elements in a for loop and assign them values
        const colors = ["red", "green", "blue"]
        for (let i = 0; i < colors.length; i++) {
            dom.container.create({
                backgroundColor: colors[i],
                // The width is set based on the number of elements, with some space between them
                width: `100% / ${colors.length} - 10px`, // calculations are automatically wrapped in "calc()"
                height: "100%"
            });
        }
    })

    // A container that is centered
    dom.container.colorForeground.create({
        width: "100px", height: "100px", anchor: 0.5
    }, () => {
        dom.text.alignCenter.colorBackground.create("Centered container", {anchor: {x: 0.5, y: 0}});
    });

    // A container that is placed on top of any elements and doesn't recieve any click events, it's children does however
    // Ideal for adding ui elements floating ontop of other elements
    dom.layer.colorNone.create({width: "100%", height: "100%"});
});

document.body.appendChild(container.htmlElement);