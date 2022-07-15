// Begin with the mid element of the whole array as a search key.
// If the value of the search key is equal to the item then return an index of the search key.
// Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
// Otherwise, narrow it to the upper half.
// Repeatedly check from the second point until the value is found or the interval is empty.
// Binary Search Algorithm can be implemented in the following two ways

// Iterative Method
// Recursive Method

const array = [ 1,2, 3, 4, 10, 40 ];
// let target = 10;
// let low = 0;
// let high = array.length -1 ; //4

function binarySearch (array, low, high, target){
    if(high >= low){
    let mid = low + Math.floor((high - low) / 2); //4+0 /2
    if(array[mid] == target){
        return mid
    }
    else if ( array[mid] < target){
        return binarySearch(array, mid +1 , high, target )
    } else {
        return binarySearch(array, low, mid -1, target )
    }
    }else{
        return -1
    }
    


}


console.log(binarySearch(array, 0, array.length -1 , 100))


