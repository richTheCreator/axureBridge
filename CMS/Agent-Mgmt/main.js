$(document).ready(function() {
  console.log('Loaded outside dep via rawgit!')

  // $('[data-label="R-Nav Page"]').css('left', '1277px')
  // $('[data-label="DP-Live-Agent"],[data-label="DP-Live-Header"], [data-label="DP-Save-Rnav"]').css('left', '1281px')
})


// Below is the function that gets placed into axures onPageLoad event
// Place this on every page in axure you need it to affect.

// javascript: void function load() {
//
//   var link = document.createElement('link');
//   link.href = 'https://rawgit.com/richTheCreator/axureBridge/master/CMS/Agent-Mgmt/main.css';
//   link.rel = 'stylesheet';
//   link.type = 'text/css';
//
//   var s = document.createElement('script');
//   s.type = 'text/javascript';
//   s.src = 'https://rawgit.com/richTheCreator/axureBridge/master/CMS/Agent-Mgmt/main.js';
//   $("head").append(s, link);
// }()
