/**
 * use Two stacks technique with LIFO to simulate output Stack with FIFO behavior
 * so we use inputStack with LIFO and outputStack with LIFO and outputStack produced output Stack with FIFO behavior when perform pop() or peek() (with helper method that only execute once even if calling mutliple times)
 * so Two Stacks Technique with LIFO produces output Stack with (FIFO) and enhance or amortized time complexity from O(N) to O(1) 
 */
// class MyQueue {
//     constructor() {
//         this.inStack = []
//         this.outStack = []
//     }

//     push(x) {
//         this.inStack.push(x)
//         return this
//     }

//     // when do peek() or pop() on input Stack must call move once
//     // move is delete last element from input Stack and push it to output Stack
//     //Queue with FIFO behavior produced when perform pop() or peek() on stacks
//     #move() {
//         if(this.outStack.length === 0) {
//             while(this.inStack.length > 0) {
//                 this.outStack.push(this.inStack.pop())
//             }
//         }
//     }

//     pop() {
//         this.#move()
//         return this.outStack.pop()
//     }

//     peek() {
//         this.#move()
//         return this.outStack[this.outStack.length - 1]
//     }

//     empty() {
//         return !this.outStack.length && !this.inStack.length
//     }
// }

var MyQueue = function() {
    this.inStack = []
    this.outStack = []    
};

/*
 * when do peek() or pop() on input Stack must call move once
 * move is delete last element from input Stack and push it to output Stack
 * Queue with FIFO behavior produced when perform pop() or peek() on stacks
 */
MyQueue.prototype.move = function () {
    if(!this.outStack.length) {
        while(this.inStack.length) {
            this.outStack.push(this.inStack.pop())
        }
    }
}

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
    return this    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.move()
    return this.outStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.move()
    return this.outStack[this.outStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.outStack.length && !this.inStack.length
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */