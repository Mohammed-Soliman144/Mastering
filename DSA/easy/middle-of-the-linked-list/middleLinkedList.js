/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * use two pointer technice
 * PSEUDO CODE
 * slow = head and fast = head // both pointer at starting points to head of linkedlist
 * loop on nodes inside linkedlist and stops when fast is not falsy and fast.next is not falsy
 * only fast loop condition works with even nodes but crash with odd nodes
 * only fast.next condition works with odd nodes but crash with even nodes
 * inside loop make slow = slow.next (move one node only) then fast = fast.next.next (move two nodes)
 *  return slow node that points to all remain nodes after it in linkedlist
 * @param {ListNode} head 
 * @return {ListNode}
 */

var middleNode = function (head) {
    let slow = head, fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}