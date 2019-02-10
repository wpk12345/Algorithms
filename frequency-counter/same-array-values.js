//Write a function called same that accepts two arrays.  Should return true if every value in the array has its corresponding value squared
//in the second array.  The frequency of values must be the same.

// ex.  same([1,2,3], [4,1,9]) ---> true
// ex.  same([1,2,3], [1,9]) --->false
// ex.  same([1,2,1], [4,4,1]) -->false (must have same frequency)

// Solution one.
// O(n^2)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [1, 9, 4, 4]);
// --------------------------------------------------------------------------------------------
// Solution 2.  Better runtime
// O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
//for each val in the array we are going to add one to the frequency counter if it's already in there, or we are going to initialize it to 1.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
//we are going to loop over the first one and look at each key.  Is key squared (key **2) in frequencyCounter2?
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
// Do the values correspond?  If there are 2-"2"s in arr1 there needs to be 2-"4"s in arr2
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return flase;
    }
  }
  return true;
}

same([1, 2, 3], [1, 4, 9, 5]);
