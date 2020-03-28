import {Jsdoc, Container, Layer, FlexContainer, Button, Toggle, Slider, Text, TextInput, Image, Video} from "../index"; // Use "domflow" instead of "../index"
import {IoniconsV4 as Icon} from "../index";

// Creates an element used to add some vertical distance between some elements
function createSpacer() {
    return Container({height: "20px"});
}

// A container that is later added to the document's body
const container = Container({width: "50%", height: "100vh"}, () => {

    // A button with a click handler
    const button = Button("Button", {height: "40px", width: "100px", color: "primary"});
    button.onClick = () => {
        console.log("clicked button!");
    };

    // A button with an icon
    Button("", {width: "100px", height: "40px"}, () => {
        // All icon names are listed when typing the string, so no need to memorize them
        const icon = Icon("information-circle", {size: "20px"});
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
    FlexContainer({height: "100px", space: "between"}, () => {
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

    const image = Image("https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png");
    image.htmlElement.style.maxWidth = "100%";

    Container({}, () => {
        const slider = Slider();
        const sliderValueText = Text("1");

        slider.onDrag = (value) => {
            sliderValueText.text = value.toString();
        }
    });

    Container({}, () => {
        TextInput();
    });

    const video = Video("", {classes: ["testVideo"]});
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.setSources(["http://techslides.com/demos/sample-videos/small.webm", "http://techslides.com/demos/sample-videos/small.ogv"]);
    video.htmlElement.style.maxWidth = "100%";

    // A container that is centered
    const centered = Container({anchor: 0.5, width: "100px", height: "100px", shade: "light"}, () => {
        Text("Centered container");
    });

    // A container that is placed on top of any child elements and doesn't recieve click events, it's children does however
    // It's ideal for adding multiple ui elements which overlap other elements
    Layer();
});

document.body.appendChild(container.htmlElement);