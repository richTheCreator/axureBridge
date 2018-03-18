$(document).ready(function() {
  console.log('-----> Loaded outside dep via rawgit!')

  // ----- USA PHONE NUMBER FORMATTING -----

  // list of axure cell inputs
  var cell1 = '[data-label="TF-Form-Cell"] input';

  // Format the phone number as the user types it
  $(cell1).keyup(function(evt) {
    var phoneNumber = $(cell1);
    var formatted = phoneFormat($(cell1).val());

    var charCode = (evt.which)
      ? evt.which
      : evt.keyCode;
    phoneNumber.val(formatted)
  });

  // Only integers
  function numberPressed(evt) {
    var charCode = (evt.which)
      ? evt.which
      : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)) {
      return false;
    }
    return true;
  }

  // USA formatting
  function phoneFormat(input) {
    // Strip all characters from the input except digits
    input = input.replace(/\D/g, '');

    // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0, 10);

    // Based upon the length of the string, we add formatting as necessary
    var size = input.length;
    if (size == 0) {
      input = input;
    } else if (size < 4) {
      input = '(' + input;
    } else if (size < 7) {
      input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
    } else {
      input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
    }
    return input;
  }

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

// How to target data attrs,=
// $('[data-label="R-Nav Page"]').css('left', '1277px')
// $('[data-label="DP-Live-Agent"],[data-label="DP-Live-Header"], [data-label="DP-Save-Rnav"]').css('left', '1281px')
