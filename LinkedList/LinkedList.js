function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.append = append;
}

function append(item) {
  let newNode = new Node(item)
  let current = this.head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
}

function remove(item) {
  let prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

function findPrevious(item) {
  let currNode = this.head;
  while (!(currNode.next == null) && (currNode.next.element !== item)) {
    //当curr存在后继节点且后继节点的值不为item时，后移一位
    currNode = currNode.next;
  }
  return currNode;
}

function display() {
  let currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next; //后移一位
  }
}

function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode;
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

let l1 = new LinkedList();
let l2 = new LinkedList()
l1.insert(2, "head");
l1.insert(4, 2);
l1.append(3);
l2.insert(5, "head");
l2.insert(6, 5);
l2.insert(4, 6)


let getNum = function(l) {
  let s = [],
    num = 0
  let currNode = l.head.next
  while (currNode !== null) {
    s.push(currNode.element)
    currNode = currNode.next
  }

  while (s.length > 0) {
    num += s.pop() * 10 ** s.length
  }
  return num
}
console.log(getNum(l1));
console.log(getNum(l2));

var addTwoNumbers = function(l1, l2) {
  let num = getNum(l1) + getNum(l2);
  let s = []
  while (num > 0) {
    s.push(num % 10)
    num = Math.floor(num / 10);
  }
  let l3 = new LinkedList();
  while (s.length > 0) {
    l3.append(s.shift());
  }
  return l3
};
addTwoNumbers(l1, l2).display()