var findDuplicate = function (nums) {
    // using floyd algorithm or (tortoise and hare algorithm) to define cycle linkedlist
    // Phase One => Find the meeting point inside cycle linkedlist
    let slow = nums[0] // move one step
    let fast = nums[nums[0]] // move two steps

    do {
        slow = nums[slow] 
        fast = nums[nums[fast]] 
    } while(slow !== fast)

    // Phase Two => Find the begining of cylce linkedlist
    // reset the slow
    slow = 0
    while(slow !== fast) {
        // slow and fast move one step
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
}