/**
 * @param {Array} nums1
 * @param {number} m - m is length of nums1 and m only consider length of non empty elements (or elements not equal zero)
 * @param {Array} nums2 
 * @param {number} n - n is length of nums2
 * @return {void} void - modify array (nums1) in place
 */
var merge = function (nums1, m, nums2, n) {
    // multi pointers technique (espacially three pointers)
    let 
        // first points to last largest element in first array (nums1)
        firstPtr = m - 1,
        // second points to last largest element in second array (nums2)
        secondPtr = n - 1,
        // current points to currentIndex in first array which current equals firstArrayLength + secondArrayLength - 1
        currentPtr = m + n - 1

        while(secondPtr >= 0) {
            if(firstPtr >= 0 && nums1[firstPtr] > nums2[secondPtr]) {
                nums1[currentPtr] = nums1[firstPtr]
                firstPtr--
            } else {
                nums1[currentPtr] = nums2[secondPtr]
                secondPtr--
            }
            // in both case
            currentPtr--
        }
    return;
}