class SortedList {

  constructor() {
    this.items = new Array();
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort();
  }

  get(pos) { 
    return this.items[pos - 1];
  }

  max() { 
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[this.length - 1];
  }

  min() { 
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[0];
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.round(this.sum() / this.length);
   }

  sum() { 
    if (this.length === 0) {
      return 0;
    }

    return this.items.reduce(function(acc, cur) {
      return acc + cur;
    });
  }
};

module.exports = SortedList;
