class Set {
  constructor() {
      this.items = [];
    }
    /**
     * @method add 添加元素
     * @param {String} element
     * @return {Boolean}
     */
  add(element = '') {
      if (this.items.indexOf(element) >= 0) return false;
      this.items.push(element);
      return true;
    }
    //集合的大小
  size() {
      return this.items.length;
    }
    //集合是否包含某指定元素
  has(element = '') {
      return this.items.indexOf(element) >= 0;
    }
    //展示集合
  show() {
      return this.items.join(' ');
    }
    //移除某个元素
  remove(element) {
      let pos = this.items.indexOf(element); //获取元素的标号
      if (pos < 0) return false; //未找到元素
      this.items.splice(pos, 1); //移除该元素
      return true;
    }
    /**
     * @method union 并集
     * @param {Array} set 数组集合
     * @return {Object} 返回并集的对象
     */

  union(set = []) {
      let tempSet = new Set(); //创建一个集合
      for (let i = 0; i < this.items.length; i++) {
        tempSet.add(this.items[i]); //将传入的集合克隆
      }
      for (let i = 0; i < set.items.length; i++) {
        if (tempSet.has(set.items[i])) continue;
        tempSet.items.push(set.items[i]); //没有则把本集合中的元素推入
      }
      return tempSet;
    }
    /**
     * @method interset 交集
     * @param {Array} set 数组集合
     * @return {Object} 返回交集的对象
     */
  intersect(set = []) {
      let tempSet = new Set();
      for (let i = 0; i < this.items.length; i++) {
        if (set.has(this.items[i])) {
          tempSet.add(this.items[i]);
        }
      }
      return tempSet;
    }
    /**
     * @method isSubsetOf 【A】是【B】的子集？
     * @param {Array} set 数组集合
     * @return {Boolean} 返回真假值
     */
  isSubsetOf(set = []) {
    if (this.size() > set.size()) return false;
    this.items.forEach * (item => {
      if (!set.has(item)) return false;
    });
    return true;
  }
}