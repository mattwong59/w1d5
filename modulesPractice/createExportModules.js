'use strict';

const MyList = {
  add: function (...args) {
    this.arr.push(...args);
    return this.arr;
  },

  sort: function () {
    return this.arr.sort((a, b) => (a-b));
  }
}

MyList.arr = [1];
// MyList.add.bind(MyList);
// MyList.sort.bind(MyList);

module.exports = MyList;