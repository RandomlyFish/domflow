#### !Domflow is in early development, so many things are missing!

# Domflow

[About](#about)

[Goals](#goals)

[Getting started](#getting-started)

[Examples](#examples)

<br/>

## About

Domflow is a library for node for creating html structure and layout in purely javascript. Unlike existing solutions, domflow does not attempt to emulate the way you would write html and css. It instead takes advantage of what you can do with javascript.

<br/>

## Goals

<details>
<summary>Layout and structure in one</summary>

<br/>
Structure, such as a page with two images and layout, such as placing those two images next to eachother, are two aspects of designing a website that are tightly coupled. You can't create a layout without also having the appropriate structure.
<br/>
<br/>

With domflow, you create both the structure and layout for your webapps in one single place, making it more clear how everything will behave.

<br/>
</details>


<details>
<summary>Simple use of icons</summary>

<br/>
Icons can make a big difference in making your design more interesting and help with effectively convey information to your users.
<br/>
<br/>

Domflow comes bundled with [Ionicons version 4](https://ionicons.com/v4/) and has built in auto complete for all it's various icons, so that you can spend more time implementing icons, and less time looking for them.
<br/>
<br/>

There are more icon fonts to come.

<br/>
</details>

<details>
<summary>Clear names</summary>

<br/>
Looking at the structure for your site, it should be clear what everything does, just by looking at the names of the elements.
<br/>
<br/>

With domflow, instead of going with the names that you'll find in html markup such as div, p, and input. We went with names that are more self explanatory, such as container, text and slider.

<br/>
</details>


<details>
<summary>Reduced redundancy</summary>

<br/>
Having to write extra code just to accomplish something that should be very basic, is not ideal.
<br/>
<br/>

With domflow, there is no need to use things like document.querySelector to access elements, such as buttons. Instead you can just assign your buttons to variables in the same place that you create them.

<br/>
</details>


<details>
<summary>Flexibilty of workflow</summary>

<br/>
Given that every developer likes doing things their own ways, it's important that you don't feel you're forced into using a strict workflow.
<br/>
<br/>

With domflow, it's up to you how you want to structure things. You can keep all your elements in one big structure, you can split it up into functions that creates the seperate parts or even classes to make parts more reusable and extendable.

<br/>
</details>

<br/>

## Getting started

Please checkout the [getting started page](https://github.com/RandomlyFish/domflow/blob/master/Getting%20started.md) where I have tried to provide clear and concise instructions, from initializing the project up to running it in the browser.

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
