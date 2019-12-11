class Stack {
  constructor() {
      this.items = [];
    }
    //入栈操作
  push(element = '') {
      if (!element) return;
      this.items.push(element);
      return this;
    }
    //出栈操作
  pop() {
      this.items.pop();
      return this;
    }
    //查看栈顶元素，理论上只能看到栈顶或者即将处理的元素
  peek() {
      return this.items[this.size() - 1];
    }
    //打印栈数据
  print() {
      return this.items.join(' ');
    }
    //栈是否为空
  isEmpty() {
      return this.items.length == 0;
    }
    //返回栈的元素个数
  size() {
    return this.items.length;
  }
}