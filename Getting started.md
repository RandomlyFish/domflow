# Getting started

###### These instructions are written with the assumption that you don't have much experience with node.

<br/>

## Prerequisites

This is a node module, so you need [nodejs](https://nodejs.org)

If you haven't used node before, I would highly recommend looking for some tutorials.

<br/>

## Setting up the project

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
import {Container, Layer, FlexContainer, Button, Toggle, Slider, Text, TextInput, Image, Video} from "domflow";
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

<br/>

#### build and run

To run the script, enter the following in the terminal:
``` javascript
npm run build
```

Finally you just have to open the index.html file in the browser.

To make the page reload automatically as you make changes, you can use the [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for vscode. With it installed, just right click on index.html and open with live server.

<br/>
