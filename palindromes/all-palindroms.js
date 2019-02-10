//Find all palindroms within a given string

//First version not very efficient  O(n^2)
function countPalindromesInString(s) {

    let subStrings = [];

    for (let i = 0; i < s.length; i++) {
      for(let j = 0; j < s.length - i; j++) {
        let subString = s.substring(j, j + i + 1);
        if(subString === subString.split('').reverse().join('') && !subStrings.includes(subString)) {
          subStrings.push(subString);
        }
      }
    }
    return subStrings.length;
}

//Better way  

function reverse(s) {
    var o = [];
    for (var i = 0, len = s.length; i <= len; i++)
     o.push(s.charAt(len - i));
     return o.join('');
  }
  
  function isPalindrome(word, words) {
    return word === reverse(word) && !words.includes(word)
  }
  
  function countPalindromesInString(s) {
      let subStrings = [];
      for (let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length - i; j++) {
          let subString = s.substring(j, j + i + 1);
          if(isPalindrome(subString, subStrings)) {
            subStrings.push(subString);
          }
      }
    }
    return subStrings.length;
  }

  function allPalindroms(str){
      //step one create empty array 
      let subStrings = [];
      //step 2 for loop
      for(i = 0; i < str.length; i++){
          //3 nested j loop
          for(j = 0; j < str.length - i; j++){
              //4 substring var
              let substring = str.substring(j, j + i + 1);
              //5 conditional
              if(substring === substring.split('').reverse().join('') && !subStrings.includes(substring)){
                  subStrings.push(substring);
              }
          }
      }
      return subStrings;
  }

 allPalindroms('bobby');
  
      