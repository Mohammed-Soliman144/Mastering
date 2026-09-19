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
```javascript []
// class MinStack {
//     constructor() {
//         this.stack = []
//         this.minStack = []
//     }

//     push(value) {
//         this.stack.push(value)
//         let min = this.minStack.length === 0 ? value : Math.min(value, this.minStack.length - 1)
//         this.minStack.push(min)
//         return this
//     }

//     pop() {
//         this.stack.pop()
//         this.minStack.pop()
//         return this
//     }

//     top() {
//         return this.stack[this.stack.length - 1]
//     }

//     getMin() {
//         return this.minStack[this.minStack.length - 1]
//     }
// }

/**
 * the top of the stack => suppose stack is group of layers, so first element added to stack set on the left (which is the bottom) and last element added to its set on the right (which is the top) that matched with LIFO
 * the minStack => stores the minimum value in the main stack in its corresponding position and problem set constraint O(1): T (so must be not use .sort() method O(N): T) 
 * minStack always the minimum value set on the top (on the end side)
 * minStack compare between new element inserted with last value in the main stack then set the minimum one on the top
 */

var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value)
    let min = this.minStack.length === 0 ? value : Math.min(value, this.minStack[this.minStack.length - 1])
    this.minStack.push(min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```