import {Jsdoc, Container, Layer, FlexContainer, Button, Toggle, Text} from "../index"; // Use "domflow" instead of "../index"
import {IoniconsV4 as Icon} from "../index";

// Creates an element used to add some vertical distance between some elements
function createSpacer() {
    return Container({height: "20px"});
}

// A container that is later added to the document's body
const container = Container({width: "50%", height: "500px"}, () => {

    // A button with a click handler
    const button = Button("Button", {height: "40px", width: "100px", color: "foreground"});
    button.onClick = () => {
        console.log("clicked button!");
    };

    // A button with an icon
    Button("", {color: "foreground", width: "100px", height: "40px"}, () => {
        // All icon names are listed when typing the string, so no need to memorize them
        const icon = Icon("information-circle", {color: "background", size: "20px"});
        // The icon can be changed after it have been created
        icon.icon = "information-circle-outline";
    });

    createSpacer();

    // A toggle with a click handler
    const toggle = Toggle();
    toggle.onClick = (checked) => {
        console.log("Toggle checked:", checked);
    };

    createSpacer();

    // A flex container used for creating horizontal or vertical layouts
    FlexContainer({height: "100px"}, () => {
        const colors = ["red", "green", "blue"]
        for (let i = 0; i < colors.length; i++) {
            Container({
                color: colors[i],
                // The width is set based on the number of elements, with some space between them
                width: `100% / ${colors.length} - 10px`, // calculations are automatically wrapped in "calc()"
                height: "100%"
            });
        }
    });

    // A container that is centered
    const centered = Container({anchor: 0.5, width: "100px", height: "100px", color: "foreground"}, () => {
        Text("Centered container", {color: "background"});
    });

    // A container that is placed on top of any elements and doesn't recieve any click events, it's children does however
    // Ideal for adding ui elements floating ontop of other elements
    Layer({width: "100%", height: "100%"});
});

document.body.appendChild(container.htmlElement);