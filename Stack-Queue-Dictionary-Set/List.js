class List {
  constructor() {
      this.listSize = 0; //列表的元素个数
      this.pos = 0; //列表的当前位置
      this.list = [];
    }
    //清空列表中的所有元素
  clear() {
      delete this.list;
      this.list = [];
      this.listSize = this.pos = 0
    }
    //返回当前位置的元素
  getElement() {
      return this.list[this.pos];
    }
    //在现有元素后插入新元素
  insert(element, after) {
      let insertPos = this.find(after);
      if (insertPos > -1) {
        this.list.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
      }
      return false;
    }
    //在列表的末尾添加新元素
  append(element) {
      this.list[this.listSize++] = element;
    }
    //在列表中查找某一元素
  find(element) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] == element) {
          return i;
        }
      }
      return -1;
    }
    //从列表中删除元素
  remove(element) {
      let fountAt = this.find(element);
      if (fountAt > -1) {
        this.list.splice(fountAt, 1);
        --this.listSize;
        return true;
      }
      return false;
    }
    //判断给定值是否在列表中
  contains(element) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] == element) {
          return true;
        }
      }
      return false;
    }
    //将列表的当前位置移动到第一个元素
  front() {
      this.pos = 0;
    }
    //将列表的当前位置移动到最后一个怨怒是
  end() {
      this.pos = this.listSize - 1;
    }
    //将当前位置后移一位
  prev() {
      if (this.pos > 0) {
        this.pos--;
      }
    }
    //将当前位置前移一位
  next() {
      if (this.pos < this.listSize - 1) {
        this.pos++;
      }
    }
    //返回列表的当前位置
  currPos() {
      return this.pos;
    }
    //将当前位置移动到指定位置
  moveTo(position) {
    this.pos = position;
  }

}