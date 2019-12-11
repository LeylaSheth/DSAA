class Queue {
  constructor() {
      this.items = [];
    }
    //入队操作
  enqueue(element) {
      if (element === undefined) return;
      this.items.push(element);
      return this;
    }
    //出队操作
  dequeue() {
      return this.items.shift();
    }
    //查看队前元素或即将处理的怨怒是
  front() {
      return this.items[0];
    }
    //查看队列长度
  len() {
      return this.items.length;
    }
    //打印队列数据
  print() {
    return this.items.join(" ");
  }
}