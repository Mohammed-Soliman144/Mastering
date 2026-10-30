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
```typescript []
function lastStoneWeight(stones: number[]): number {
    // not optimal O(n log n) * n => O(N**2 log N): T, O(N): S
    while(stones.length > 1 ) {
        stones.sort((a, b) => (a - b))
        const y = stones.pop()!;
        const x = stones.pop()!;
        if(y !== x) stones.push(y - x)
    }
    return stones[0] ?? 0
};
```