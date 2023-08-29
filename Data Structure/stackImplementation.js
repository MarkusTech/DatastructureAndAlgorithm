/*
push() - add an element to the top of the stack
pop() - remove the top most element from the stack
peek() - get the value of the top from the stack
isEmpty() - check if the stack is empty
size() - get the number of element in the stack
print() - visualize the element in the stack
*/
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();

console.log(stack.pop());
stack.print();
