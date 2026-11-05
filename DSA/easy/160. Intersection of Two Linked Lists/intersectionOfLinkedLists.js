/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 /** Brute Force (Two pointers and nested loops)
    Complexity => O(M * N):T and O(1):S
                  p1
    ListA => [4,  1,  8,  4,  5]
                  p2          will reset p2 = headB
    listB => [5,  6,  1,  8,  4,  5]
 
*/
 
 
 /** Optimized  (hashset and one pointer)
    Complexity => O(M + N):T and O(M):S
              p1
    ListA => [4,  1,  8,  4,  5]

    // goto traverse listA and added each listnode to hashset
    hashset => {
        4 => 4, 
        1 => 1, 
        8 => 8, 
        5 => 5, 
    }

    then compare listnode in listB by hashset
    p1 = headB
              p1             
    listB => [5,  6,  1,  8,  4,  5]
 
*/

/** Optimal  (Two pointers and one loop) 
    Complexity => O(M + N):T and O(1):S

    // p1 = headA and p2 = headB 
    // traverse within listA and listB until p1 !== p2
              p1 => if(p1 is null) p1 = headB otherwise p1 = p1.next
    ListA => [4,  1,  8,  4,  5]
              p2 => if(p2 is null) p2 = headA otherwise p2 = p2.next
    listB => [5,  6,  1,  8,  4,  5]
    
    return p1
*/

// 1- Brute force O(1):S O(M * N):T
var getIntersectionNode = function(headA, headB) {
    // 1- Brute Force 
    // 2- Optimized Solution
    // 3- Optimal

    // Edge Case
    if(!headA || !headB) return null
    let currA  = headA
    while(currA) {
        let currB = headB
        while(currB) {
            if(currA === currB)
                return currA
            currB = currB.next
        }
        currA = currA.next
    }
    return null
}

// 2- Optimized Solution hashset and pointer
var getIntersectionNode = function(headA, headB) {
    // Complexity => O(M):S (length of listA equals length of hashset)
    // and O(M + N): T

    // Edge Case
    if(!headA || !headB) return null
    let current = headA
    const hashSet = new Set()

    while(current) {
        hashSet.add(current)
        current = current.next
    }

    current = headB

    while(current) {
        if(hashSet.has(current))
            return current
        current = current.next
    }
    return null
}

// 3- Optimal Solution Two pointers
var getIntersectionNode = function(headA, headB) {
    // Edge Case
    if(!headA || !headB) return null
    let ptrA = headA
    let ptrB = headB

    while(ptrA !== ptrB) {
        if(ptrA === null)
            ptrA = headB
        else
            ptrA = ptrA.next
        
        if(ptrB === null)
            ptrB = headA
        else
            ptrB = ptrB.next
    }
    // ptrA === PtrB and not equal null
    return ptrA === ptrB && ptrA && ptrB ? ptrA : null
};
