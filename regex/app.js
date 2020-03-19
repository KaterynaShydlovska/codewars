'use strict';

// Challenge 1

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  let regex = /^\d{4}$|^\d{6}$/;
  if (pin.match(regex) && (pin.length == 4 || pin.length == 6)) {
    return true;
  } else {
    return false;
  }
}

// shortcut solution
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

// errow function
const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);



// Challenge 2

// output '1[.]1[.]1[.]1[1]'

let address = '1.1.1.1';
function ipNum(address) {
  return address.replace(/[._]/g, "[.]");
}


// Challenge 3

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.
// The string has the following conditions to be alphanumeric:
// At least one character("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
  let reg = /^([a-zA-Z0-9]+)$/
  if (string.match(reg)) {
    return true;
  }
  return false;
}
