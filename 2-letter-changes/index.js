//import "./styles.css";

function letterChanges(str) {
  // replace every letter in the string with the letter following it
  // first get the charCode number of the letter, add 1, then
  // convert convert this number to a letter using fromCharCode function
  // check if char is z and replace it with a because z has no next charCodeAt
  var newStr = str.replace(/[a-z]/gi, function(char) {
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });
  return newStr;
}

document.getElementById("app").innerHTML =
  // function call
  letterChanges("fun");
