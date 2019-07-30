// import "./styles.css";

function letterCapitalise(str) {
  var word = str.split(" ");
  for (var i = 0; i < word.length; i++) {
    word[i] = word[i].substring(0,1).toUpperCase() 
    + word[i].substring(1);
  }
  return word.join(" ");
}

document.getElementById("app").innerHTML =
  // function call
  letterCapitalise("hello world");
