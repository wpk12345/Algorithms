//Given a string, return a new string with the reversed order of chartacters.

function getValue(callback) {
  var str = document.getElementById("userInput").value;
  callback(str);
}

function reverseString(str) {
  var arr = str
    .split("")
    .reverse()
    .join("");
  document.getElementById("answer").innerHTML = arr;
}

function reverseInt(str){
    const reversedInt = str.toString().split('').reverse().join('');
    document.getElementById('answer').innerHTML = parseInt(reversedInt) * Math.sign(str);
}