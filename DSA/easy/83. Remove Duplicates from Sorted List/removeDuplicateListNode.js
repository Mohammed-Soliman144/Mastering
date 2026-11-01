var removeDuplicate = function (head) {
    // use two pointer algorithm with O(N):T and O(1):S
    const dummy = new ListNode(Infinity, head)
    let curr = head
    let prev = dummy

    while(curr) {
        if(curr.val === prev.val) {
            while(curr && curr.val === prev.val) {
                curr = curr.next
            }
            prev.next = curr
        } else {
            prev = curr
            curr = curr.next
        }
    }

    return dummy.next
}