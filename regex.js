//regular expressions

//matching: starting with 0-9, 1 to 5 of those, then a space, then upper case letters, which we expect exactly 2, 
//then a word boundary, then lower case letters, expect 2 or more of them
var regPat = /[0-9]{1,5}\s[A-Z]{2}\b[a-z]{2,}/;

var regPat2 = new RegExp("\d{1,5}\s[A-Z]{2}\b[a-z]{2,}/");

var longStr = "Ok I've got some string more of good info";

//search finds first index of a match
document.write(longStr.search(/[A-Za-z]{1, 15}\s/) + "<br/>");

/* . represents any one character but not newline, newline is \n
   [^0-9] represents anything NOT a number
   \w represents A-Z, a-z, 0-9 or _
   \W represents anything not in \w
   \s
   \D represents anything NOT a number
   [0-9]? represents 0 to 1 numbers but no more
   [0-9]+ represents one or more numbers
   [0-9]* represents 0 or more numbers, so number doesn't have t be there
   [Aa] represents one upper case a or one lower case a
   ^ represents beginning of string
   $ represents end of string
*/

//search for emails
document.write(longStr.search(/[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/) + "<br/>");

//replace all digits 5 in length with a bunch of 5s
document.write(longStr.repalce(/\d{5}/, '55555') + "<br/>");

// /g will find every match, not just one, /i will be case insensitive, /m
matchArray = longStr.match(/\d{4,5}/g);

//palindrome test with regex
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");