class Dictionary {
  constructor() {
      this.items = {};
    }
    //设置字典的键值对
  set(key, value) {
      this.items[key] = value;
      return this;
    }
    //获取某个元素
  get(key) {
      return this.has(key) ? this.items[key] : undefined;
    }
    //移除元素
  remove(key) {
      if (!this.has(key)) return false;
      delete this.items[key];
      return true;
    }
    //展示字典的键
  keys() {
      return Object.keys(this.items).join(' ');
    }
    //字典的大小
  size() {
      return Object.keys(this.items).length;
    }
    //展示字典的值
  values() {
    return Object.values(this.items).join(' ');
  }
  clear() {
    this.items = {};
    return this;
  }
}