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

}