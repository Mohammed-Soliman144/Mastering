function lastStoneWeight(stones: number[]): number {
    // using stack and sort with O(N**2 log N): T, O(N): S
    // sort array method is O(N log N) we do sorting for each iteration so O(N**2 Log N): T
    while(stones.length > 1) {
        stones.sort((a, b) => (a - b))
        const y = stones.pop()!
        const x = stones.pop()!
        if(y !== x) stones.push(y - x)
    }
    return stones[0] ?? 0
}