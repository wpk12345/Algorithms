//Write a function called sumZero which accepts a sorted array of integers.  (needs to be sorted from lowest to highest) The function should 
//find the first pair where the sum is 0.
//Return an array that inclueds both values that sum to zero or undefined if a pair does not exist

//sumZero([-3,-2,-1, 0,1,2,3]) --> [-3,3]
//sumZero([-2,0, 1,3]) --> undefined
//sumZero([1,2,3]) --> undefined

//Solution 1  
//Time Complexity - O(n^2) (nested loops )
//Space Complexity - O(1)

function sumZero(arr) {
    for(let i=0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

//Refactor using a Multiple Pointers Pattern
//So instead of starting at the first element in the array and going over every index till it finds a opposite (3, -3), which can take a long time if 
//you were to have an array with thousands of elements, you can us multiple pointers where one starts at the beginning and one starts at the end, or 
//another position.
//Runtime O(n)

function sumZero(arr) {
    let left = 0;
    let right = arr.length -1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum ===0) {
            return [arr[left], arr[right]];
        }else if(sum > 0) {
            right--;
        }else {
            left++;
        }
    }
}

sumZero[-4,-3,-2,-1,0,1,2,3,10];