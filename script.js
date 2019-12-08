// ==UserScript==
// @name       glitch support dark mode
// @namespace  SUPPORT-DARK-MODE
// @version    0.1
// @match      http://support.glitch.com/*
// @description your friendly dark screen for support.glitch.com
// @require    http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).append(
  '<br /><center><button onclick="darkmode()" id="dm">DARK MODE</button></center>'
);

function darkmode() {
  $("body").css("background-color", "black");
  $("#dm").hide();
  if (!$("#lm")) {
    $(document).append(
      '<br /><center><button onclick="lightmode()" id="lm">LIGHT MODE</button></center>'
    );
    return 0;
  }
  $("#lm").show();
  return 0;
}

function lightmode() {
  $("body").css("background-color", "white");
  $("#lm").hide();
  $("#dm").show();
  return 0;
}
