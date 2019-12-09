// ==UserScript==
// @name       glitch support dark mode
// @namespace  SUPPORT-DARK-MODE
// @version    0.1
// @match      https://support.glitch.com/*
// @description your friendly dark screen for support.glitch.com
// ==/UserScript==


//variables

var body = document.getElementsByTagName("body")[0];
var center = document.createElement("center");
var hr = document.createElement("hr");
var brk = document.createElement("br");
var dark = document.createElement("button");
var light = document.createElement("button");
var style = document.createElement('style');

var title = document.getElementsByClassName("fancy-title")[0];
var category = document.getElementsByClassName("category-name");
var user = document.getElementsByClassName("username");

// specifying IDs so that I can declare styles

dark.setAttribute("id", "dark");
light.setAttribute("id", "light");


//child appends

center.appendChild(hr);
center.appendChild(dark);
// center.appendChild(brk);
center.appendChild(light);

body.appendChild(center);

document.head.appendChild(style);

// Setting innerHTML content

dark.innerHTML = "dark";
light.innerHTML = "light";

//Document Event Listener

document.addEventListener("ready", function() {
  light.style.visibility = "hidden";
  dark.style.visibility = "visible";
});
dark.addEventListener("click", function() {
  __a("DARK");
  dark.style.visibility = "hidden";
  light.style.visibility = "visible";
});
light.addEventListener("click", function() {
  __a("LIGHT");
  dark.style.visibility = "visible";
  light.style.visibility = "hidden";
});


//mode function
function __a(mode) {
  switch (mode) {
    case "DARK":
      body.style.backgroundColor = "black";
      body.style.color = "white";
      title.style.color = "white";
      category.style.color = "white";
      user.style.color = "white";
      break;
    case "LIGHT":
      body.style.backgroundColor = "white";
      body.style.color = "black";
      break;
    default:
      body.style.backgroundColor = "white";
      body.style.color = "black";
      break;
  }
}


// Styles for the button

style.innerHTML = `
  
#light {
  border: solid #4545CC 2px;
  color: #4545CC;
  fill: #4545CC;
  background: white;
  height: 30px;  
  border-radius: 5px;
  transition: top 0.2s ease;
  position: relative;
  top: 0;
  vertical-align: middle;
  cursor: pointer;
  text-transform: uppercase;
  font-family: monospace;
  font-weight: bold;
  margin-bottom: 40px;
}

#dark {
  border: solid white 2px;
  color: white;
  fill: #4545CC;
  background: #4545CC;
  height: 32px;  
  border-radius: 5px;
  transition: top 0.2s ease;
  position: relative;
  top: 0;
  vertical-align: middle;
  cursor: pointer;
  text-transform: uppercase;
  font-family: monospace;
  font-weight: bold;
  margin-bottom: 40px;
  margin-right: 10px;
}

.fancy-title {
  color: white;
}

`
