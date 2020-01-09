function LinkedList() {
  let length = 0;
  let head = null; //头节点
  //辅助类：表示要加入链表的项
  let Node = function(element) {
    this.val = element;
    this.next = null; //该节点的下一个节点暂时为空
  };

  //查找指定位置的元素
  this.findIndex = index => {
    let currentNode = head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  //查找指定元素的位置
  this.findElement = element => {
    let currentNode = head;
    while (currentNode.val !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  //链表的添加删除都需要用特定的方法
  //向链表的尾部添加节点
  this.append = function(element) {
    let node = new Node(element);
    if (!head) {
      head = node;
    } else {
      let current = head;
      while (!!current.next) {
        current = current.next;
      }
      current.next = node;
      //head=head.next;
    }
    length++;
  }
}