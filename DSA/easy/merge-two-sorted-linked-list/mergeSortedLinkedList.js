/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * use Two pointers technique
 * O(N + M): T
 * O(1): S
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // A- Create dummy node with value is always less than any number -Infinity
    // dummy node is node points to the head of ListNode
    const dummy = new ListNode(-Infinity)
    // B- Create Intermediate variable to keep track head of list Node within loop
    let prev = dummy;
    // C- loop within list node and stops when list1 or list2 is falsy (null reach to tail)
    while(list1 && list2) {
        // compare which value is less than other (which each list node ordering in non-decreasing order - ascending)
        if(list1.val < list2.val) {
            // make prev (dummy) points to list1 (has smaller value)
            prev.next = list1
            // make prev hold all node of list1
            prev = list1
            // increment head of list1 move one step to next node
            list1 = list1.next
        } else {
            prev.next = list2
            prev = list2
            list2 = list2.next
        }
    }

    // the loop mentioned above will stops when reach to tail for any one list1 or list2 (sometimes we did not reach to tail of next node)
    // so when stop loops must be one of lists if list1 === null so list2 !== null (vice verse correct)
    // must be taking all remaing other nodes in the list does not reach to tail grab all nodes of list and make prev points to its (note all list are pre ordering already)
    if(!list1) prev.next = list2
    if(!list2) prev.next = list1

    // always return dummy.next which dummy first node is as below
    /* dummy 1st node
        node_frst = {
            val: -Infinity;
            next: list1 || list2;
        } 
    */
    return dummy.next
};