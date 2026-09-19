/**
 * O(1): T and O(N): S
 * which use another symmetric stack to store minimum value in corresponding positions in stack but with different values which minStack only store all minimum values
 */
class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(value) {
        this.stack.push(value)
        const minimum = this.minStack.length === 0? value : Math.min(value, this.minStack[this.minStack.length - 1])
        this.minStack.push(minimum)
        return this
    }

    pop() {
        this.stack.pop()
        this.minStack.pop()
        return this
    }

    // STACK Follow => LIFO 
    /**
     * push(1)
     * push(2)
     * push(3)
     * stack [1, 2, 3] Last element added is first element execute in stack which is 3
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    getMinimum() {
        return this.minStack[this.minStack.length - 1]
    }
}

var MinStack = function () {
    this.stack = []
    this.minStack = []
}


MinStack.prototype.push = function(value) {
    this.stack.push(value)
    const minimum = this.minStack.length === 0? value : Math.min(value, this.minStack[this.minStack.length - 1]) 
    this.minStack.push(minimum)
    return this
}

MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
    return this
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMinimum = function() {
    return this.minStack[this.minStack.length - 1]
}