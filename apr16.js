/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // diff logic for even and odd length merged arrays 
        // if odd, grab middle index
        // if even, grab 2 middle indices and find the avg (including decimals)
    const merged = mergeSortedArrays(nums1, nums2)
    // a single array: [1, 2, 3, 4]
    const middleIndex = Math.floor(merged.length / 2) // mid index is 2, so need mid index and mid index - 1
        console.log(middleIndex)
    if (merged.length % 2 === 0) {
        const ele1 = merged[middleIndex]
        const ele2 = merged[middleIndex - 1]
        console.log('even', ele1, ele2)
        return (ele1 + ele2) / 2
    } else {
        console.log('odd', merged[middleIndex])
        return merged[middleIndex]
    }
};
function mergeSortedArrays (arr1, arr2) {
    // loop thru arrays and grab the front ele that is less than the other front ele 
    let result = [];
    while(arr1.length > 0  && arr2.length > 0) {
        if (arr1[0] > arr2[0]) {
            result.push(arr2.shift())
        } else {
            result.push(arr1.shift())
        }
    }
}

// ---------------------------------------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length < 2) return nums.length; 
    const sortedArray = nums.sort((a, b) => a - b)
    let longestSequence = 0;
    let currentSequence = 0;
    for(let i = 0; i < sortedArray.length - 1; i++) {
        let currentEle = sortedArray[i];
        let nextEle = sortedArray[i + 1];
        if (nextEle - currentEle === 1) {
            currentSequence++;
        } else if (nextEle - currentEle === 0) {
            currentSequence = currentSequence; 
        } else {
            if (currentSequence > longestSequence) longestSequence = currentSequence + 1;
            currentSequence = 0;
        }
    }
    return longestSequence > currentSequence ? longestSequence : currentSequence + 1;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));