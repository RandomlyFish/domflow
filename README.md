#### !Domflow is in early development, so many things are missing!

# Domflow

[About](#about)

[Goals](#goals)

[Prerequisites](#prerequisites)

[Getting started](#getting-started)

[Examples](#examples)

<br/>

## About

Domflow is a library for node for creating html structure and layout in purely javascript. Unlike existing solutions, domflow does not attempt to emulate the way you would write html and css. It instead takes advantage of what you can do with javascript.

<br/>

## Goals
###### And rants...

<details>
<summary>Layout and structure shouldn't be separated</summary>

<br/>
By structure i mean a set of elements and by layout I mean the way those elements are layed out, such as if elements are supposed to be placed next to each other. These two aspects of a website are tightly coupled, yet when you use html and css you keep them in seperate
files. This can make it difficult to get an overview of what your website will look like without going back and fourth between your html and css.


With domflow you create the structure and layout in one place, making it more clear how your website will behave.

<br/>
</details>


<details>
<summary>Simple use of icons</summary>

<br/>
Let's say you're just using html and you want to use an icon font such as [ionicons](https://ionicons.com/v4/). You first have to include their css stylesheet in your html, then create an <i>i</i> element and give it the class "icon" as well as another class starting with "ion-md-" followed by the name of the icon you want to use. Given that they have 378‬ icons (not including the ios variants) you'll likely end up going back to their website whenever you want to include a new icon.


With domflow, you get various icon fonts built in and when using an icon element it lists all available icons, so there's no need to check their website if you simply want to check if they have an icon with an airplane.

<br/>
</details>

<details>
<summary>Names that makes sense</summary>

<br/>
In html, how do you create a button? that's simple, you just create a button. How about a slider? Well... You create an input element and set it's type attribute to "range". And what about a dropdown? Actually it's called a select element...


With domflow a button is a button, a slider is a slider and a dropdown is a dropdown.

<br/>
</details>


<details>
<summary>Properties that always does something</summary>

<br/>
In css, there are plenty of properties that depend on other properties to actually do anything. Such as the top, left, bottom and right properties, used to move an element away from an edge. Those properties depend on the position property being set to either relative or absolute. So if the position property is not set, then those properties does nothing. This can lead to confusing situations that makes you wonder why something worked in one situation, but not another.


With domflow, every property that you set on an element, has an effect on it no matter what.

<br/>
</details>


<details>
<summary>Reduced redundancy</summary>

<br/>
With html and javascript if you want to create a button and give it a click handler, then you have to first add it to the html structure. Then in the javascript you have to use document.querySelector to get access to that button so that you then can attach your handler to it.


With domflow you can just create the button and attach the handler on the next line.

<br/>
</details>


<br/>

## Prerequisites

This is a node module, so you need [nodejs](https://nodejs.org)

If you haven't used node before, I would highly recommend looking for some tutorials.


<br/>

## Getting started

###### These instructions are written with the assumption that you don't have much experience with node.

Start by initializing the node project by running the following command in the terminal:
```javascript
npm init
```

After you have configured your node project, install domflow:

```javascript
npm install domflow
```

A bundler is also required to use this module, I would recommend [webpack](https://www.npmjs.com/package/webpack).


<br/>

#### Webpack

Along with webpack itsef, you also need to install a style and css loader for domflow to work correctly.

```javascript
npm install webpack webpack-cli style-loader css-loader --save-dev
```

In the root directory of your project, create a new file with the name: webpack.config.js and add the following:

```javascript
const path = require("path");

module.exports = {
	// This defines where webpack will start gathering dependencies, 
    // it's usually your main client script file, or html file
    entry: "./index.js",
    // This defines where the bundled code will end up in your project directory
    // It's set up to be added into dist/bundle.js
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
        	// This allows you to import css in javascript, 
            // which means you don't need to import any stylesheets that the module uses in your html
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    // This is not required, but highly recommended as it makes debugging a lot easier
    devtool: "source-map"
}
```

<br/>

#### index.html

Create an index.html and add:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Currently needed for ioniconsV4 icon font, However, the plan is to make it import this only if use that icon font -->
	<link rel="stylesheet" type="text/css" href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css">
</head>
<body>
	<!-- Here you import the bundled code instead of index.js -->
	<script src="dist/bundle.js"></script>
</body>
</html>
```

<br/>

#### index.js

As well as an index.js and add:

``` javascript
// Jsdoc is important as it gives you documentation when using the various components
import {Jsdoc, Container, Layer, FlexContainer, Button, Toggle, Text} from "domflow";
// IoniconsV4 is currently the only support icon font, but there will be more
import {IoniconsV4 as Icon} from "domflow";

new class Index {

	constructor() {
    	
		const main = Container({color: "none"}, () => {
			// Here you can nest any element such as a button
			const button = Button("Click me", {width: "100px", height: "40px"});
			button.onClick = () => {
				console.log("Button clicked");
			}
		});
        
		// You only need to append main.htmlElement, 
		// as any nested elements in main will automatically be appended to it
		document.body.appendChild(main.htmlElement);
	}
}();
```

<br/>

#### package.json

Open the package.json file that was generated and replace the "test" script with:
``` json
"build": "webpack --entry ./index.js --output-filename ./dist/bundle.js --mode=development --watch"
```

That script will bundle the code and the watch flag will cause it to keep doing that everytime any code is saved.

#### build and run

To run the script, enter the following in the terminal:
``` javascript
npm run build
```

Finally you just have to open the index.html file in the browser.

To make the page reload automatically as you make changes, you can use the [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for vscode. With it installed, just right click on index.html and open with live server.

<br/>

## Examples

<br/>

### Nested containers

<br/>

##### Without domflow (html, css):
``` html
<div id="parent">
       <div id="child"></div>     
</div>
```
``` css
#parent {
	width: 500px;
    height: 200px;
}

#child {
	width: 50%;
    height: 50%;
}
```

<br/>

##### Without domflow (javascript only):
``` javascript
const parent = document.createElement("div");
parent.style.width = "500px";
parent.style.height = "200px";

const child = document.createElement("div");
child.style.width = "50%";
child.style.height = "50%";

parent.appendChild(child);
```
<br/>

##### Domflow:
``` javascript
Container({width: "500px", height: "200px"}, () => {
	Container({width: "50%", height: "50%"}, () => {
	
	});
});
```

<br/>

### Button

<br/>

##### Without domflow (html, css, javascript):

``` html
<button id="mainButton">Click me</button>
```
``` css
#mainButton {
	width: 100px;
	height: 40px;
}
```
``` javascript
const button = document.getElementById("mainButton");
button.onclick = () => {
	console.log("Button clicked");
}
```
<br/>

##### Without domflow (javascript only):
``` javascript
const button = document.createElement("button");
button.innerText = "Click me";
button.style.width = "100px";
button.style.height = "40px";
button.onclick = () => {
	console.log("Button clicked");
}
```
<br/>

##### Domflow:
```javascript
const button = Button("Click me", {width: "100px", height: "40px"});
button.onClick = () => { // note that domflow uses camel casing
	console.log("Button clicked");
}
```
<br/>
