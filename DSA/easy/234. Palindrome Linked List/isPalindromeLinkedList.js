
var isPalindromeLinkedList = function (head) {
    // 1- Find the middle node of linkedlist
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // 2- Reverse the second half of linkedlist starting from slow
    let curr = slow
    let prev = null
    while(curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    // 3- Compare both halves of linkedlist
    let left = head
    let right = prev
    while(right) {
        if(left.val !== right.val) return false
        left = left.next
        right = right.next
    }
    return true
}