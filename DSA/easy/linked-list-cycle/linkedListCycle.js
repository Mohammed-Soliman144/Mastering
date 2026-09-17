/**
 * LinkedList Cycle means linkedlist does not tail node which is last node in list points to another node in list
 * use slow and fast pointer technique
 * @param {ListNode} head 
 * @return {boolean} return true if linkedList is cycle and otherwise false
 */
var hasCycle = function (head) {
    // Handle Edge cases => Empty linked list
    if(!head || !head.next) return false
    let slow = head, fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(fast === slow)
            return true
    }
    return false
}