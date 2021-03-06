class Stack {
  constructor() {
      this.count = 0;
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
      if (this.isEmpty()) {
        return undefined;
      }
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
  clear() {
    this.items = [];
    this.count = 0
  }
}

//进制转换算法
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return ''; //进制转化的限制
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}