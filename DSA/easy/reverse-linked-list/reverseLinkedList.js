/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * use Two Pointer technique (curr and prev) with temperory reference to points next node
 * O(N): T - O(1): S
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseLinkedList = function(head) {
    let curr = head, prev = null
    while(curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}

// Use Recursion to reverse LinkedList (not optimal) O(N): T - O(N): S + Call Stack
var reverseListByRecursion = function(head) {
    // BASE CASE
    if(head === null || head.next === null)
        return head

    // Recursive Call with smaller solution
    // make new head points to first node
    // head => 1 => 2 => 3 => null (before recursion)
    // null <== 1 => 2 => 3 => null (after first recursive call)
    //               * new head
    const newHead = reverseListByRecursion(head.next)
    // make second node points to head
    head.next.next = head
    // make head points to null
    head.next = null

    // Contract Return newHead
    return newHead
}