//our friendly Definitions...

var Dark = document.createElement("button");
var Light = document.createElement("button");
//event Listeners
Dark.addEventListener("click", function(){
  __a("LIGHT")
  Dark.style.visibility = "hidden";
  Light.style.visibility = "visible";
});
Light.addEventListener("click", function(){
  __a("DARK");
  Light.style.visibility = "hidden";
  Dark.style.visibility = "visible";
});

Dark.innerHTML = "Light Mode"
Light.innerHTML = "Dark Mode"








//our glorious function
function __a (mode) {
  switch (mode){
    case "DARK":
      document.getElementsByTagName("body")[0].style.backgroundColor = "black"
      break;
    case "LIGHT":
      document.getElementsByTagName("body")[0].style.backgroundColor = "white"
      break;
    default:
      document.getElementsByTagName("body")[0].style.backgroundColor = "white"
      break;//just for formality
  }
}
