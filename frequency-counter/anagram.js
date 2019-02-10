//Given two strings, write a function to determine if the str2 string is an anagram of the str1.  An anagram is a word,
//formed by rearranging the letters of another, such as cinema, formed from iceman.  Not just same characters but also same frequency.

//validAnagram('', '') --> true
//validAnagram('rat', 'car') --> false
//validAnagram('qwerty', 'qeywrt') --> true

//no nested loops to avoid O(n^2) runtime

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
    //we subtract one to make sure both str have same frequency of letter
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')