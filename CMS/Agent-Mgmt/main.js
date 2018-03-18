$(document).ready(function() {
  console.log('-----> Loaded outside dep via rawgit!')

  // ----- USA PHONE NUMBER FORMATTING -----

  // list of axure phone number inputs
  var cellF = '[data-label="TF-Form-Cell"] input';
  var cellL = '[data-label="TF-Live-Cell"] input';
  var faxF = '[data-label="TF-Form-Fax"] input';
  var faxL = '[data-label="TF-Live-Fax"] input';
  var officeF = '[data-label="TF-Form-Office"] input';
  var officeL = '[data-label="TF-Live-Office"] input';

  var current;
  // Format the phone number as the user types it
  $('input').keyup(function(evt) {
    console.log('attribute:', $(this).parent().data())

    var parent = $(this).parent().data().label;

    switch (parent) {
      case 'TF-Form-Cell':
        current = cellF;
        break;
      case 'TF-Live-Cell':
        current = cellF;
        break;
      case 'TF-Form-Fax':
        current = faxF;
        break;
      case 'TF-Live-Fax':
        current = faxF;
        break;
      case 'TF-Form-Office':
        current = officeF;
        break;
      case 'TF-Live-Office':
        current = officeF;
        break;
    }

    var phoneNumber = $(current);
    var formatted = phoneFormat($(current).val());

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
