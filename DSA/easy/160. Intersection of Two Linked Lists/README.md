# LeetCode #160 – Intersection of Two Linked Lists

**Difficulty:** Easy  
**Topics:** Linked List, Hash Table, Two Pointers

## Problem Description

Given the heads of two singly linked lists, `headA` and `headB`, return the node at which the two lists intersect.

If the two linked lists have no intersection, return `null`.

The test cases guarantee that there are no cycles in either linked list.

**Important:** The linked lists must retain their original structure after the function returns.

## Examples

### Example 1

**Input:**
```text
intersectVal = 8
listA = [4,1,8,4,5]
listB = [5,6,1,8,4,5]
skipA = 2
skipB = 3
```

**Output:**
```text
Intersected at '8'
```

**Explanation:**

The intersection occurs at the node with value `8`.

- List A has 2 nodes before the intersection.
- List B has 3 nodes before the intersection.
- Both lists share the same node references from node `8` onward.

### Example 2

**Input:**
```text
intersectVal = 2
listA = [1,9,1,2,4]
listB = [3,2,4]
skipA = 3
skipB = 1
```

**Output:**
```text
Intersected at '2'
```

**Explanation:**

The intersection occurs at the node with value `2`.

- List A has 3 nodes before the intersection.
- List B has 1 node before the intersection.

### Example 3

**Input:**
```text
intersectVal = 0
listA = [2,6,4]
listB = [1,5]
skipA = 3
skipB = 2
```

**Output:**
```text
No intersection
```

**Explanation:**

The two linked lists do not intersect, so return `null`.

## Important Notes

- Intersection means both lists point to the exact same node in memory.
- Having the same node value does not mean the nodes intersect.
- The original linked lists must not be modified.
- The lists contain no cycles.

## Constraints

- The number of nodes in `listA` is `m`.
- The number of nodes in `listB` is `n`.
- `1 <= m, n <= 3 * 10^4`
- `1 <= Node.val <= 10^5`
- `0 <= skipA <= m`
- `0 <= skipB <= n`
- `intersectVal` is `0` if the lists do not intersect.
- If the lists intersect:
  `intersectVal == listA[skipA] == listB[skipB]`

## Follow-up

Can you write a solution that runs in **O(m + n) time** and uses only **O(1) extra space**?