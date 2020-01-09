//双端队列，可以双端操作
class Deque {
  constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
    //在双端队列前端添加新的元素
  addFront(element) {
      if (this.isEmpty()) {
        this.addBack(element);
      } else if (this.lowestCount > 0) {
        this.lowestCount--;
        this.items[this.lowestCount] = element;
      } else {
        for (let i = this.count; i > 0; i--) {
          this.items[i] = this.items[i - 1];
        }
        this.count++;
        this.lowestCount = 0;
        this.items[0] = element;
      }
    }
    //在双端队列后端添加新的元素
    addBack(element){
      this.items[this.count] = element;
      this.count++;
    }
    //从前端移除
    removeFront(){
      if (this.isEmpty()) {
        return undefined;
      }
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
    //从后端移除，同stack的pop()
    //返回前端第一个元素
    //返回后端第一个元素
}