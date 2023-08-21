/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }
//! ========================(8/21/23)=================
    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) { 
        this.items.push(item);
        // return this.items.length;
        return this.size();
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { 
        if(this.items.length == 0) {
            return undefined;
        }
        return this.items.pop();
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() { 
        if(this.items.length == 0) {
            return undefined;
        }
        return this.items[this.items.length -1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.items.length == 0;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        return this.items.length;
    }

}


let empty = new Stack();
let myList = new Stack()

/*
    *** Bonus
    Recreate the stack class using a singly linked list to store the items instead of an array
    Stacks are linear data structures in that you have one element
*/
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }



    // Time: O(n) linear, n = list length
    // Space: O(n)
    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}


console.log("============================ Test Cases ============================");
console.log(" ===== Push Test:");
console.log(myList.push(1));
console.log(myList.push(5));
console.log(myList.push(25));

console.log(myList);

console.log(" ===== Pop Test:");
console.log(myList.pop());
console.log(myList);


console.log(" ===== Peek Test:");
console.log(myList.peek());
console.log(myList);


console.log(" ===== IsEmpty Test:");
console.log(empty.isEmpty());
console.log(empty);

console.log(" ===== Size Test:");
console.log(myList.size());
console.log(myList);
