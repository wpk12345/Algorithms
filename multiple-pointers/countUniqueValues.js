// Implement a function which accepts a sorted Array, and counts the unique values in the Array.  There can be negative numbers in the Array,
// but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) --> 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) --> 7
// countUniqueValues([]) --> 0
// countUniqueValues([-2,-1,-1,0,1]) --> 4

// Can have negative numbers but has to  be sorted.  We will not be putting pointers at the beginning and the end.  We will start both pointers instead
// at the left.  Start pointer one at [0] and a second one at [1].  Basically compare the two.  Note we are modifying the array.  
// O(n)

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])
