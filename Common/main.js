$(document).ready(function() {
  console.log('-----> Common dep loaded via rawgit!')

  // ----- USA PHONE NUMBER FORMATTING -----

  // list of axure phone number inputs
  var pf1 = '[data-label="Phone-Format1"] input';
  var pf2 = '[data-label="Phone-Format2"] input';
  var pf3 = '[data-label="Phone-Format3"] input';
  var pf4 = '[data-label="Phone-Format4"] input';
  var pf5 = '[data-label="Phone-Format5"] input';
  var pf6 = '[data-label="Phone-Format6"] input';

  var current;
  // Format the phone number as the user types it
  $('input').keyup(function(evt) {
    console.log('attribute:', $(this).parent().data())
    // find via axure labels
    var parent = $(this).parent().data().label;

    //determine which input active
    switch (parent) {
      case 'Phone-Format1':
        current = pf1;
        break;
      case 'Phone-Format2':
        current = pf2;
        break;
      case 'Phone-Format3':
        current = pf3;
        break;
      case 'Phone-Format4':
        current = pf4;
        break;
      case 'Phone-Format5':
        current = pf5;
        break;
      case 'Phone-Format6':
        current = pf6;
        break;

    }
    var phoneNumber = $(current);
    var formatted = phoneFormat($(current).val());

    var charCode = (evt.which)
      ? evt.which
      : evt.keyCode;

    //run format
    phoneNumber.val(formatted)
  });

  // helper fn - Only integers
  function numberPressed(evt) {
    var charCode = (evt.which)
      ? evt.which
      : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)) {
      return false;
    }
    return true;
  }

  // helper fn - USA formatting
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

  //hide annotations for usertesting
  var urlParams = new URLSearchParams(window.location.search);
  var hideAnot = urlParams.get('anot'); // none

  if (hideAnot == 'none') {
    $('.annotation').css({display: 'none'})
    console.log('hidden annotations')
  }

})

//----- iOS No-Scroll - drop in
// javascript: $('body').css({'overflow': 'hidden', 'height': '100%', 'width': '100% !important', 'position': 'fixed'});
// void(0);
// ----- iOS No-Scroll - drop in

// $("input").change(function() {
//   $('[data-label="List-AgentName"] span').each(function() {
//     var searchVal = $("input").val();
//     var spanVal = $(this).text().slice(0, [searchVal.length]);
//
//     if ((searchVal.length > 0) && (spanVal === searchVal)) {
//       console.log('match:', spanVal, '=', searchVal);
//
//       $(this).html(function(i, v) {
//         console.log('CALLED REPLACE');
//         return v.replace(spanVal, "<strong>" + searchVal + "</strong>")
//       });
//     };
//   });
// })
//----- iOS Scroll - drop in
// javascript: $('body').css({'overflow': 'auto', 'height': '100%', 'width': '378px', 'position': 'static'});
// void(0);

//----- PASTE BELOW INTO AXURE TO USE THIS FILE
// javascript: void function load() {
//   var s = document.createElement('script');
//   s.type = 'text/javascript';
//   s.src = 'https://rawgit.com/richTheCreator/axureBridge/master/Common/main.js';
//   $("head").append(s);
// }()
