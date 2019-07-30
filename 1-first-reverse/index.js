// import "./styles.css";

function firstReverse(str) {
  // code goes here
  str = str.split("").reverse().join("");
  return str;
}

document.getElementById("app").innerHTML =
  // function call
  firstReverse("Hello String");
