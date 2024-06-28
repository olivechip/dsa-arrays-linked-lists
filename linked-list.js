/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  
  /** getNode(idx): get Node at idx. */

  getNode(idx) {
    if (!this.head) throw error;

    let current = this.head;
    let count = 0;
    while (current !== null && count < idx){
      current = current.next;
      count++;
    }
    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } 
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw error;

    let current = this.head;
    let newTail = current;

    while (current.next){
      newTail = current;
      current = current.next;
    }
    if (this.head === this.tail){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw error;

    let current = this.head;
    let newHead = this.head.next;

    if (this.head === this.tail){
      this.head = null;
      this.tail = null;
    } else {
      this.head = newHead;
    }
    this.length--;
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) throw error;

    let current = this.head;
    let count = 0;
    while (current !== null && count < idx){
      current = current.next;
      count++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) throw error;

    let current = this.head;
    let count = 0;
    while (current !==null && count < idx){
      current = current.next;
      count++;
    } 
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid index');
    };

    if (idx === 0){
      return this.unshift(val);
    };
    if (idx === this.length){
      return this.push(val);
    };

    let current = this.getNode(idx);
    let prev = this.getNode(idx-1);

    let newNode = new Node(val);
    prev.next = newNode;
    newNode.next = current;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid index');
    };

    let current = this.head;

    if (this.length === 1){
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    };

    if (idx === 0){
      this.shift();
    }
    if (idx === this.length-1){
      this.pop();
    }

    let prev = this.getNode(idx-1);
    prev.next = current.next;
    this.length--;
    return current;
  }
    

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0;

    if (this.length === 1) return this.head;

    let total = 0;
    for (let i = 0; i < this.length; i++){
      total += this.getNode(i).val;
    }
    return total/this.length;
  }
}

module.exports = LinkedList;
