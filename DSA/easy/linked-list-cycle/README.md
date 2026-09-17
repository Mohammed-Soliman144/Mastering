# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * use two pointers technique (espacially slow & fast pointers)
 * head => A => B => C => null
 * fast = C and slow = B (both starts at a) (so fast is true to handle odd nodes use fast.next)
 * head => A => B => C => D => null
 * fast = null and slow = C (so fast is false here) so fast handle even nodes
 * O(N): T  and O(1) : S 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Edge Case => empty linkedlist (without nodes)
    if(!head || !head.next) return false 
    // use slow and fast pointer technique
    // fast move two steps forward and slow move only one
    let slow = head, fast = head
    // stops loop when fast && fast.next is falsy which fast = fast.next.next
    // may be fast === null => can not access null.next => Error (not cycle linkedlist)
    // second fast && fast.next (handle odd and even nodes)
    while(fast && fast.next) {
        // slow move one step
        slow = slow.next
        // fast move two steps
        fast = fast.next.next
        // if fast equals slow => so its cycle linkedlist
        if(fast === slow)
            return true
    }
    // otherwise is not cycle
    return false
};
```